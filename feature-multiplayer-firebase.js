// ============================================================
// Scripture Scholar — Multiplayer Firebase Backend (Phase 2)
// ============================================================
// Real device-to-device sync via Firebase Realtime Database.
// This provides the MP_FB object that the multiplayer UI calls
// into. If Firebase fails to load, MP_FB.ready stays false and
// the UI falls back to the local mock engine.
//
// Data model:
//   rooms/<CODE>/
//     status      "lobby" | "playing" | "revealing" | "finished"
//     hostId      <clientId>
//     createdAt   <server timestamp>
//     currentIdx  -1 (lobby) | 0..n
//     startedAt   <server timestamp of current question>
//     questions   [ {q, options[], correct, ref, note} ]
//     players/<clientId>/
//        name, score, answeredIdx, answeredAt, lastDelta, isHost
// ============================================================

  const MP_FB = {
    ready: false,          // true once Firebase SDK + DB are live
    app: null,
    db: null,
    fns: {},               // ref, set, update, onValue, get, remove, etc.
    clientId: null,        // unique per device/session
    roomRef: null,         // current room reference
    unsub: null,           // unsubscribe fn for the room listener
    serverTimestamp: null
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

  // Generate a stable-ish per-session client id
  function mpFbClientId() {
    if (!MP_FB.clientId) {
      MP_FB.clientId = 'c_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
    }
    return MP_FB.clientId;
  }

  // Dynamically load the Firebase modular SDK (v10) from the CDN.
  // Uses dynamic import of ES modules. Resolves true on success.
  async function mpFbInit() {
    if (MP_FB.ready) return true;
    try {
      const appMod = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
      const dbMod = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js');
      MP_FB.app = appMod.initializeApp(MP_FB_CONFIG);
      MP_FB.db = dbMod.getDatabase(MP_FB.app);
      MP_FB.fns = {
        ref: dbMod.ref,
        set: dbMod.set,
        update: dbMod.update,
        get: dbMod.get,
        onValue: dbMod.onValue,
        remove: dbMod.remove,
        onDisconnect: dbMod.onDisconnect,
        child: dbMod.child
      };
      MP_FB.serverTimestamp = dbMod.serverTimestamp;
      MP_FB.clientId = mpFbClientId();
      MP_FB.ready = true;
      return true;
    } catch (e) {
      console.warn('Firebase multiplayer unavailable, using local mock:', e && e.message);
      MP_FB.ready = false;
      return false;
    }
  }

  // ---- Room operations ----

  async function mpFbCreateRoom(code, hostName, questions) {
    const id = mpFbClientId();
    const roomData = {
      status: 'lobby',
      hostId: id,
      createdAt: MP_FB.serverTimestamp(),
      currentIdx: -1,
      startedAt: 0,
      questions: questions,
      players: {
        [id]: { name: hostName, score: 0, answeredIdx: -1, answeredAt: 0, lastDelta: 0, isHost: true }
      }
    };
    MP_FB.roomRef = MP_FB.fns.ref(MP_FB.db, 'rooms/' + code);
    await MP_FB.fns.set(MP_FB.roomRef, roomData);
    // Auto-remove this player if they disconnect
    const meRef = MP_FB.fns.ref(MP_FB.db, 'rooms/' + code + '/players/' + id);
    try { MP_FB.fns.onDisconnect(meRef).remove(); } catch (e) {}
    return id;
  }

  // Returns 'ok' | 'notfound' | 'started'
  async function mpFbJoinRoom(code, playerName) {
    const roomRef = MP_FB.fns.ref(MP_FB.db, 'rooms/' + code);
    const snap = await MP_FB.fns.get(roomRef);
    if (!snap.exists()) return 'notfound';
    const room = snap.val();
    if (room.status !== 'lobby') return 'started';
    const id = mpFbClientId();
    const meRef = MP_FB.fns.ref(MP_FB.db, 'rooms/' + code + '/players/' + id);
    await MP_FB.fns.set(meRef, { name: playerName, score: 0, answeredIdx: -1, answeredAt: 0, lastDelta: 0, isHost: false });
    try { MP_FB.fns.onDisconnect(meRef).remove(); } catch (e) {}
    MP_FB.roomRef = roomRef;
    return 'ok';
  }

  // Subscribe to room updates. callback(roomData) fires on every change.
  function mpFbWatchRoom(code, callback) {
    const roomRef = MP_FB.fns.ref(MP_FB.db, 'rooms/' + code);
    MP_FB.roomRef = roomRef;
    MP_FB.unsub = MP_FB.fns.onValue(roomRef, (snap) => {
      callback(snap.exists() ? snap.val() : null);
    });
  }

  function mpFbStopWatching() {
    if (MP_FB.unsub) { try { MP_FB.unsub(); } catch (e) {} MP_FB.unsub = null; }
  }

  // Host: start the game
  async function mpFbStartGame(code) {
    await MP_FB.fns.update(MP_FB.fns.ref(MP_FB.db, 'rooms/' + code), {
      status: 'playing',
      currentIdx: 0,
      startedAt: MP_FB.serverTimestamp()
    });
  }

  // Host: advance to a question index (resets player answers)
  async function mpFbGoToQuestion(code, idx, players) {
    const updates = {
      status: 'playing',
      currentIdx: idx,
      startedAt: MP_FB.serverTimestamp()
    };
    // Clear each player's answer for the new question
    Object.keys(players || {}).forEach(pid => {
      updates['players/' + pid + '/answeredIdx'] = -1;
      updates['players/' + pid + '/answeredAt'] = 0;
      updates['players/' + pid + '/lastDelta'] = 0;
    });
    await MP_FB.fns.update(MP_FB.fns.ref(MP_FB.db, 'rooms/' + code), updates);
  }

  // Host: move room to "revealing" (locks answers, shows leaderboard)
  async function mpFbReveal(code) {
    await MP_FB.fns.update(MP_FB.fns.ref(MP_FB.db, 'rooms/' + code), { status: 'revealing' });
  }

  // Host: finish the game
  async function mpFbFinish(code) {
    await MP_FB.fns.update(MP_FB.fns.ref(MP_FB.db, 'rooms/' + code), { status: 'finished' });
  }

  // Player: submit an answer (writes index, timestamp, and computed score delta)
  async function mpFbSubmitAnswer(code, idx, delta) {
    const id = mpFbClientId();
    await MP_FB.fns.update(MP_FB.fns.ref(MP_FB.db, 'rooms/' + code + '/players/' + id), {
      answeredIdx: idx,
      answeredAt: MP_FB.serverTimestamp(),
      lastDelta: delta
    });
  }

  // Host: commit this round's deltas into total scores
  async function mpFbCommitScores(code, players) {
    const updates = {};
    Object.keys(players || {}).forEach(pid => {
      const p = players[pid];
      updates['players/' + pid + '/score'] = (p.score || 0) + (p.lastDelta || 0);
    });
    await MP_FB.fns.update(MP_FB.fns.ref(MP_FB.db, 'rooms/' + code), updates);
  }

  // Leave: remove self from room (and if host, optionally close room)
  async function mpFbLeaveRoom(code, isHost) {
    const id = mpFbClientId();
    mpFbStopWatching();
    try {
      if (isHost) {
        // Host leaving ends the room for everyone
        await MP_FB.fns.remove(MP_FB.fns.ref(MP_FB.db, 'rooms/' + code));
      } else {
        await MP_FB.fns.remove(MP_FB.fns.ref(MP_FB.db, 'rooms/' + code + '/players/' + id));
      }
    } catch (e) {}
  }
