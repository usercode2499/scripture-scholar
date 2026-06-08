// ============================================================
// Scripture Scholar — Multiplayer (Group Trivia)
// ============================================================
// Kahoot-style live trivia. Uses Firebase Realtime Database for
// real device-to-device play when available (see
// feature-multiplayer-firebase.js). If Firebase fails to load,
// it automatically falls back to a LOCAL MOCK that simulates a
// few other players so the flow still works offline.
//
// The UI renders from a single mpState object. In Firebase mode,
// mpState is kept in sync by a room listener. In mock mode, local
// timers drive it.
// ============================================================

  // Build questions for a game from the multi-format trivia bank, using the
  // host's selected categories (mpState.categories). Falls back to the old
  // Fact Game pool if the bank isn't available.
  function mpGetQuestions(count) {
    const n = count || mpState.NUM_QUESTIONS;
    // If the host picked specific trivia categories, use the categorized bank.
    if (mpState.categories && mpState.categories.length && typeof buildTriviaSet === 'function') {
      const set = buildTriviaSet(n, mpState.categories);
      if (set && set.length) return set;
    }
    // Otherwise draw from the 100+ FACT_BANK with no-repeat tracking (scope
    // 'multiplayer'), so questions don't recur until the whole bank is seen.
    if (typeof fgBuildQuestionSet === 'function' && typeof FACT_BANK !== 'undefined') {
      const set = fgBuildQuestionSet(n, 'multiplayer');
      if (set && set.length) {
        // Convert fact-game render shape → multiplayer question shape.
        return set.map(item => ({
          q: item.q,
          type: 'multiple_choice',
          options: item.options,
          correct: item.correct,
          ref: item.ref,
          note: item.note
        }));
      }
    }
    // Legacy fallback
    if (typeof buildTriviaSet === 'function') {
      const set = buildTriviaSet(n, null);
      if (set && set.length) return set;
    }
    const pool = (typeof FACT_GAME_DATA !== 'undefined') ? FACT_GAME_DATA.slice() : [];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, n).map(item => {
      const opts = item.options.map((text, i) => ({ text, isCorrect: i === item.correct }));
      for (let i = opts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opts[i], opts[j]] = [opts[j], opts[i]];
      }
      return {
        type: 'multiple_choice', category: 'facts',
        q: item.q, ref: item.ref, note: item.note,
        options: opts.map(o => o.text),
        correct: opts.findIndex(o => o.isCorrect)
      };
    });
  }

  const MP_FAKE_NAMES = ['Maria', 'Brother Lee', 'Sister Cruz', 'Elder Tom', 'Joseph', 'Hannah'];

  const mpState = {
    online: false,        // true = Firebase, false = mock
    mode: null,           // 'host' | 'join'
    roomCode: '',
    me: '',               // my display name
    myId: '',             // my client id (firebase mode)
    players: [],          // [{id, name, score, lastDelta, answered, isMe, isHost}]
    questions: [],
    currentIdx: -1,
    questionStartedAt: 0,
    myAnswerIdx: null,
    timerInterval: null,
    timeLeft: 0,
    QUESTION_SECONDS: 20,
    NUM_QUESTIONS: 10,
    categories: [],        // host-selected category ids (empty = all)
    teamMode: false,       // false = solo, true = teams
    numTeams: 2,           // number of teams (2-5) when teamMode
    maxTeamSize: 5,        // max players per team (2-5) when teamMode
    myTeam: null,          // my team number (1..numTeams) or null
    countdownInterval: null,
    bannerInterval: null,
    _timerAudio: null,
    _tickPlayed: false,
    _answered: false,
    botTimers: [],
    lastStatus: null,     // track room status transitions (firebase mode)
    committing: false,
    _xpAwarded: false,
    globalRanks: null,   // { nameLower: rank } cache for lobby display
    messages: []         // lobby chat messages
  };

  function mpRandomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let c = '';
    for (let i = 0; i < 5; i++) c += chars[Math.floor(Math.random() * chars.length)];
    return c;
  }

  function mpMyName() {
    return (typeof state !== 'undefined' && state.username) ? state.username : 'You';
  }

  // The player's current level, so their badge can be shown to others in the room.
  function mpMyLevel() {
    if (typeof state !== 'undefined' && typeof getLevel === 'function') {
      return getLevel(state.xp || 0);
    }
    return 1;
  }

  function escapeHtmlMp(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // ================= ENTRY =================
  // ===== Active-room persistence (for rejoin-after-refresh) =====
  function mpSaveActiveRoom() {
    if (!mpState.online || !mpState.roomCode) return;
    try {
      localStorage.setItem('scripture-scholar-mproom', JSON.stringify({
        code: mpState.roomCode,
        mode: mpState.mode,
        at: Date.now()
      }));
    } catch (e) {}
  }
  function mpClearActiveRoom() {
    try { localStorage.removeItem('scripture-scholar-mproom'); } catch (e) {}
  }
  function mpGetActiveRoom() {
    try {
      const raw = localStorage.getItem('scripture-scholar-mproom');
      if (!raw) return null;
      const data = JSON.parse(raw);
      // Only offer a rejoin for a reasonably recent room (e.g. last 2 hours).
      if (!data || !data.code || (Date.now() - (data.at || 0)) > 2 * 60 * 60 * 1000) {
        mpClearActiveRoom();
        return null;
      }
      return data;
    } catch (e) { return null; }
  }

  // Called on app load: if this device was in a room, offer to rejoin it.
  async function mpMaybeOfferReconnect() {
    const saved = mpGetActiveRoom();
    if (!saved) return;
    // Need Firebase to verify the room still has us in it.
    let canUseFirebase = mpState.online;
    if (!canUseFirebase && typeof mpFbInit === 'function') {
      canUseFirebase = await mpFbInit();
      mpState.online = canUseFirebase;
    }
    if (!canUseFirebase || typeof mpFbCheckReconnect !== 'function') return;
    const found = await mpFbCheckReconnect(saved.code);
    if (!found) { mpClearActiveRoom(); return; }   // room gone or we were removed

    if (typeof showConfirm === 'function') {
      const ok = await showConfirm({
        icon: '🔄', title: 'Rejoin your game?',
        message: 'You were in room ' + saved.code + '. Rejoin where you left off?',
        okText: 'Rejoin', cancelText: 'Not now'
      });
      if (ok) mpReconnectToRoom(saved.code, saved.mode);
      else mpClearActiveRoom();
    }
  }

  // Reconnect this device to a room it already belongs to.
  async function mpReconnectToRoom(code, mode) {
    if (typeof showScreen === 'function') showScreen('screen-multiplayer');
    mpReset();
    mpState.mode = mode || 'join';
    mpState.me = mpMyName();
    mpState.roomCode = code;
    mpState.myId = (typeof mpFbClientId === 'function') ? mpFbClientId() : null;
    mpState.online = true;
    mpSaveActiveRoom();
    mpWatchRoomLive();   // the room watcher will route us to lobby / question / podium
    if (typeof showToast === 'function') showToast('Reconnected to room ' + code);
  }

  function openMultiplayer() {
    mpReset();
    renderMpHome();
    if (typeof showScreen === 'function') showScreen('screen-multiplayer');
    // Kick off Firebase init in the background so it's ready by the time
    // the user picks host/join.
    if (typeof mpFbInit === 'function') {
      mpFbInit().then(ok => { mpState.online = ok; });
    }
  }

  function mpReset() {
    if (mpState.timerInterval) clearInterval(mpState.timerInterval);
    if (mpState.countdownInterval) clearInterval(mpState.countdownInterval);
    if (mpState.bannerInterval) clearInterval(mpState.bannerInterval);
    mpState.countdownInterval = null;
    mpState.bannerInterval = null;
    if (typeof mpStopTimerSound === 'function') mpStopTimerSound();
    const banner = document.getElementById('mpBannerOverlay');
    if (banner) banner.classList.add('hidden');
    mpState.botTimers.forEach(t => clearTimeout(t));
    mpState.botTimers = [];
    if (typeof mpFbStopWatching === 'function') mpFbStopWatching();
    mpState.mode = null;
    mpState.roomCode = '';
    mpState.players = [];
    mpState.questions = [];
    mpState.currentIdx = -1;
    mpState.myAnswerIdx = null;
    mpState.lastStatus = null;
    mpState.committing = false;
    mpState.globalRanks = null;
    mpState.messages = [];
    mpState._chatSeenCount = 0;        // how many chat messages we've already seen
    mpState._chatNotifiedId = null;    // last message id we notified on
    // categories intentionally preserved across reset so host keeps their pick
  }

  // ================= HOME (host or join) =================
  function renderMpHome() {
    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    const onlineNote = mpState.online
      ? '<div class="mp-mock-banner mp-live-banner">🟢 Connected — play live with others on their own phones.</div>'
      : '<div class="mp-mock-banner">✨ Preview mode — connecting… if offline, you\u2019ll play sample players.</div>';
    c.innerHTML = `
      <div class="mp-intro">
        <div class="mp-intro-icon">🎮</div>
        <h2 class="mp-intro-title serif">Group Trivia</h2>
        <p class="mp-intro-sub">Play Book of Mormon trivia live with friends, family, or your class — everyone answers the same questions at the same time.</p>
        <div id="mpConnNote">${onlineNote}</div>
      </div>
      <div class="mp-home-actions">
        <button class="btn btn-gold mp-big-btn" onclick="mpHostGame()">
          <span class="mp-big-btn-icon">👑</span>
          <span class="mp-big-btn-text"><strong>Host a Game</strong><small>Create a room and invite others</small></span>
        </button>
        <button class="btn btn-ghost mp-big-btn" onclick="mpShowJoin()">
          <span class="mp-big-btn-icon">🔑</span>
          <span class="mp-big-btn-text"><strong>Join a Game</strong><small>Enter a room code</small></span>
        </button>
      </div>
    `;
    // Refresh the connection note once init resolves
    if (typeof mpFbInit === 'function') {
      mpFbInit().then(ok => {
        mpState.online = ok;
        const note = document.getElementById('mpConnNote');
        if (note) {
          if (ok) {
            note.innerHTML = '<div class="mp-mock-banner mp-live-banner">🟢 Connected — play live with others on their own phones.</div>';
          } else {
            const reason = (typeof MP_FB !== 'undefined' && MP_FB.lastError) ? MP_FB.lastError : 'offline';
            note.innerHTML = '<div class="mp-mock-banner">✨ Preview mode — you\u2019ll play against sample players.<br><span style="font-size:10px;opacity:0.7;">(' + escapeHtmlMp(reason) + ')</span></div>';
          }
        }
      });
    }
  }

  // ================= HOST =================
  async function mpHostGame() {
    mpState.mode = 'host';
    mpState.me = mpMyName();
    mpState.roomCode = mpRandomCode();

    // Ensure Firebase init has actually completed before deciding.
    // (Reading a stale mpState.online caused it to fall into mock mode.)
    let canUseFirebase = mpState.online;
    if (!canUseFirebase && typeof mpFbInit === 'function') {
      canUseFirebase = await mpFbInit();
      mpState.online = canUseFirebase;
    }

    if (canUseFirebase && typeof mpFbCreateRoom === 'function') {
      // Real room
      const questions = mpGetQuestions(mpState.NUM_QUESTIONS);
      try {
        mpState.myId = await mpFbCreateRoom(mpState.roomCode, mpState.me, questions, mpMyAvatarThumb(), mpMyLevel());
        mpSaveActiveRoom();   // remember this room so we can offer to rejoin after a refresh
        mpWatchRoomLive();
        renderMpLobby();
      } catch (e) {
        console.warn('Create room failed, falling back to mock:', e && e.message);
        mpState.online = false;
        mpHostGameMock();
      }
    } else {
      mpHostGameMock();
    }
  }

  function mpHostGameMock() {
    mpState.online = false;
    mpState.players = [{ name: mpState.me, score: 0, lastDelta: 0, answered: false, isMe: true, isHost: true, ready: true, avatar: mpMyAvatarThumb() }];
    mpState.currentIdx = -1;
    renderMpLobby();
    mpSimulatePlayersJoining();
  }

  function mpSimulatePlayersJoining() {
    const joinCount = 2 + Math.floor(Math.random() * 2);
    const names = MP_FAKE_NAMES.slice().sort(() => Math.random() - 0.5).slice(0, joinCount);
    const presets = ['temple', 'star', 'tree', 'dove', 'sun', 'fish', 'crown', 'heart'];
    names.forEach((name, i) => {
      const t = setTimeout(() => {
        const preset = presets[Math.floor(Math.random() * presets.length)];
        mpState.players.push({ name, score: 0, lastDelta: 0, answered: false, ready: false, avatar: { type: 'preset', preset: preset } });
        renderMpLobby();
        if (typeof playSfx === 'function') playSfx('correct');
        // Bot readies up a moment after joining
        const rt = setTimeout(() => {
          const bot = mpState.players.find(pp => pp.name === name && !pp.isHost);
          if (bot) { bot.ready = true; renderMpLobby(); }
        }, 1400 + Math.random() * 1600);
        mpState.botTimers.push(rt);
      }, 1200 * (i + 1));
      mpState.botTimers.push(t);
    });
  }

  // ================= JOIN =================
  function mpShowJoin() {
    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    c.innerHTML = `
      <div class="mp-join-form">
        <button class="mp-back-link" onclick="renderMpHome()">← Back</button>
        <div class="mp-intro-icon">🔑</div>
        <h2 class="mp-intro-title serif">Join a Game</h2>
        <p class="mp-intro-sub">Enter the room code shown on the host's screen.</p>
        <input type="text" class="mp-code-input" id="mpCodeInput" maxlength="5" placeholder="CODE" autocomplete="off" oninput="this.value=this.value.toUpperCase()" />
        <p class="mp-join-hint" id="mpJoinHint"></p>
        <button class="btn btn-gold" onclick="mpJoinGame()" style="width:100%;">Join Room</button>
      </div>
    `;
    setTimeout(() => { const i = document.getElementById('mpCodeInput'); if (i) i.focus(); }, 100);
  }

  async function mpJoinGame() {
    const input = document.getElementById('mpCodeInput');
    const code = input ? input.value.trim().toUpperCase() : '';
    const hint = document.getElementById('mpJoinHint');
    if (code.length < 4) {
      if (hint) hint.textContent = 'Please enter the full room code.';
      return;
    }
    mpState.mode = 'join';
    mpState.me = mpMyName();
    mpState.roomCode = code;

    // Ensure init finished before deciding (avoid stale flag → mock bots)
    let canUseFirebase = mpState.online;
    if (!canUseFirebase && typeof mpFbInit === 'function') {
      if (hint) hint.textContent = 'Connecting…';
      canUseFirebase = await mpFbInit();
      mpState.online = canUseFirebase;
    }

    if (canUseFirebase && typeof mpFbJoinRoom === 'function') {
      if (hint) hint.textContent = 'Joining…';
      try {
        const result = await mpFbJoinRoom(code, mpState.me, mpMyAvatarThumb(), mpMyLevel());
        if (result === 'notfound') {
          if (hint) hint.textContent = 'No room found with that code.';
          return;
        }
        if (result === 'started') {
          if (hint) hint.textContent = 'That game has already started.';
          return;
        }
        mpState.myId = mpFbClientId();
        mpSaveActiveRoom();   // remember for rejoin-after-refresh
        mpWatchRoomLive();
        renderMpLobby();
      } catch (e) {
        console.warn('Join failed, falling back to mock:', e && e.message);
        mpState.online = false;
        mpJoinGameMock();
      }
    } else {
      mpJoinGameMock();
    }
  }

  function mpJoinGameMock() {
    mpState.online = false;
    const others = MP_FAKE_NAMES.slice().sort(() => Math.random() - 0.5).slice(0, 3);
    mpState.players = [
      { name: others[0], score: 0, lastDelta: 0, answered: false, isHost: true },
      { name: mpState.me, score: 0, lastDelta: 0, answered: false, isMe: true },
      { name: others[1], score: 0, lastDelta: 0, answered: false },
      { name: others[2], score: 0, lastDelta: 0, answered: false }
    ];
    renderMpLobby();
    const t = setTimeout(() => { mpStartGameMock(); }, 4000);
    mpState.botTimers.push(t);
  }

  // ================= FIREBASE LIVE SYNC =================
  // Translates a Firebase room snapshot into mpState + re-renders the
  // appropriate screen based on room status.
  function mpWatchRoomLive() {
    if (typeof mpFbWatchRoom !== 'function') return;
    mpFbWatchRoom(mpState.roomCode, (room) => {
      if (!room) {
        // Room was deleted (host left / ended)
        if (mpState.mode === 'join') {
          mpShowRoomClosed();
        }
        return;
      }
      // Build players array from the room
      const playersObj = room.players || {};

      // KICKED? If I'm a joiner and my id is no longer in the room (or appears
      // in the kicked list), the host removed me — show a message and exit.
      if (mpState.mode === 'join' && mpState.myId) {
        const kicked = room.kicked || {};
        if (!playersObj[mpState.myId] || kicked[mpState.myId]) {
          mpShowKicked();
          return;
        }
      }

      mpState.players = Object.keys(playersObj).map(pid => {
        const p = playersObj[pid];
        return {
          id: pid,
          name: p.name,
          score: p.score || 0,
          lastDelta: p.lastDelta || 0,
          answered: (p.answeredIdx !== undefined && p.answeredIdx >= 0),
          answeredIdx: p.answeredIdx,
          answeredAt: p.answeredAt || 0,
          isMe: pid === mpState.myId,
          isHost: !!p.isHost,
          avatar: p.avatar || null,
          level: p.level || 1,
          ready: !!p.ready,
          team: p.team || null
        };
      });
      mpState.questions = room.questions || [];
      mpState.currentIdx = (typeof room.currentIdx === 'number') ? room.currentIdx : -1;
      mpState.questionStartedAt = room.startedAt || 0;

      // Sync team configuration from the room (host controls it).
      mpState.teamMode = !!room.teamMode;
      mpState.numTeams = room.numTeams || 2;
      mpState.maxTeamSize = room.maxTeamSize || 5;
      // Track my own team from the room.
      const meP = playersObj[mpState.myId];
      mpState.myTeam = meP ? (meP.team || null) : null;

      // Sync the host's category selection for non-host players (so the lobby
      // banner shows everyone which categories the questions will come from).
      if (mpState.mode !== 'host') {
        mpState.categories = Array.isArray(room.categories) ? room.categories : [];
      }

      // Chat messages (lobby). Convert the pushed-keys object into a sorted array.
      const msgsObj = room.messages || {};
      mpState.messages = Object.keys(msgsObj).map(k => {
        const m = msgsObj[k];
        return { id: k, senderId: m.senderId, name: m.name, text: m.text, avatar: m.avatar || null, at: m.at || 0 };
      }).sort((a, b) => (a.at || 0) - (b.at || 0));

      const status = room.status;
      const statusChanged = status !== mpState.lastStatus;
      const idxChanged = mpState._lastIdx !== mpState.currentIdx;
      mpState.lastStatus = status;
      mpState._lastIdx = mpState.currentIdx;

      // New chat message notification (lobby only — chat is a lobby feature, and
      // we don't want pings interrupting an active question). Plays a sound +
      // shows a top banner since the chatbox is often scrolled out of view.
      if (status === 'lobby') {
        mpMaybeNotifyChat();
      } else {
        // Keep the seen-count in sync so returning to lobby doesn't ping for
        // messages that arrived mid-game.
        mpState._chatSeenCount = (mpState.messages || []).length;
      }

      // Route to the right screen
      if (status === 'lobby') {
        // Returning to lobby (new game or after a finished game) — reset guards.
        mpState._xpAwarded = false;
        mpState.committing = false;
        // If the lobby is already on screen, refresh players + chat in place so
        // we don't wipe what someone is typing. Otherwise do a full render.
        const lobbyShown = document.querySelector('#multiplayerContainer .mp-lobby');
        if (lobbyShown) {
          // If the team section's presence doesn't match the current teamMode
          // (e.g. host just switched Solo↔Teams), the in-place patch can't add a
          // section that was never rendered — do a full re-render instead.
          const teamsEl = document.getElementById('mpTeams');
          const teamSectionMismatch = (!!teamsEl) !== (!!mpState.teamMode);
          if (teamSectionMismatch) {
            renderMpLobby();
          } else {
            mpRefreshLobbyPlayers();
            mpRenderChatMessages();
            mpRenderCategoryBanner();
            // Live-refresh team buckets and the start/ready button (team
            // membership, readiness, and config can change from other devices).
            if (teamsEl && mpState.teamMode) teamsEl.innerHTML = mpTeamBucketsHtml();
            const actionsEl = document.getElementById('mpLobbyActions');
            if (actionsEl) {
              const isHost = mpState.mode === 'host';
              const enoughPlayers = mpState.players.length >= 2;
              actionsEl.innerHTML = mpLobbyActions(isHost, enoughPlayers);
            }
          }
        } else {
          renderMpLobby();
        }
      } else if (status === 'playing') {
        // New question? (status change into playing, or index changed)
        if (statusChanged || idxChanged) {
          mpState.myAnswerIdx = null;
          mpShowQuestionLive();
        } else {
          // just a player-answer update — refresh the answered count
          updateAnsweredCount();
          mpMaybeHostAutoReveal();
        }
      } else if (status === 'revealing') {
        if (statusChanged) mpRevealResultsLive();
      } else if (status === 'finished') {
        if (statusChanged) mpShowPodium();
      }
    });
  }

  function mpShowRoomClosed() {
    if (mpState.timerInterval) clearInterval(mpState.timerInterval);
    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    c.innerHTML = `
      <div class="mp-intro">
        <div class="mp-intro-icon">📭</div>
        <h2 class="mp-intro-title serif">Room Closed</h2>
        <p class="mp-intro-sub">The host ended the game or left the room.</p>
      </div>
      <div class="mp-home-actions">
        <button class="btn btn-gold mp-big-btn" onclick="openMultiplayer()"><span class="mp-big-btn-text"><strong>Back to Group Trivia</strong></span></button>
      </div>
    `;
  }

  function mpShowKicked() {
    if (mpState.timerInterval) clearInterval(mpState.timerInterval);
    if (mpState.countdownInterval) clearInterval(mpState.countdownInterval);
    if (typeof mpFbStopWatching === 'function') mpFbStopWatching();
    mpClearActiveRoom();
    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    c.innerHTML = `
      <div class="mp-intro">
        <div class="mp-intro-icon">👋</div>
        <h2 class="mp-intro-title serif">Removed from Game</h2>
        <p class="mp-intro-sub">The host removed you from this game. You can join another room anytime.</p>
      </div>
      <div class="mp-home-actions">
        <button class="btn btn-gold mp-big-btn" onclick="openMultiplayer()"><span class="mp-big-btn-text"><strong>Back to Group Trivia</strong></span></button>
      </div>
    `;
  }

  // ================= LOBBY =================
  function renderMpLobby() {
    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    // Kick off a one-time global-rank fetch so we can show each player's
    // all-time leaderboard standing next to their name.
    mpEnsureGlobalRanks();
    const isHost = mpState.mode === 'host';
    const enoughPlayers = mpState.players.length >= 2;
    const cats = (typeof TRIVIA_CATEGORIES !== 'undefined') ? TRIVIA_CATEGORIES : [];
    c.innerHTML = `
      <div class="mp-lobby">
        <div class="mp-room-card">
          <div class="mp-room-label">Room Code</div>
          <div class="mp-room-code">${mpState.roomCode}</div>
          <div class="mp-room-hint">${isHost ? 'Share this code so others can join' : 'Waiting for the host to start…'}</div>
        </div>
        <div class="mp-players-head">
          <span>Players</span>
          <span class="mp-players-count">${mpState.players.length}</span>
        </div>
        <div class="mp-players-list" id="mpPlayersList">
          ${mpRenderPlayerChips()}
        </div>
        ${isHost && cats.length ? `
          <div class="mp-cat-head">Categories <span class="mp-cat-hint">(pick up to 3, or random)</span></div>
          <div class="mp-cat-grid" id="mpCatGrid">
            ${cats.map(cat => `
              <button class="mp-cat-chip${mpState.categories.indexOf(cat.id) !== -1 ? ' selected' : ''}"
                      data-cat="${cat.id}" onclick="mpToggleCategory('${cat.id}')">
                <span class="mp-cat-icon">${cat.icon}</span>
                <span class="mp-cat-label">${cat.label}</span>
              </button>
            `).join('')}
          </div>
          <button class="mp-cat-random" onclick="mpRandomCategories()">🎲 Random of 3</button>
        ` : ''}

        ${isHost ? `
          <div class="mp-cat-head">Number of questions</div>
          <div class="mp-count-grid" id="mpCountGrid">
            ${[10, 15, 20].map(n => `
              <button class="mp-count-chip${mpState.NUM_QUESTIONS === n ? ' selected' : ''}"
                      data-count="${n}" onclick="mpSetQuestionCount(${n})">${n}</button>
            `).join('')}
          </div>
        ` : ''}

        ${isHost ? `
          <div class="mp-cat-head">Play mode</div>
          <div class="mp-count-grid">
            <button class="mp-count-chip mp-mode-chip${!mpState.teamMode ? ' selected' : ''}" onclick="mpSetTeamMode(false)">👤 Solo</button>
            <button class="mp-count-chip mp-mode-chip${mpState.teamMode ? ' selected' : ''}" onclick="mpSetTeamMode(true)">👥 Teams</button>
          </div>
          ${mpState.teamMode ? `
            <div class="mp-cat-head">Number of teams</div>
            <div class="mp-count-grid">
              ${[2,3,4,5].map(n => `<button class="mp-count-chip${mpState.numTeams === n ? ' selected' : ''}" onclick="mpSetNumTeams(${n})">${n}</button>`).join('')}
            </div>
            <div class="mp-cat-head">Max players per team</div>
            <div class="mp-count-grid">
              ${[2,3,4,5].map(n => `<button class="mp-count-chip${mpState.maxTeamSize === n ? ' selected' : ''}" onclick="mpSetMaxTeamSize(${n})">${n}</button>`).join('')}
            </div>
            <button class="mp-cat-random" onclick="mpRandomizeTeams()">🎲 Randomize teams</button>
          ` : ''}
        ` : ''}

        ${mpState.teamMode ? `
          <div class="mp-cat-head">${isHost ? 'Teams' : 'Pick your team'}</div>
          <div class="mp-teams" id="mpTeams">${mpTeamBucketsHtml()}</div>
        ` : ''}

        <!-- Category banner — visible to ALL players so everyone knows the topics -->
        <div class="mp-catbanner" id="mpCatBanner">${mpCategoryBannerHtml()}</div>

        <div id="mpLobbyActions">${mpLobbyActions(isHost, enoughPlayers)}</div>

        <!-- Lobby chat -->
        <div class="mp-chat">
          <div class="mp-chat-head">
            <span>💬 Lobby Chat</span>
            ${isHost ? `<button class="mp-chat-clear" onclick="mpClearChat()">Clear</button>` : ''}
          </div>
          <div class="mp-chat-messages" id="mpChatMessages">${mpRenderChatMessagesHtml()}</div>
          <div class="mp-chat-input-row">
            <input type="text" id="mpChatInput" class="mp-chat-input" maxlength="200"
                   placeholder="Say something kind…" autocomplete="off"
                   onkeydown="if(event.key==='Enter'){mpSendChat();}">
            <button class="mp-chat-send" onclick="mpSendChat()" aria-label="Send">Send</button>
          </div>
        </div>

        <button class="mp-leave-link" onclick="mpConfirmLeave()">Leave room</button>
      </div>
    `;
    // Scroll chat to the newest message after render
    setTimeout(mpScrollChatToBottom, 30);
  }

  // ===== Player chips (extracted so the lobby can refresh in place) =====
  // Renders the team buckets: one card per team, showing members + a join button.
  function mpTeamBucketsHtml() {
    let html = '';
    for (let t = 1; t <= mpState.numTeams; t++) {
      const members = mpState.players.filter(p => p.team === t);
      const count = members.length;
      const full = count >= mpState.maxTeamSize;
      const mine = mpState.myTeam === t;
      const color = mpTeamColor(t);
      const memberHtml = members.map(m => {
        let av;
        if (typeof renderAvatar === 'function') {
          av = renderAvatar({ avatar: m.avatar || { type: 'preset', preset: 'scroll' }, level: 1, size: 30, showBadge: false });
        } else { av = '🙂'; }
        return `<span class="mp-team-member"><span class="mp-team-member-av">${av}</span>${escapeHtmlMp(m.name)}${m.isMe ? ' (you)' : ''}</span>`;
      }).join('');
      html += `
        <div class="mp-team${mine ? ' mine' : ''}${full ? ' full' : ''}" style="--team-color:${color}">
          <div class="mp-team-head">
            <span class="mp-team-name">Team ${t}</span>
            <span class="mp-team-count">${count}/${mpState.maxTeamSize}</span>
          </div>
          <div class="mp-team-members">${memberHtml || '<span class="mp-team-empty">No players yet</span>'}</div>
          <button class="mp-team-join${mine ? ' leave' : ''}" onclick="mpJoinTeam(${t})" ${(!mine && full) ? 'disabled' : ''}>
            ${mine ? 'Leave' : (full ? 'Full' : 'Join')}
          </button>
        </div>`;
    }
    return html;
  }

  function mpRenderPlayerChips() {
    return mpState.players.map(p => {
      const rank = mpGlobalRankFor(p.name);
      const rankBadge = (rank && typeof rankTrophy === 'function')
        ? `<span class="mp-player-rank" title="Leaderboard rank">${rankTrophy(rank, 26)}</span>`
        : '';
      let avatarHtml;
      if (typeof renderAvatar === 'function') {
        const av = p.avatar || { type: 'preset', preset: 'scroll' };
        avatarHtml = renderAvatar({ avatar: av, level: p.level || 1, size: 38, showBadge: true });
      } else {
        avatarHtml = `<span style="font-size:20px;">${p.isHost ? '👑' : '🙂'}</span>`;
      }
      const readyTag = p.isHost
        ? `<span class="mp-ready-tag host">👑 Host</span>`
        : (p.ready ? `<span class="mp-ready-tag ready">✓ Ready</span>` : `<span class="mp-ready-tag waiting">Not ready</span>`);
      // Host sees a remove (kick) button next to each OTHER player.
      const iAmHost = (mpState.mode === 'host');
      const kickBtn = (iAmHost && !p.isHost && p.id)
        ? `<button class="mp-kick-btn" onclick="mpKickPlayer('${p.id}', '${escapeHtmlMp(p.name).replace(/'/g, "\\'")}')" aria-label="Remove ${escapeHtmlMp(p.name)}">✕</button>`
        : '';
      return `
        <div class="mp-player-chip${p.isMe ? ' me' : ''}">
          <span class="mp-player-avatar mp-player-pfp">${avatarHtml}</span>
          <span class="mp-player-name">${escapeHtmlMp(p.name)}${p.isMe ? ' (you)' : ''}</span>
          ${rankBadge}
          ${readyTag}
          ${kickBtn}
        </div>`;
    }).join('');
  }

  // Host removes a player from the lobby (with a quick confirm).
  function mpKickPlayer(playerId, playerName) {
    if (mpState.mode !== 'host' || !playerId) return;
    const doKick = () => {
      if (mpState.online && typeof mpFbKickPlayer === 'function') {
        mpFbKickPlayer(mpState.roomCode, playerId);
      } else {
        // Mock mode: remove locally
        mpState.players = mpState.players.filter(p => p.id !== playerId);
        renderMpLobby();
      }
      if (typeof showToast === 'function') showToast('Removed ' + (playerName || 'player'));
    };
    if (typeof showConfirm === 'function') {
      showConfirm({
        icon: '👋', title: 'Remove player?',
        message: 'Remove ' + (playerName || 'this player') + ' from the game?',
        okText: 'Remove', cancelText: 'Cancel', destructive: true
      }).then(ok => { if (ok) doKick(); });
    } else {
      doKick();
    }
  }

  // Refresh just the players list + the action buttons without rebuilding chat.
  function mpRefreshLobbyPlayers() {
    const list = document.getElementById('mpPlayersList');
    if (list) list.innerHTML = mpRenderPlayerChips();
    const countEl = document.querySelector('.mp-players-count');
    if (countEl) countEl.textContent = mpState.players.length;
    // Re-evaluate the host's Start button / joiner Ready button state
    const actionsHost = (mpState.mode === 'host');
    const enough = mpState.players.length >= 2;
    const actionsEl = document.querySelector('.mp-start-btn, .mp-ready-btn');
    // Simplest reliable approach: replace the action area via a wrapper if present
    const wrap = document.getElementById('mpLobbyActions');
    if (wrap) wrap.innerHTML = mpLobbyActions(actionsHost, enough);
  }

  // Lobby action button(s): joiners get a Ready toggle; host gets Start
  // (disabled until every joiner is ready and there are at least 2 players).
  function mpLobbyActions(isHost, enoughPlayers) {
    if (isHost) {
      const joiners = mpState.players.filter(p => !p.isHost);
      const allReady = joiners.length > 0 && joiners.every(p => p.ready);
      // In team mode, every player must be assigned to a team before starting.
      const allHaveTeams = !mpState.teamMode || mpState.players.every(p => p.team);
      const canStart = enoughPlayers && allReady && allHaveTeams;
      let label;
      if (!enoughPlayers) label = 'Waiting for players…';
      else if (!allReady) label = 'Waiting for players to ready up…';
      else if (!allHaveTeams) label = 'Everyone must join a team…';
      else label = 'Start Game →';
      return `<button class="btn btn-gold mp-start-btn" onclick="mpStartGame()" ${canStart ? '' : 'disabled'}>${label}</button>`;
    } else {
      const me = mpState.players.find(p => p.isMe);
      const isReady = me && me.ready;
      // In team mode, can't ready up until you've joined a team.
      const needsTeam = mpState.teamMode && !mpState.myTeam;
      return `
        <button class="btn ${isReady ? 'btn-ghost' : 'btn-gold'} mp-ready-btn" onclick="mpToggleReady()" ${needsTeam ? 'disabled' : ''}>
          ${needsTeam ? 'Join a team first' : (isReady ? '✓ Ready — tap to cancel' : "I'm Ready")}
        </button>
        <div class="mp-waiting-spinner">${isReady ? 'Waiting for the host to start…' : 'Tap “I’m Ready” when you’re set'}</div>
      `;
    }
  }

  // Joiner toggles their ready state.
  async function mpToggleReady() {
    const me = mpState.players.find(p => p.isMe);
    const newReady = !(me && me.ready);
    if (typeof playTapSfx === 'function') playTapSfx();
    if (mpState.online && typeof mpFbSetReady === 'function') {
      try { await mpFbSetReady(mpState.roomCode, newReady); } catch (e) {}
      // The room listener will re-render with the new state
    } else {
      // Mock mode: flip locally and re-render
      if (me) me.ready = newReady;
      renderMpLobby();
    }
  }

  // ================= LOBBY CHAT =================
  // A light-touch filter for a youth/ward setting. Catches a small set of
  // obvious profanity; not exhaustive, but keeps casual chat tidy. Replaces
  // matched words with a gentle placeholder rather than blocking the message.
  const MP_CHAT_BLOCKLIST = ['damn', 'hell', 'crap', 'ass', 'bitch', 'bastard', 'shit', 'fuck', 'piss', 'dick'];
  function mpCleanChatText(text) {
    let t = String(text || '').trim();
    if (!t) return '';
    // Collapse excessive whitespace and cap length
    t = t.replace(/\s+/g, ' ').slice(0, 200);
    // Soft profanity filter (whole-word, case-insensitive)
    MP_CHAT_BLOCKLIST.forEach(w => {
      const re = new RegExp('\\b' + w + '\\b', 'gi');
      t = t.replace(re, '—');
    });
    return t;
  }

  function mpRenderChatMessagesHtml() {
    const msgs = mpState.messages || [];
    if (!msgs.length) {
      return `<div class="mp-chat-empty">No messages yet — say hello! 👋</div>`;
    }
    return msgs.map(m => {
      const mine = m.senderId === mpState.myId;
      let avatarHtml;
      if (typeof renderAvatar === 'function') {
        const av = m.avatar || { type: 'preset', preset: 'scroll' };
        avatarHtml = renderAvatar({ avatar: av, level: 1, size: 28, showBadge: false });
      } else {
        avatarHtml = '🙂';
      }
      return `
        <div class="mp-chat-msg${mine ? ' mine' : ''}">
          <span class="mp-chat-avatar">${avatarHtml}</span>
          <div class="mp-chat-bubble">
            <div class="mp-chat-name">${escapeHtmlMp(m.name || 'Player')}</div>
            <div class="mp-chat-text">${escapeHtmlMp(m.text || '')}</div>
          </div>
        </div>`;
    }).join('');
  }

  // Update only the messages container (preserves the input field + focus).
  function mpRenderChatMessages() {
    const box = document.getElementById('mpChatMessages');
    if (!box) return;
    const wasNearBottom = (box.scrollHeight - box.scrollTop - box.clientHeight) < 60;
    box.innerHTML = mpRenderChatMessagesHtml();
    if (wasNearBottom) mpScrollChatToBottom();
  }

  // Fires when the room watcher refreshes messages. If a NEW message arrived
  // from someone else (not us), play a ping and show a top banner — the chatbox
  // is often scrolled out of view, so a banner makes sure the message is seen.
  function mpMaybeNotifyChat() {
    const msgs = mpState.messages || [];
    const prevCount = mpState._chatSeenCount || 0;
    // First time we see the list (e.g. on join), just record the baseline — no ping.
    if (prevCount === 0 && msgs.length > 0 && mpState._chatNotifiedId === null) {
      mpState._chatSeenCount = msgs.length;
      mpState._chatNotifiedId = msgs[msgs.length - 1].id;
      return;
    }
    if (msgs.length > prevCount) {
      const latest = msgs[msgs.length - 1];
      // Only notify for messages from OTHER players, and not one we already pinged.
      if (latest && latest.senderId !== mpState.myId && latest.id !== mpState._chatNotifiedId) {
        if (typeof playNotificationSfx === 'function') playNotificationSfx();
        mpShowChatBanner(latest.name, latest.text);
        mpState._chatNotifiedId = latest.id;
      }
    }
    mpState._chatSeenCount = msgs.length;
  }

  // Shows a brief banner at the top of the multiplayer view announcing a new
  // chat message. Tapping it scrolls the chatbox into view.
  function mpShowChatBanner(name, text) {
    const container = document.getElementById('multiplayerContainer');
    if (!container) return;
    let banner = document.getElementById('mpChatBanner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'mpChatBanner';
      banner.className = 'mp-chat-banner';
      banner.setAttribute('onclick', 'mpScrollToChat()');
      container.appendChild(banner);
    }
    const safeName = escapeHtmlMp(name || 'Someone');
    const safeText = escapeHtmlMp((text || '').slice(0, 80));
    banner.innerHTML = `<span class="mp-chat-banner-icon">💬</span><span class="mp-chat-banner-text"><strong>${safeName}:</strong> ${safeText}</span>`;
    banner.classList.remove('hide');
    // Force reflow so the show animation restarts even on rapid messages.
    void banner.offsetWidth;
    banner.classList.add('show');
    clearTimeout(mpState._chatBannerTimer);
    mpState._chatBannerTimer = setTimeout(() => {
      banner.classList.remove('show');
      banner.classList.add('hide');
    }, 4000);
  }

  // Scrolls the lobby chat into view and clears the banner.
  function mpScrollToChat() {
    const box = document.getElementById('mpChatMessages');
    if (box && box.scrollIntoView) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    mpScrollChatToBottom();
    const banner = document.getElementById('mpChatBanner');
    if (banner) { banner.classList.remove('show'); banner.classList.add('hide'); }
  }

  function mpScrollChatToBottom() {
    const box = document.getElementById('mpChatMessages');
    if (box) box.scrollTop = box.scrollHeight;
  }

  async function mpSendChat() {
    const input = document.getElementById('mpChatInput');
    if (!input) return;
    const cleaned = mpCleanChatText(input.value);
    if (!cleaned) { input.value = ''; return; }
    input.value = '';
    input.focus();
    if (typeof playTapSfx === 'function') playTapSfx();
    if (mpState.online && typeof mpFbSendChat === 'function') {
      try { await mpFbSendChat(mpState.roomCode, mpState.me, cleaned, mpMyAvatarThumb()); } catch (e) {}
      // The room listener will refresh the messages in place.
    } else {
      // Mock/offline mode: append locally so the user still sees their message.
      mpState.messages = mpState.messages || [];
      mpState.messages.push({ id: 'local_' + Date.now(), senderId: mpState.myId, name: mpState.me, text: cleaned, avatar: mpMyAvatarThumb(), at: Date.now() });
      mpRenderChatMessages();
      mpScrollChatToBottom();
    }
  }

  function mpClearChat() {
    if (mpState.online && typeof mpFbClearChat === 'function') {
      mpFbClearChat(mpState.roomCode);
    } else {
      mpState.messages = [];
      mpRenderChatMessages();
    }
  }

  // Host toggles a category on/off (max 3)
  // Host sets how many questions the game will have (10, 15, or 20).
  function mpSetQuestionCount(n) {
    mpState.NUM_QUESTIONS = n;
    document.querySelectorAll('#mpCountGrid .mp-count-chip').forEach(el => {
      el.classList.toggle('selected', Number(el.dataset.count) === n);
    });
    if (typeof playTapSfx === 'function') playTapSfx();
  }

  // ===== Team mode controls (host) =====
  function mpSetTeamMode(isTeams) {
    mpState.teamMode = !!isTeams;
    if (mpState.online && typeof mpFbSetTeamConfig === 'function') {
      mpFbSetTeamConfig(mpState.roomCode, mpState.teamMode, mpState.numTeams, mpState.maxTeamSize);
    }
    if (typeof playTapSfx === 'function') playTapSfx();
    renderMpLobby();
  }
  function mpSetNumTeams(n) {
    mpState.numTeams = n;
    if (mpState.online && typeof mpFbSetTeamConfig === 'function') {
      mpFbSetTeamConfig(mpState.roomCode, mpState.teamMode, n, mpState.maxTeamSize);
    }
    if (typeof playTapSfx === 'function') playTapSfx();
    renderMpLobby();
  }
  function mpSetMaxTeamSize(n) {
    mpState.maxTeamSize = n;
    if (mpState.online && typeof mpFbSetTeamConfig === 'function') {
      mpFbSetTeamConfig(mpState.roomCode, mpState.teamMode, mpState.numTeams, n);
    }
    if (typeof playTapSfx === 'function') playTapSfx();
    renderMpLobby();
  }

  // Count players currently on a given team.
  function mpTeamCount(team) {
    return mpState.players.filter(p => p.team === team).length;
  }

  // A player taps a team to join it (blocked if full).
  function mpJoinTeam(team) {
    const count = mpTeamCount(team);
    const alreadyMine = mpState.myTeam === team;
    if (!alreadyMine && count >= mpState.maxTeamSize) {
      if (typeof showToast === 'function') showToast('Team ' + team + ' is full — pick another');
      return;
    }
    mpState.myTeam = alreadyMine ? null : team;  // tapping your own team leaves it
    if (mpState.online && typeof mpFbSetMyTeam === 'function') {
      mpFbSetMyTeam(mpState.roomCode, mpState.myId, mpState.myTeam);
    } else {
      // Mock mode: set my team locally
      const me = mpState.players.find(p => p.isMe);
      if (me) me.team = mpState.myTeam;
    }
    if (typeof playTapSfx === 'function') playTapSfx();
    renderMpLobby();
  }

  // Host randomly distributes all players across the teams as evenly as possible.
  function mpRandomizeTeams() {
    const players = mpState.players.slice();
    // shuffle
    for (let i = players.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [players[i], players[j]] = [players[j], players[i]];
    }
    const teamsById = {};
    players.forEach((p, i) => {
      const team = (i % mpState.numTeams) + 1;  // round-robin
      teamsById[p.id] = team;
      p.team = team;
      if (p.isMe) mpState.myTeam = team;
    });
    if (mpState.online && typeof mpFbAssignTeams === 'function') {
      mpFbAssignTeams(mpState.roomCode, teamsById);
    }
    if (typeof playTapSfx === 'function') playTapSfx();
    if (typeof showToast === 'function') showToast('🎲 Players shuffled into teams');
    renderMpLobby();
  }

  // Team color palette (1-5)
  function mpTeamColor(team) {
    const colors = ['#c0392b', '#2e86c1', '#27ae60', '#8e44ad', '#e67e22'];
    return colors[(team - 1) % colors.length];
  }

  function mpToggleCategory(catId) {
    const idx = mpState.categories.indexOf(catId);
    if (idx !== -1) {
      mpState.categories.splice(idx, 1);
    } else {
      if (mpState.categories.length >= 3) {
        if (typeof showToast === 'function') showToast('You can pick up to 3 categories');
        return;
      }
      mpState.categories.push(catId);
    }
    // Update just the chips without full re-render
    document.querySelectorAll('#mpCatGrid .mp-cat-chip').forEach(el => {
      el.classList.toggle('selected', mpState.categories.indexOf(el.dataset.cat) !== -1);
    });
    mpSyncCategories();
    if (typeof playTapSfx === 'function') playTapSfx();
  }

  // Pick 3 random categories
  function mpRandomCategories() {
    const cats = (typeof TRIVIA_CATEGORIES !== 'undefined') ? TRIVIA_CATEGORIES.map(c => c.id) : [];
    for (let i = cats.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cats[i], cats[j]] = [cats[j], cats[i]];
    }
    mpState.categories = cats.slice(0, 3);
    document.querySelectorAll('#mpCatGrid .mp-cat-chip').forEach(el => {
      el.classList.toggle('selected', mpState.categories.indexOf(el.dataset.cat) !== -1);
    });
    mpSyncCategories();
    if (typeof playTapSfx === 'function') playTapSfx();
    if (typeof showToast === 'function') showToast('🎲 Picked 3 random categories');
  }

  // Writes the host's category selection to the room (online) and refreshes
  // the lobby's "selected categories" banner that all players see.
  function mpSyncCategories() {
    if (mpState.online && typeof mpFbSetCategories === 'function') {
      mpFbSetCategories(mpState.roomCode, mpState.categories);
    }
    mpRenderCategoryBanner();
  }

  // Builds the human-readable "Categories: …" label.
  function mpCategoryBannerHtml() {
    const cats = mpState.categories || [];
    let inner;
    if (!cats.length) {
      inner = '<span class="mp-catbanner-all">All categories (random mix) 🎲</span>';
    } else {
      const defs = (typeof TRIVIA_CATEGORIES !== 'undefined') ? TRIVIA_CATEGORIES : [];
      inner = cats.map(id => {
        const c = defs.find(x => x.id === id);
        return c ? `<span class="mp-catbanner-chip">${c.icon} ${c.label}</span>` : '';
      }).join('');
    }
    return `<div class="mp-catbanner-label">📋 Questions from:</div><div class="mp-catbanner-chips">${inner}</div>`;
  }

  // Updates the lobby category banner in place (for all players).
  function mpRenderCategoryBanner() {
    const el = document.getElementById('mpCatBanner');
    if (el) el.innerHTML = mpCategoryBannerHtml();
  }

  // ===== Global leaderboard rank in the lobby =====
  // Fetch the global board once per lobby session and build a name->rank map.
  // Matching is by display name (case-insensitive), since that's what the
  // room stores for each player. Re-renders the lobby when ranks arrive.
  let mpRanksFetching = false;
  async function mpEnsureGlobalRanks() {
    if (mpState.globalRanks || mpRanksFetching) return;
    if (typeof lbInit !== 'function' || typeof lbFetchGlobal !== 'function') return;
    mpRanksFetching = true;
    try {
      const ok = await lbInit();
      if (!ok) { mpRanksFetching = false; return; }
      const rows = await lbFetchGlobal(0); // all rows, already sorted by XP
      if (rows && rows.length) {
        const map = {};
        rows.forEach((r, i) => {
          const key = String(r.name || '').trim().toLowerCase();
          // keep the best (first / highest) rank if names collide
          if (key && map[key] === undefined) map[key] = i + 1;
        });
        mpState.globalRanks = map;
        // Re-render the lobby if we're still in it
        if (mpState.lastStatus === 'lobby' || mpState.mode) {
          const c = document.getElementById('multiplayerContainer');
          if (c && c.querySelector('.mp-lobby')) renderMpLobby();
        }
      } else {
        mpState.globalRanks = {}; // mark as fetched (empty board)
      }
    } catch (e) {
      // leave globalRanks null so it can retry next lobby
    }
    mpRanksFetching = false;
  }

  function mpGlobalRankFor(name) {
    if (!mpState.globalRanks) return null;
    const key = String(name || '').trim().toLowerCase();
    return mpState.globalRanks[key] || null;
  }

  // My avatar thumbnail (preset id or tiny photo) to store in the room.
  function mpMyAvatarThumb() {
    if (typeof avatarThumbForLeaderboard === 'function') return avatarThumbForLeaderboard();
    return null;
  }

  // ================= START =================
  async function mpStartGame() {
    if (mpState.online && typeof mpFbStartGame === 'function') {
      // Rebuild the question set NOW using the host's chosen categories, so the
      // selection actually takes effect (the room's original set was built
      // before categories were picked). Push it to the room for everyone.
      const questions = mpGetQuestions(mpState.NUM_QUESTIONS);
      try { await mpFbStartGame(mpState.roomCode, questions); } catch (e) { console.warn(e); }
      // The room listener will route everyone (including host) to the question
    } else {
      mpStartGameMock();
    }
  }

  function mpStartGameMock() {
    if (!mpState.questions.length) mpState.questions = mpGetQuestions(mpState.NUM_QUESTIONS);
    mpState.currentIdx = 0;
    mpState.players.forEach(p => { p.score = 0; p.lastDelta = 0; });
    mpShowQuestionMock();
  }

  // ================= QUESTION (LIVE) =================
  function mpShowQuestionLive() {
    const q = mpState.questions[mpState.currentIdx];
    if (!q) return;

    // Decide whether to show a pre-question banner overlay:
    //  • game start (first question)  → "The game will start in"
    //  • entering the last 3 (Q8)     → "Last 3 questions!"
    //  • the final question (Q10)     → "Final question!"
    const total = mpState.questions.length;
    const num = mpState.currentIdx + 1;        // 1-indexed
    const isFirst = mpState.currentIdx === 0;
    const isLast = num === total;
    const isLastThreeStart = (total >= 3) && (num === total - 2);

    let banner = null;
    if (isFirst) {
      banner = { caption: 'The game will start in', seconds: 3, kind: 'start' };
    } else if (isLast) {
      banner = { caption: 'Final question!', seconds: 3, kind: 'final' };
    } else if (isLastThreeStart) {
      banner = { caption: 'Last 3 questions!', seconds: 3, kind: 'lastthree' };
    }

    if (banner) {
      mpShowBanner(banner.caption, banner.seconds, banner.kind, () => mpRunQuestionTimer(q));
    } else {
      mpRunQuestionTimer(q);
    }
  }

  // Renders the question and starts the per-question timer.
  function mpRunQuestionTimer(q) {
    mpState.timeLeft = mpState.QUESTION_SECONDS;
    mpRenderQuestion(q);
    if (mpState.timerInterval) clearInterval(mpState.timerInterval);
    mpState._tickPlayed = false;
    mpState._answered = false;
    mpStopTimerSound();
    mpState.timerInterval = setInterval(() => {
      mpState.timeLeft -= 0.1;
      const fill = document.getElementById('mpTimerFill');
      const tnum = document.getElementById('mpTimer');
      if (fill) fill.style.width = Math.max(0, (mpState.timeLeft / mpState.QUESTION_SECONDS) * 100) + '%';
      if (tnum) tnum.textContent = Math.ceil(Math.max(0, mpState.timeLeft));
      // Final-3-seconds timer sound — only if the player hasn't answered yet.
      if (!mpState._tickPlayed && !mpState._answered && mpState.timeLeft <= 3 && mpState.timeLeft > 0) {
        mpState._tickPlayed = true;
        mpPlayTimerSound();
      }
      if (mpState.timeLeft <= 0) {
        clearInterval(mpState.timerInterval);
        mpStopTimerSound();
        if (mpState.mode === 'host' && typeof mpFbReveal === 'function') {
          mpFbReveal(mpState.roomCode);
        }
      }
    }, 100);
  }

  // ===== Full-screen banner overlay (game start / last-3 / final) =====
  function mpShowBanner(caption, seconds, kind, done) {
    // Build (or reuse) the overlay element appended to the container.
    let overlay = document.getElementById('mpBannerOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'mpBannerOverlay';
      overlay.className = 'mp-banner-overlay';
      document.body.appendChild(overlay);
    }
    overlay.className = 'mp-banner-overlay mp-banner-' + (kind || 'start');
    overlay.innerHTML = `
      <div class="mp-banner-inner">
        <div class="mp-banner-caption">${caption}</div>
        <div class="mp-banner-num" id="mpBannerNum">${seconds}</div>
      </div>
    `;
    overlay.classList.remove('hidden');
    let remaining = seconds;
    const numEl = document.getElementById('mpBannerNum');
    if (numEl) mpPulseCountdown(numEl);
    if (mpState.bannerInterval) clearInterval(mpState.bannerInterval);
    mpState.bannerInterval = setInterval(() => {
      remaining -= 1;
      const el = document.getElementById('mpBannerNum');
      if (remaining > 0) {
        if (el) { el.textContent = remaining; mpPulseCountdown(el); }
      } else {
        clearInterval(mpState.bannerInterval);
        mpState.bannerInterval = null;
        overlay.classList.add('hidden');
        if (typeof done === 'function') done();
      }
    }, 1000);
  }

  // ===== Per-question final-seconds timer sound =====
  function mpPlayTimerSound() {
    try {
      if (typeof state !== 'undefined' && state && state.audioSfx === false) return;
      let a = mpState._timerAudio;
      if (!a) {
        a = new Audio('3-seconds.mp3');
        a.loop = true;
        mpState._timerAudio = a;
      }
      a.currentTime = 0;
      const v = (typeof state !== 'undefined' && state && typeof state.audioSfxVol === 'number') ? state.audioSfxVol : 0.7;
      a.volume = v;
      a.play().catch(() => {});
    } catch (e) {}
  }
  function mpStopTimerSound() {
    try {
      const a = mpState._timerAudio;
      if (a) { a.pause(); a.currentTime = 0; }
    } catch (e) {}
  }

  // Host-only: if everyone has answered, reveal early
  function mpMaybeHostAutoReveal() {
    if (mpState.mode !== 'host') return;
    if (mpState.lastStatus !== 'playing') return;
    const total = mpState.players.length;
    const answered = mpState.players.filter(p => p.answered).length;
    if (total > 0 && answered === total && typeof mpFbReveal === 'function') {
      setTimeout(() => {
        if (mpState.lastStatus === 'playing') mpFbReveal(mpState.roomCode);
      }, 500);
    }
  }

  function mpRenderQuestion(q) {
    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    mpState.mySelectedIdx = null;
    mpState.myTypedAnswer = '';

    const header = `
      <div class="mp-game-top">
        <span class="mp-qcount">Question ${mpState.currentIdx + 1} of ${mpState.questions.length}</span>
        <span class="mp-timer" id="mpTimer">${Math.ceil(mpState.timeLeft)}</span>
      </div>
      <div class="mp-timer-track"><div class="mp-timer-fill" id="mpTimerFill" style="width:100%"></div></div>
      <div class="mp-cat-tag">${mpCatLabel(q.category)}</div>
    `;

    let body = '';
    if (q.type === 'complete_verse') {
      // Fill-in-the-blank with word cards
      body = `
        <div class="mp-verse-prompt serif">
          ${escapeHtmlMp(q.before)} <span class="mp-blank" id="mpBlank">______</span> ${escapeHtmlMp(q.after)}
        </div>
        <div class="mp-word-cards" id="mpWordCards">
          ${q.words.map((w, i) => `
            <button class="mp-word-card" data-word="${escapeHtmlMp(w)}" onclick="mpSelectWord(${i}, this)">${escapeHtmlMp(w)}</button>
          `).join('')}
        </div>
        <button class="btn btn-gold mp-submit-btn" id="mpSubmitBtn" onclick="mpSubmit()" data-no-tap-sound disabled>Submit Answer</button>
      `;
    } else if (q.type === 'who_spoke') {
      body = `
        <div class="mp-question-label">Who spoke these words?</div>
        <div class="mp-question serif mp-quote">${escapeHtmlMp(q.q)}</div>
        <div class="mp-options" id="mpOptions">
          ${q.options.map((opt, i) => `<button class="mp-option" onclick="mpSelect(${i})">${escapeHtmlMp(opt)}</button>`).join('')}
        </div>
        <button class="btn btn-gold mp-submit-btn" id="mpSubmitBtn" onclick="mpSubmit()" data-no-tap-sound disabled>Submit Answer</button>
      `;
    } else if (q.type === 'verse_location') {
      body = `
        <div class="mp-question-label">Where is this verse found?</div>
        <div class="mp-question serif mp-quote">${escapeHtmlMp(q.q)}</div>
        <div class="mp-options" id="mpOptions">
          ${q.options.map((opt, i) => `<button class="mp-option mp-option-ref" onclick="mpSelect(${i})">${escapeHtmlMp(opt)}</button>`).join('')}
        </div>
        <button class="btn btn-gold mp-submit-btn" id="mpSubmitBtn" onclick="mpSubmit()" data-no-tap-sound disabled>Submit Answer</button>
      `;
    } else {
      // multiple_choice (facts)
      body = `
        <div class="mp-question serif">${escapeHtmlMp(q.q)}</div>
        <div class="mp-options" id="mpOptions">
          ${q.options.map((opt, i) => `<button class="mp-option" onclick="mpSelect(${i})">${escapeHtmlMp(opt)}</button>`).join('')}
        </div>
        <button class="btn btn-gold mp-submit-btn" id="mpSubmitBtn" onclick="mpSubmit()" data-no-tap-sound disabled>Submit Answer</button>
      `;
    }

    c.innerHTML = `<div class="mp-game">${header}${body}<div class="mp-answered-count" id="mpAnsweredCount"></div></div>`;
    updateAnsweredCount();
  }

  function mpCatLabel(catId) {
    if (typeof TRIVIA_CATEGORIES === 'undefined') return '';
    const cat = TRIVIA_CATEGORIES.find(c => c.id === catId);
    return cat ? (cat.icon + ' ' + cat.label) : '';
  }

  function mpScore(secondsUsed) {
    const frac = Math.max(0, 1 - (secondsUsed / mpState.QUESTION_SECONDS));
    return Math.round(500 + 500 * frac);
  }

  // ---- Option-based selection (facts, who_spoke, verse_location) ----
  function mpSelect(choiceIdx) {
    if (mpState.myAnswerIdx !== null && mpState.myAnswerIdx !== undefined) return;
    mpState.mySelectedIdx = choiceIdx;
    document.querySelectorAll('#mpOptions .mp-option').forEach((el, i) => {
      el.classList.toggle('selected', i === choiceIdx);
    });
    const submitBtn = document.getElementById('mpSubmitBtn');
    if (submitBtn) submitBtn.disabled = false;
    if (typeof playTapSfx === 'function') playTapSfx();
  }

  // ---- Word-card selection (complete_verse) ----
  function mpSelectWord(idx, el) {
    if (mpState.myAnswerIdx !== null && mpState.myAnswerIdx !== undefined) return;
    mpState.myTypedAnswer = el.dataset.word;
    document.querySelectorAll('#mpWordCards .mp-word-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    const blank = document.getElementById('mpBlank');
    if (blank) { blank.textContent = el.dataset.word; blank.classList.add('filled'); }
    const submitBtn = document.getElementById('mpSubmitBtn');
    if (submitBtn) submitBtn.disabled = false;
    if (typeof playTapSfx === 'function') playTapSfx();
  }

  function mpSubmit() {
    if (mpState.myAnswerIdx !== null && mpState.myAnswerIdx !== undefined) return;
    const q = mpState.questions[mpState.currentIdx];
    if (q.type === 'complete_verse') {
      if (!mpState.myTypedAnswer) return;
      mpAnswerComplete(mpState.myTypedAnswer);
    } else {
      if (mpState.mySelectedIdx === null || mpState.mySelectedIdx === undefined) return;
      mpAnswer(mpState.mySelectedIdx);
    }
  }

  // Option-based grading
  async function mpAnswer(choiceIdx) {
    if (mpState.myAnswerIdx !== null && mpState.myAnswerIdx !== undefined) return;
    mpState.myAnswerIdx = choiceIdx;
    const q = mpState.questions[mpState.currentIdx];
    const secondsUsed = mpState.QUESTION_SECONDS - mpState.timeLeft;
    const correct = choiceIdx === q.correct;
    const delta = correct ? mpScore(secondsUsed) : 0;

    document.querySelectorAll('#mpOptions .mp-option').forEach((el, i) => {
      el.disabled = true;
      el.classList.remove('selected');
      if (i === choiceIdx) el.classList.add(correct ? 'picked-correct' : 'picked-wrong');
    });
    mpLockSubmit();
    mpState._answered = true;
    mpStopTimerSound();
    if (typeof playSfx === 'function') playSfx(correct ? 'correct' : 'wrong');
    await mpCommitMyAnswer(choiceIdx, delta, correct);
  }

  // Word-card grading (complete_verse)
  async function mpAnswerComplete(word) {
    if (mpState.myAnswerIdx !== null && mpState.myAnswerIdx !== undefined) return;
    mpState.myAnswerIdx = 1; // mark as answered (non-null)
    const q = mpState.questions[mpState.currentIdx];
    const secondsUsed = mpState.QUESTION_SECONDS - mpState.timeLeft;
    const accept = q.acceptable || [String(q.correctWord || '').toLowerCase()];
    const correct = accept.indexOf(String(word).toLowerCase().trim()) !== -1;
    const delta = correct ? mpScore(secondsUsed) : 0;

    document.querySelectorAll('#mpWordCards .mp-word-card').forEach(el => {
      el.disabled = true;
      el.classList.remove('selected');
      const w = el.dataset.word;
      if (accept.indexOf(String(w).toLowerCase()) !== -1) el.classList.add('picked-correct');
      else if (w === word) el.classList.add('picked-wrong');
    });
    const blank = document.getElementById('mpBlank');
    if (blank) blank.classList.add(correct ? 'blank-correct' : 'blank-wrong');
    mpLockSubmit();
    mpState._answered = true;
    mpStopTimerSound();
    if (typeof playSfx === 'function') playSfx(correct ? 'correct' : 'wrong');
    await mpCommitMyAnswer(1, delta, correct);
  }

  function mpLockSubmit() {
    const submitBtn = document.getElementById('mpSubmitBtn');
    if (submitBtn) {
      submitBtn.textContent = '✓ Answer locked in';
      submitBtn.disabled = true;
      submitBtn.classList.add('mp-submit-locked');
    }
  }

  // Shared: record my answer to Firebase (or local mock)
  async function mpCommitMyAnswer(answerIdx, delta, correct) {
    if (mpState.online && typeof mpFbSubmitAnswer === 'function') {
      try { await mpFbSubmitAnswer(mpState.roomCode, answerIdx, delta); } catch (e) { console.warn(e); }
    } else {
      const me = mpState.players.find(p => p.isMe);
      if (me) { me.answered = true; me.lastDelta = delta; me._pendingCorrect = correct; }
      updateAnsweredCount();
    }
  }

  function updateAnsweredCount() {
    const el = document.getElementById('mpAnsweredCount');
    if (!el) return;
    const answered = mpState.players.filter(p => p.answered).length;
    el.textContent = `${answered} of ${mpState.players.length} answered`;
    if (!mpState.online && answered === mpState.players.length && mpState.timeLeft > 0) {
      setTimeout(() => {
        if (mpState.timerInterval) clearInterval(mpState.timerInterval);
        mpRevealResultsMock();
      }, 600);
    }
  }

  // ================= REVEAL (LIVE) =================
  async function mpRevealResultsLive() {
    if (mpState.timerInterval) clearInterval(mpState.timerInterval);
    mpStopTimerSound();
    // Host commits this round's scores once
    if (mpState.mode === 'host' && !mpState.committing && typeof mpFbCommitScores === 'function') {
      mpState.committing = true;
      const playersObj = {};
      mpState.players.forEach(p => { playersObj[p.id] = { score: p.score, lastDelta: p.lastDelta }; });
      try { await mpFbCommitScores(mpState.roomCode, playersObj); } catch (e) { console.warn(e); }
      mpState.committing = false;
    }
    mpRenderResults();
  }

  // ===== Shared team-standings computation (used by interim results AND podium) =====
  // Returns teams sorted by average points desc:
  //   [{ team, members[], total, avg, color }]
  function mpComputeTeams() {
    const teamNums = [];
    mpState.players.forEach(p => { if (p.team && teamNums.indexOf(p.team) === -1) teamNums.push(p.team); });
    teamNums.sort((a, b) => a - b);
    const teams = [];
    teamNums.forEach(t => {
      const members = mpState.players.filter(p => p.team === t);
      if (!members.length) return;
      const total = members.reduce((sum, p) => sum + (p.score || 0), 0);
      const avg = Math.round(total / members.length);
      teams.push({ team: t, members, total, avg, color: mpTeamColor(t) });
    });
    teams.sort((a, b) => b.avg - a.avg);
    return teams;
  }

  // Compact team standings shown BETWEEN questions (team + running average).
  function mpInterimTeamStandingsHtml() {
    const teams = mpComputeTeams();
    if (!teams.length) return '<div class="mp-lb-row"><span class="mp-lb-name">No teams yet</span></div>';
    const myTeamNum = mpState.myTeam;
    return teams.map((tm, i) => `
      <div class="mp-lb-row mp-lb-team${tm.team === myTeamNum ? ' me' : ''}" style="--team-color:${tm.color}">
        <span class="mp-lb-rank">${(typeof rankTrophy === 'function') ? rankTrophy(i + 1, 30) : (i + 1)}</span>
        <span class="mp-lb-name"><span class="mp-lb-team-dot" style="background:${tm.color}"></span>Team ${tm.team}${tm.team === myTeamNum ? ' (yours)' : ''} <small>· ${tm.members.length}p</small></span>
        <span class="mp-lb-score">${tm.avg}<small> avg</small></span>
      </div>
    `).join('');
  }

  function mpRenderResults() {
    const q = mpState.questions[mpState.currentIdx];
    const sorted = mpState.players.slice().sort((a, b) => b.score - a.score);
    const me = mpState.players.find(p => p.isMe);

    // Determine correctness per type
    let myCorrect = false;
    const myDelta = me ? (me.lastDelta || 0) : 0;
    if (me) {
      if (q.type === 'complete_verse') {
        myCorrect = myDelta > 0; // delta only set when correct
      } else if (mpState.online) {
        myCorrect = me.answeredIdx === q.correct;
      } else {
        myCorrect = !!me._pendingCorrect;
      }
    }
    const didNotAnswer = (mpState.myAnswerIdx === null || mpState.myAnswerIdx === undefined);
    const isLast = mpState.currentIdx + 1 >= mpState.questions.length;

    // The correct answer text differs by type
    let answerText = '';
    if (q.type === 'complete_verse') answerText = q.correctWord || q.answer;
    else answerText = q.options[q.correct];

    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    c.innerHTML = `
      <div class="mp-results">
        <div class="mp-result-banner mp-result-${myCorrect ? 'correct' : 'wrong'}">
          ${myCorrect ? `✓ Correct! +${myDelta}` : (didNotAnswer ? '⏱ Time\u2019s up' : '✗ Not quite')}
        </div>
        <div class="mp-correct-answer">Answer: <strong>${escapeHtmlMp(answerText)}</strong></div>
        ${q.ref ? `<div class="mp-result-ref">${escapeHtmlMp(q.ref)}</div>` : ''}
        <div class="mp-note">${escapeHtmlMp(q.note || '')}</div>
        <div class="mp-leaderboard-title">${mpState.teamMode ? 'Team Standings' : 'Leaderboard'}</div>
        <div class="mp-leaderboard">
          ${mpState.teamMode ? mpInterimTeamStandingsHtml() : sorted.map((p, i) => `
            <div class="mp-lb-row${p.isMe ? ' me' : ''}">
              <span class="mp-lb-rank">${(typeof rankTrophy === 'function') ? rankTrophy(i + 1, 30) : (i + 1)}</span>
              <span class="mp-lb-name">${escapeHtmlMp(p.name)}${p.isMe ? ' (you)' : ''}</span>
              ${p.lastDelta > 0 ? `<span class="mp-lb-delta">+${p.lastDelta}</span>` : ''}
              <span class="mp-lb-score">${p.score}</span>
            </div>
          `).join('')}
        </div>
        <div class="mp-countdown-label" id="mpCountdownLabel">
          ${isLast ? 'Final results coming up…' : 'Get ready for the next question…'}
        </div>
      </div>
      <!-- Floating countdown overlay — hidden until the 2s results pause ends -->
      <div class="mp-countdown-overlay hidden" id="mpCountdownOverlay">
        <div class="mp-countdown-ring">
          <div class="mp-countdown-big" id="mpCountdownNum">3</div>
        </div>
        <div class="mp-countdown-caption">Next question</div>
      </div>
    `;

    // Flow: show the result for 2 seconds first. Then —
    //  • last question  → go straight to the final results (no countdown)
    //  • otherwise       → reveal the 5-second countdown overlay and advance
    mpScheduleAdvance(isLast);
  }

  // After a 2s pause on the results, either finish (last question) or run the
  // 5-second countdown overlay.
  function mpScheduleAdvance(isLast) {
    if (mpState.countdownInterval) clearInterval(mpState.countdownInterval);
    // Use the bot-timer bucket so leaving the screen cancels these too
    const pause = setTimeout(() => {
      if (isLast) {
        // Skip the countdown entirely — go straight to final results.
        if (mpState.mode === 'host' || !mpState.online) {
          mpNextQuestion(); // nextIdx >= length → finish/podium
        }
        // joiners get routed to podium by the room 'finished' status
      } else {
        mpStartCountdown();
      }
    }, 7000);
    mpState.botTimers.push(pause);
  }

  // 5-second countdown overlay, then host advances the room.
  function mpStartCountdown() {
    const overlay = document.getElementById('mpCountdownOverlay');
    if (overlay) overlay.classList.remove('hidden');
    if (mpState.countdownInterval) clearInterval(mpState.countdownInterval);
    let remaining = 3;
    const numEl = () => document.getElementById('mpCountdownNum');
    const first = numEl();
    if (first) { first.textContent = remaining; mpPulseCountdown(first); }
    mpState.countdownInterval = setInterval(() => {
      remaining -= 1;
      const el = numEl();
      if (el) { el.textContent = Math.max(0, remaining); mpPulseCountdown(el); }
      if (remaining <= 0) {
        clearInterval(mpState.countdownInterval);
        mpState.countdownInterval = null;
        if (overlay) overlay.classList.add('mp-countdown-go');
        // Host moves everyone forward; in mock mode the local player advances.
        if (mpState.mode === 'host' || !mpState.online) {
          mpNextQuestion();
        }
      }
    }, 1000);
  }

  // Retrigger the pop animation each tick
  function mpPulseCountdown(el) {
    el.classList.remove('mp-tick');
    // force reflow so the animation restarts
    void el.offsetWidth;
    el.classList.add('mp-tick');
  }

  // ================= NEXT =================
  async function mpNextQuestion() {
    const nextIdx = mpState.currentIdx + 1;
    if (mpState.online && typeof mpFbGoToQuestion === 'function') {
      const playersObj = {};
      mpState.players.forEach(p => { playersObj[p.id] = true; });
      if (nextIdx >= mpState.questions.length) {
        if (typeof mpFbFinish === 'function') { try { await mpFbFinish(mpState.roomCode); } catch (e) {} }
      } else {
        try { await mpFbGoToQuestion(mpState.roomCode, nextIdx, playersObj); } catch (e) {}
      }
    } else {
      mpState.currentIdx = nextIdx;
      if (nextIdx >= mpState.questions.length) mpShowPodium();
      else mpShowQuestionMock();
    }
  }

  // ================= PODIUM =================
  function mpShowPodium() {
    if (mpState.timerInterval) clearInterval(mpState.timerInterval);
    if (mpState.countdownInterval) clearInterval(mpState.countdownInterval);
    if (mpState.teamMode) { mpShowTeamPodium(); return; }
    const sorted = mpState.players.slice().sort((a, b) => b.score - a.score);
    const me = mpState.players.find(p => p.isMe);
    const myRank = sorted.findIndex(p => p.isMe) + 1;
    const top3 = sorted.slice(0, 3);

    // Rank-based XP bonus: 1st=100, 2nd=50, 3rd=25, everyone else=10 for playing.
    let myBonus = 10;
    if (myRank === 1) myBonus = 100;
    else if (myRank === 2) myBonus = 50;
    else if (myRank === 3) myBonus = 25;

    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    c.innerHTML = `
      <div class="mp-podium-screen">
        <div class="mp-podium-icon">🏆</div>
        <h2 class="mp-podium-title serif">Final Results</h2>
        <div class="mp-podium">
          ${top3[1] ? `<div class="mp-podium-col silver">
            <div class="mp-podium-name">${escapeHtmlMp(top3[1].name)}</div>
            <div class="mp-podium-bar mp-podium-2"><span>2</span></div>
            <div class="mp-podium-score">${top3[1].score}</div>
          </div>` : ''}
          ${top3[0] ? `<div class="mp-podium-col gold">
            <div class="mp-podium-crown">👑</div>
            <div class="mp-podium-name">${escapeHtmlMp(top3[0].name)}</div>
            <div class="mp-podium-bar mp-podium-1"><span>1</span></div>
            <div class="mp-podium-score">${top3[0].score}</div>
          </div>` : ''}
          ${top3[2] ? `<div class="mp-podium-col bronze">
            <div class="mp-podium-name">${escapeHtmlMp(top3[2].name)}</div>
            <div class="mp-podium-bar mp-podium-3"><span>3</span></div>
            <div class="mp-podium-score">${top3[2].score}</div>
          </div>` : ''}
        </div>
        <div class="mp-your-result">You finished <strong>#${myRank}</strong> of ${sorted.length} with <strong>${me ? me.score : 0}</strong> points</div>
        <div class="mp-bonus-badge">🎁 +${myBonus} XP bonus${myRank <= 3 ? ` &middot; Rank ${myRank}!` : ''}</div>
        <div class="mp-full-standings">
          ${sorted.map((p, i) => `
            <div class="mp-lb-row${p.isMe ? ' me' : ''}">
              <span class="mp-lb-rank">${(typeof rankTrophy === 'function') ? rankTrophy(i + 1, 30) : (i + 1)}</span>
              <span class="mp-lb-name">${escapeHtmlMp(p.name)}${p.isMe ? ' (you)' : ''}</span>
              <span class="mp-lb-score">${p.score}</span>
            </div>
          `).join('')}
        </div>
        <div class="mp-podium-actions">
          <button class="btn btn-gold" onclick="mpReturnToLobby()">Back to Lobby</button>
          <button class="btn btn-ghost" onclick="mpExit()">Leave Game</button>
        </div>
      </div>
    `;
    // Final-results celebration: winner fanfare + confetti for everyone.
    if (typeof playWinnerSfx === 'function') playWinnerSfx();
    if (typeof fireConfetti === 'function') {
      fireConfetti();
      setTimeout(() => { if (typeof fireConfetti === 'function') fireConfetti(); }, 600);
    }
    // Award the rank bonus ONCE per game (guard against podium re-renders).
    if (typeof awardXp === 'function' && me && !mpState._xpAwarded) {
      mpState._xpAwarded = true;
      awardXp(myBonus);
    }
  }

  // ================= TEAM PODIUM =================
  function mpShowTeamPodium() {
    // Compute each team's average via the shared helper (same logic the interim
    // between-question standings use, so they always agree).
    const teams = mpComputeTeams();

    // Safety: if team mode is on but nobody actually has a team, fall back to
    // the normal (solo) podium so players still see a meaningful result.
    if (!teams.length) {
      mpState.teamMode = false;
      mpShowPodium();
      return;
    }

    const me = mpState.players.find(p => p.isMe);
    const myTeamNum = mpState.myTeam;
    const myTeam = teams.find(t => t.team === myTeamNum);
    const myTeamRank = teams.findIndex(t => t.team === myTeamNum) + 1;

    // Rank-based XP bonus by TEAM placement.
    let myBonus = 10;
    if (myTeamRank === 1) myBonus = 100;
    else if (myTeamRank === 2) myBonus = 50;
    else if (myTeamRank === 3) myBonus = 25;

    const top3 = teams.slice(0, 3);
    const podiumCol = (tm, rank) => tm ? `
      <div class="mp-podium-col ${rank === 1 ? 'gold' : rank === 2 ? 'silver' : 'bronze'}">
        ${rank === 1 ? '<div class="mp-podium-crown">👑</div>' : ''}
        <div class="mp-podium-name" style="color:${tm.color}">Team ${tm.team}</div>
        <div class="mp-podium-bar mp-podium-${rank}"><span>${rank}</span></div>
        <div class="mp-podium-score">${tm.avg}<small> avg</small></div>
      </div>` : '';

    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    c.innerHTML = `
      <div class="mp-podium-screen">
        <div class="mp-podium-icon">🏆</div>
        <h2 class="mp-podium-title serif">Team Results</h2>
        <div class="mp-podium">
          ${podiumCol(top3[1], 2)}
          ${podiumCol(top3[0], 1)}
          ${podiumCol(top3[2], 3)}
        </div>
        ${myTeam ? `
          <div class="mp-your-result">Your <strong style="color:${myTeam.color}">Team ${myTeam.team}</strong> finished <strong>#${myTeamRank}</strong> of ${teams.length}</div>
          <div class="mp-team-avg-note">Your team averaged <strong>${myTeam.avg}</strong> points (${myTeam.total} total ÷ ${myTeam.members.length} player${myTeam.members.length === 1 ? '' : 's'})</div>
        ` : ''}
        <div class="mp-bonus-badge">🎁 +${myBonus} XP bonus${myTeamRank <= 3 ? ` &middot; Team rank ${myTeamRank}!` : ''}</div>
        <div class="mp-team-standings">
          ${teams.map((tm, i) => `
            <div class="mp-team-result${tm.team === myTeamNum ? ' me' : ''}" style="--team-color:${tm.color}">
              <div class="mp-team-result-head">
                <span class="mp-team-result-rank">${(typeof rankTrophy === 'function') ? rankTrophy(i + 1, 28) : (i + 1)}</span>
                <span class="mp-team-result-name">Team ${tm.team}</span>
                <span class="mp-team-result-avg">${tm.avg} <small>avg</small></span>
              </div>
              <div class="mp-team-result-members">
                ${tm.members.slice().sort((a,b)=>b.score-a.score).map(m => `
                  <span class="mp-team-result-member${m.isMe ? ' me' : ''}">${escapeHtmlMp(m.name)}${m.isMe ? ' (you)' : ''} · ${m.score}</span>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="mp-podium-actions">
          <button class="btn btn-gold" onclick="mpReturnToLobby()">Back to Lobby</button>
          <button class="btn btn-ghost" onclick="mpExit()">Leave Game</button>
        </div>
      </div>
    `;
    if (typeof playWinnerSfx === 'function') playWinnerSfx();
    if (typeof fireConfetti === 'function') {
      fireConfetti();
      setTimeout(() => { if (typeof fireConfetti === 'function') fireConfetti(); }, 600);
    }
    if (typeof awardXp === 'function' && me && !mpState._xpAwarded) {
      mpState._xpAwarded = true;
      awardXp(myBonus);
    }
  }

  // Return to the lobby reusing the SAME room code (no new code generated).
  async function mpReturnToLobby() {
    // Reset the per-game guard so the next game can award XP again.
    mpState._xpAwarded = false;
    mpState.myAnswerIdx = null;
    mpState.mySelectedIdx = null;
    mpState.myTypedAnswer = '';

    if (mpState.online && mpState.mode === 'host' && typeof mpFbResetToLobby === 'function') {
      // Host rebuilds a fresh question set and resets the room to lobby.
      const questions = mpGetQuestions(mpState.NUM_QUESTIONS);
      const playersObj = {};
      mpState.players.forEach(p => { playersObj[p.id] = true; });
      try {
        await mpFbResetToLobby(mpState.roomCode, playersObj, questions);
        // The room listener will route everyone (host + players) back to lobby.
      } catch (e) {
        console.warn('Reset to lobby failed:', e && e.message);
        renderMpLobby();
      }
    } else if (mpState.online && mpState.mode === 'join') {
      // Joiner can't reset the room. Show a waiting lobby; when the host resets,
      // the room listener will refresh everyone. If the host already reset,
      // we're effectively already back in the lobby.
      mpState.players.forEach(p => { p.score = 0; p.lastDelta = 0; p.answered = false; });
      mpState.currentIdx = -1;
      renderMpLobby();
    } else {
      // Mock mode: rebuild a local lobby with the same code.
      mpState.players.forEach(p => { p.score = 0; p.lastDelta = 0; p.answered = false; });
      mpState.questions = [];
      mpState.currentIdx = -1;
      renderMpLobby();
    }
  }

  // ================= MOCK GAMEPLAY (offline fallback) =================
  function mpShowQuestionMock() {
    const q = mpState.questions[mpState.currentIdx];
    if (!q) { mpShowPodium(); return; }
    mpState.myAnswerIdx = null;
    mpState.players.forEach(p => { p.answered = false; p.lastDelta = 0; });
    mpState.questionStartedAt = Date.now();
    mpState.timeLeft = mpState.QUESTION_SECONDS;
    mpRenderQuestion(q);
    mpSimulateBotAnswers();
    if (mpState.timerInterval) clearInterval(mpState.timerInterval);
    mpState.timerInterval = setInterval(() => {
      mpState.timeLeft -= 0.1;
      const fill = document.getElementById('mpTimerFill');
      const tnum = document.getElementById('mpTimer');
      if (fill) fill.style.width = Math.max(0, (mpState.timeLeft / mpState.QUESTION_SECONDS) * 100) + '%';
      if (tnum) tnum.textContent = Math.ceil(Math.max(0, mpState.timeLeft));
      if (mpState.timeLeft <= 0) { clearInterval(mpState.timerInterval); mpRevealResultsMock(); }
    }, 100);
  }

  function mpSimulateBotAnswers() {
    mpState.players.forEach(p => {
      if (p.isMe) return;
      const delay = 1500 + Math.random() * 9000;
      const t = setTimeout(() => {
        const correct = Math.random() < 0.6;
        const secondsUsed = (Date.now() - mpState.questionStartedAt) / 1000;
        p.answered = true;
        p.lastDelta = correct ? mpScore(secondsUsed) : 0;
        p._pendingCorrect = correct;
        updateAnsweredCount();
      }, delay);
      mpState.botTimers.push(t);
    });
  }

  function mpRevealResultsMock() {
    if (mpState.timerInterval) clearInterval(mpState.timerInterval);
    mpStopTimerSound();
    mpState.players.forEach(p => { p.score += (p.lastDelta || 0); });
    // In mock mode, simulate bot final answers scoring too (already added above).
    mpRenderResults();
    // The 5s countdown in mpRenderResults advances the game automatically.
  }

  // ================= LEAVE / EXIT =================
  function mpConfirmLeave() {
    if (typeof showConfirm === 'function') {
      showConfirm({
        icon: '🚪', title: 'Leave room?',
        message: 'You will leave this game and return to the mini-games hub.',
        okText: 'Leave', cancelText: 'Stay', destructive: true
      }).then(ok => { if (ok) mpExit(); });
    } else {
      mpExit();
    }
  }

  function mpExitNoRedirect() {
    if (mpState.online && typeof mpFbLeaveRoom === 'function' && mpState.roomCode) {
      mpFbLeaveRoom(mpState.roomCode, mpState.mode === 'host');
    }
    // Deliberately leaving clears the saved room so we don't offer to rejoin it.
    mpClearActiveRoom();
    // Remove any lingering chat banner.
    clearTimeout(mpState._chatBannerTimer);
    const banner = document.getElementById('mpChatBanner');
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    mpReset();
  }

  function mpExit() {
    mpExitNoRedirect();
    if (typeof openMiniGames === 'function') openMiniGames();
    else if (typeof goHome === 'function') goHome();
  }
