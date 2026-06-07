// ============================================================
// Scripture Scholar — Multiplayer Firebase Backend (Phase 2)
// ============================================================
// Real device-to-device sync via Firebase Realtime Database.
// Uses the Firebase COMPAT SDK loaded via <script> tags in
// index.html (global `firebase`). This avoids ES-module / dynamic
// import() quirks in classic scripts.
//
// If the SDK isn't present or init fails, MP_FB.ready stays false
// and the multiplayer UI falls back to the local mock engine.
//
// Data model:
//   rooms/<CODE>/
//     status      "lobby" | "playing" | "revealing" | "finished"
//     hostId, createdAt, currentIdx, startedAt
//     questions   [ {q, options[], correct, ref, note} ]
//     players/<clientId>/  { name, score, answeredIdx, answeredAt, lastDelta, isHost }
// ============================================================

  const MP_FB = {
    ready: false,
    db: null,
    clientId: null,
    roomRef: null,
    lastError: null
  };

  const MP_FB_CONFIG = {
    apiKey: "AIzaSyCSL3KO3OH4W3KMebwTUYLx0BVFmD8M6wQ",
    authDomain: "scripture-scholar-a6ee3.firebaseapp.com",
    databaseURL: "https://scripture-scholar-a6ee3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "scripture-scholar-a6ee3",
    storageBucket: "scripture-scholar-a6ee3.firebasestorage.app",
    messagingSenderId: "1052827236323",
    appId: "1:1052827236323:web:1786ce62c56fa4d1cbd2d6"
  };

  function mpFbClientId() {
    if (!MP_FB.clientId) {
      // Persist the device id so a page refresh keeps the SAME identity —
      // this is what lets a player reconnect to their spot after refreshing.
      let stored = null;
      try { stored = localStorage.getItem('scripture-scholar-deviceid'); } catch (e) {}
      if (stored) {
        MP_FB.clientId = stored;
      } else {
        MP_FB.clientId = 'c_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
        try { localStorage.setItem('scripture-scholar-deviceid', MP_FB.clientId); } catch (e) {}
      }
    }
    return MP_FB.clientId;
  }

  // Initialize using the global `firebase` compat object.
  async function mpFbInit() {
    if (MP_FB.ready) return true;
    try {
      if (typeof firebase === 'undefined' || !firebase.initializeApp) {
        MP_FB.lastError = 'Firebase SDK not loaded';
        return false;
      }
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(MP_FB_CONFIG);
      }
      MP_FB.db = firebase.database();
      MP_FB.clientId = mpFbClientId();
      MP_FB.ready = true;
      return true;
    } catch (e) {
      MP_FB.lastError = (e && e.message) ? e.message : 'init failed';
      MP_FB.ready = false;
      return false;
    }
  }

  function mpFbServerTime() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  // ---- Room operations ----

  async function mpFbCreateRoom(code, hostName, questions, avatar) {
    const id = mpFbClientId();
    const roomData = {
      status: 'lobby',
      hostId: id,
      createdAt: mpFbServerTime(),
      currentIdx: -1,
      startedAt: 0,
      questions: questions,
      categories: null,   // host's category selection (null/[] = all/random)
      teamMode: false,    // false = solo; true = team play
      numTeams: 2,        // number of teams when teamMode
      maxTeamSize: 5,     // max players per team when teamMode
      players: {
        [id]: { name: hostName, score: 0, answeredIdx: -1, answeredAt: 0, lastDelta: 0, isHost: true, avatar: avatar || null, ready: true, team: null }
      }
    };
    MP_FB.roomRef = MP_FB.db.ref('rooms/' + code);
    await MP_FB.roomRef.set(roomData);
    // NOTE: we intentionally do NOT set onDisconnect().remove() here. Players
    // (and the host) stay in the room when they background the app, lock the
    // screen, or briefly lose connection. They leave only by deliberately
    // leaving or by the host removing them. Refresh → reconnect to the same id.
    return id;
  }

  // Host writes their current category selection so all players can see it.
  async function mpFbSetCategories(code, categories) {
    try { await MP_FB.db.ref('rooms/' + code + '/categories').set(categories && categories.length ? categories : null); } catch (e) {}
  }

  // Host sets team configuration (mode + counts).
  async function mpFbSetTeamConfig(code, teamMode, numTeams, maxTeamSize) {
    try {
      await MP_FB.db.ref('rooms/' + code).update({
        teamMode: !!teamMode,
        numTeams: numTeams || 2,
        maxTeamSize: maxTeamSize || 5
      });
    } catch (e) {}
  }

  // A player sets (or clears) their own team.
  async function mpFbSetMyTeam(code, playerId, team) {
    try { await MP_FB.db.ref('rooms/' + code + '/players/' + playerId + '/team').set(team || null); } catch (e) {}
  }

  // Host bulk-assigns teams (randomize). teamsById = { playerId: teamNumber }.
  async function mpFbAssignTeams(code, teamsById) {
    try {
      const updates = {};
      Object.keys(teamsById).forEach(pid => {
        updates['players/' + pid + '/team'] = teamsById[pid];
      });
      await MP_FB.db.ref('rooms/' + code).update(updates);
    } catch (e) {}
  }

  // Returns 'ok' | 'notfound' | 'started' | 'rejoined'
  async function mpFbJoinRoom(code, playerName, avatar) {
    const roomRef = MP_FB.db.ref('rooms/' + code);
    const snap = await roomRef.get();
    if (!snap.exists()) return 'notfound';
    const room = snap.val();
    const id = mpFbClientId();
    const players = room.players || {};

    // RECONNECT: if this device id is already a player in the room, slot back
    // into the existing spot (keep score, team, ready) instead of creating a
    // new one or resetting. Works even if the game is already in progress.
    if (players[id]) {
      MP_FB.roomRef = roomRef;
      return 'rejoined';
    }

    // New player can only join while still in the lobby.
    if (room.status !== 'lobby') return 'started';
    const meRef = MP_FB.db.ref('rooms/' + code + '/players/' + id);
    await meRef.set({ name: playerName, score: 0, answeredIdx: -1, answeredAt: 0, lastDelta: 0, isHost: false, avatar: avatar || null, ready: false, team: null });
    // No onDisconnect auto-removal — see note in mpFbCreateRoom.
    MP_FB.roomRef = roomRef;
    return 'ok';
  }

  // Toggle a player's ready state in the lobby.
  async function mpFbSetReady(code, ready) {
    const id = mpFbClientId();
    try { await MP_FB.db.ref('rooms/' + code + '/players/' + id + '/ready').set(!!ready); } catch (e) {}
  }

  // Host removes (kicks) a player from the room by their id.
  async function mpFbKickPlayer(code, playerId) {
    try {
      await MP_FB.db.ref('rooms/' + code + '/players/' + playerId).remove();
      // Flag the kick so the removed player's app can show a message and exit.
      await MP_FB.db.ref('rooms/' + code + '/kicked/' + playerId).set(mpFbServerTime());
    } catch (e) {}
  }

  // Checks whether this device already belongs to a room (for the rejoin prompt).
  // Returns { code, room } if found and still active, else null.
  async function mpFbCheckReconnect(code) {
    if (!code) return null;
    try {
      const id = mpFbClientId();
      const snap = await MP_FB.db.ref('rooms/' + code).get();
      if (!snap.exists()) return null;
      const room = snap.val();
      const players = room.players || {};
      if (players[id]) return { code: code, room: room };
      return null;
    } catch (e) { return null; }
  }

  // Send a chat message into the room. Messages live under rooms/<code>/messages
  // and arrive via the existing room listener. We cap stored length defensively.
  async function mpFbSendChat(code, name, text, avatar) {
    if (!text) return;
    const id = mpFbClientId();
    const msg = {
      senderId: id,
      name: (name || 'Player').slice(0, 20),
      text: String(text).slice(0, 200),
      avatar: avatar || null,
      at: mpFbServerTime()
    };
    try { await MP_FB.db.ref('rooms/' + code + '/messages').push(msg); } catch (e) {}
  }

  // Host can clear the lobby chat.
  async function mpFbClearChat(code) {
    try { await MP_FB.db.ref('rooms/' + code + '/messages').remove(); } catch (e) {}
  }

  function mpFbWatchRoom(code, callback) {
    const roomRef = MP_FB.db.ref('rooms/' + code);
    MP_FB.roomRef = roomRef;
    MP_FB._cb = (snap) => callback(snap.exists() ? snap.val() : null);
    roomRef.on('value', MP_FB._cb);
  }

  function mpFbStopWatching() {
    if (MP_FB.roomRef && MP_FB._cb) {
      try { MP_FB.roomRef.off('value', MP_FB._cb); } catch (e) {}
      MP_FB._cb = null;
    }
  }

  async function mpFbStartGame(code, questions) {
    const update = {
      status: 'playing',
      currentIdx: 0,
      startedAt: mpFbServerTime()
    };
    // If the host supplied a freshly-built (category-filtered) question set,
    // write it so all players use the correct questions.
    if (questions && questions.length) update.questions = questions;
    await MP_FB.db.ref('rooms/' + code).update(update);
  }

  async function mpFbGoToQuestion(code, idx, players) {
    const updates = {
      status: 'playing',
      currentIdx: idx,
      startedAt: mpFbServerTime()
    };
    Object.keys(players || {}).forEach(pid => {
      updates['players/' + pid + '/answeredIdx'] = -1;
      updates['players/' + pid + '/answeredAt'] = 0;
      updates['players/' + pid + '/lastDelta'] = 0;
    });
    await MP_FB.db.ref('rooms/' + code).update(updates);
  }

  async function mpFbReveal(code) {
    await MP_FB.db.ref('rooms/' + code).update({ status: 'revealing' });
  }

  async function mpFbFinish(code) {
    await MP_FB.db.ref('rooms/' + code).update({ status: 'finished' });
  }

  // Host: reset the room back to the lobby for another round, reusing the SAME
  // code. Clears scores/answers for all players and loads a fresh question set.
  async function mpFbResetToLobby(code, players, questions) {
    const updates = {
      status: 'lobby',
      currentIdx: -1,
      startedAt: 0,
      questions: questions
    };
    Object.keys(players || {}).forEach(pid => {
      updates['players/' + pid + '/score'] = 0;
      updates['players/' + pid + '/answeredIdx'] = -1;
      updates['players/' + pid + '/answeredAt'] = 0;
      updates['players/' + pid + '/lastDelta'] = 0;
      // Host stays ready; joiners must ready-up again
      updates['players/' + pid + '/ready'] = (pid === MP_FB.hostId) ? true : false;
    });
    // Track host id so we can keep them ready
    if (MP_FB.roomRef) {
      try {
        const hs = await MP_FB.db.ref('rooms/' + code + '/hostId').get();
        const hostId = hs.val();
        Object.keys(players || {}).forEach(pid => {
          updates['players/' + pid + '/ready'] = (pid === hostId) ? true : false;
        });
      } catch (e) {}
    }
    await MP_FB.db.ref('rooms/' + code).update(updates);
  }

  async function mpFbSubmitAnswer(code, idx, delta) {
    const id = mpFbClientId();
    await MP_FB.db.ref('rooms/' + code + '/players/' + id).update({
      answeredIdx: idx,
      answeredAt: mpFbServerTime(),
      lastDelta: delta
    });
  }

  async function mpFbCommitScores(code, players) {
    const updates = {};
    Object.keys(players || {}).forEach(pid => {
      const p = players[pid];
      updates['players/' + pid + '/score'] = (p.score || 0) + (p.lastDelta || 0);
    });
    await MP_FB.db.ref('rooms/' + code).update(updates);
  }

  async function mpFbLeaveRoom(code, isHost) {
    const id = mpFbClientId();
    mpFbStopWatching();
    try {
      if (isHost) {
        await MP_FB.db.ref('rooms/' + code).remove();
      } else {
        await MP_FB.db.ref('rooms/' + code + '/players/' + id).remove();
      }
    } catch (e) {}
  }
