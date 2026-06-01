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
    if (typeof buildTriviaSet === 'function') {
      const cats = (mpState.categories && mpState.categories.length) ? mpState.categories : null;
      const set = buildTriviaSet(count || mpState.NUM_QUESTIONS, cats);
      if (set && set.length) return set;
    }
    // Legacy fallback
    const pool = (typeof FACT_GAME_DATA !== 'undefined') ? FACT_GAME_DATA.slice() : [];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, count || 8).map(item => {
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
    QUESTION_SECONDS: 15,
    NUM_QUESTIONS: 10,
    categories: [],        // host-selected category ids (empty = all)
    countdownInterval: null,
    botTimers: [],
    lastStatus: null,     // track room status transitions (firebase mode)
    committing: false
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

  function escapeHtmlMp(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // ================= ENTRY =================
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
    mpState.countdownInterval = null;
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
        mpState.myId = await mpFbCreateRoom(mpState.roomCode, mpState.me, questions);
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
    mpState.players = [{ name: mpState.me, score: 0, lastDelta: 0, answered: false, isMe: true, isHost: true }];
    mpState.currentIdx = -1;
    renderMpLobby();
    mpSimulatePlayersJoining();
  }

  function mpSimulatePlayersJoining() {
    const joinCount = 2 + Math.floor(Math.random() * 2);
    const names = MP_FAKE_NAMES.slice().sort(() => Math.random() - 0.5).slice(0, joinCount);
    names.forEach((name, i) => {
      const t = setTimeout(() => {
        mpState.players.push({ name, score: 0, lastDelta: 0, answered: false });
        renderMpLobby();
        if (typeof playSfx === 'function') playSfx('correct');
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
        const result = await mpFbJoinRoom(code, mpState.me);
        if (result === 'notfound') {
          if (hint) hint.textContent = 'No room found with that code.';
          return;
        }
        if (result === 'started') {
          if (hint) hint.textContent = 'That game has already started.';
          return;
        }
        mpState.myId = mpFbClientId();
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
          isHost: !!p.isHost
        };
      });
      mpState.questions = room.questions || [];
      mpState.currentIdx = (typeof room.currentIdx === 'number') ? room.currentIdx : -1;
      mpState.questionStartedAt = room.startedAt || 0;

      const status = room.status;
      const statusChanged = status !== mpState.lastStatus;
      const idxChanged = mpState._lastIdx !== mpState.currentIdx;
      mpState.lastStatus = status;
      mpState._lastIdx = mpState.currentIdx;

      // Route to the right screen
      if (status === 'lobby') {
        renderMpLobby();
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

  // ================= LOBBY =================
  function renderMpLobby() {
    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
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
          ${mpState.players.map(p => `
            <div class="mp-player-chip${p.isMe ? ' me' : ''}">
              <span class="mp-player-avatar">${p.isHost ? '👑' : '🙂'}</span>
              <span class="mp-player-name">${escapeHtmlMp(p.name)}${p.isMe ? ' (you)' : ''}</span>
            </div>
          `).join('')}
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
          <button class="btn btn-gold mp-start-btn" onclick="mpStartGame()" ${enoughPlayers ? '' : 'disabled'}>
            ${enoughPlayers ? 'Start Game →' : 'Waiting for players…'}
          </button>
        ` : `
          <div class="mp-waiting-spinner">⏳ Waiting for host…</div>
        `}
        <button class="mp-leave-link" onclick="mpConfirmLeave()">Leave room</button>
      </div>
    `;
  }

  // Host toggles a category on/off (max 3)
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
    if (typeof playTapSfx === 'function') playTapSfx();
    if (typeof showToast === 'function') showToast('🎲 Picked 3 random categories');
  }

  // ================= START =================
  async function mpStartGame() {
    if (mpState.online && typeof mpFbStartGame === 'function') {
      try { await mpFbStartGame(mpState.roomCode); } catch (e) { console.warn(e); }
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
    mpState.timeLeft = mpState.QUESTION_SECONDS;
    mpRenderQuestion(q);
    // Local countdown synced to server start time
    if (mpState.timerInterval) clearInterval(mpState.timerInterval);
    mpState.timerInterval = setInterval(() => {
      // Compute remaining from server start if we have it
      mpState.timeLeft -= 0.1;
      const fill = document.getElementById('mpTimerFill');
      const tnum = document.getElementById('mpTimer');
      if (fill) fill.style.width = Math.max(0, (mpState.timeLeft / mpState.QUESTION_SECONDS) * 100) + '%';
      if (tnum) tnum.textContent = Math.ceil(Math.max(0, mpState.timeLeft));
      if (mpState.timeLeft <= 0) {
        clearInterval(mpState.timerInterval);
        // Host triggers the reveal for everyone when time runs out
        if (mpState.mode === 'host' && typeof mpFbReveal === 'function') {
          mpFbReveal(mpState.roomCode);
        }
      }
    }, 100);
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
        <div class="mp-leaderboard-title">Leaderboard</div>
        <div class="mp-leaderboard">
          ${sorted.map((p, i) => `
            <div class="mp-lb-row${p.isMe ? ' me' : ''}">
              <span class="mp-lb-rank">${i + 1}</span>
              <span class="mp-lb-name">${escapeHtmlMp(p.name)}${p.isMe ? ' (you)' : ''}</span>
              ${p.lastDelta > 0 ? `<span class="mp-lb-delta">+${p.lastDelta}</span>` : ''}
              <span class="mp-lb-score">${p.score}</span>
            </div>
          `).join('')}
        </div>
        <div class="mp-countdown-label" id="mpCountdownLabel">
          ${isLast ? 'Final results coming up…' : 'Next question coming up…'}
        </div>
      </div>
      <!-- Floating countdown overlay — big number over the dimmed-but-visible results -->
      <div class="mp-countdown-overlay" id="mpCountdownOverlay">
        <div class="mp-countdown-ring">
          <div class="mp-countdown-big" id="mpCountdownNum">5</div>
        </div>
        <div class="mp-countdown-caption">${isLast ? 'Final results' : 'Next question'}</div>
      </div>
    `;

    // Auto-advance countdown — shows for everyone. The HOST actually triggers
    // the advance when it hits 0 (others just watch and get synced by Firebase).
    mpStartCountdown(isLast);
  }

  // 5-second countdown overlay, then host advances the room.
  function mpStartCountdown(isLast) {
    if (mpState.countdownInterval) clearInterval(mpState.countdownInterval);
    let remaining = 5;
    const numEl = () => document.getElementById('mpCountdownNum');
    const overlay = document.getElementById('mpCountdownOverlay');
    // Pop the first number immediately
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
    const sorted = mpState.players.slice().sort((a, b) => b.score - a.score);
    const me = mpState.players.find(p => p.isMe);
    const myRank = sorted.findIndex(p => p.isMe) + 1;
    const top3 = sorted.slice(0, 3);
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
        <div class="mp-full-standings">
          ${sorted.map((p, i) => `
            <div class="mp-lb-row${p.isMe ? ' me' : ''}">
              <span class="mp-lb-rank">${i + 1}</span>
              <span class="mp-lb-name">${escapeHtmlMp(p.name)}${p.isMe ? ' (you)' : ''}</span>
              <span class="mp-lb-score">${p.score}</span>
            </div>
          `).join('')}
        </div>
        <div class="mp-podium-actions">
          <button class="btn btn-gold" onclick="mpPlayAgain()">${mpState.mode === 'host' ? 'New Game' : 'Back to Lobby'}</button>
          <button class="btn btn-ghost" onclick="mpExit()">Back to Home</button>
        </div>
      </div>
    `;
    if (typeof fireConfetti === 'function' && myRank === 1) fireConfetti();
    if (typeof awardXp === 'function' && me) {
      const bonus = Math.min(50, Math.max(10, Math.round((me.score || 0) / 100)));
      awardXp(bonus);
    }
  }

  function mpPlayAgain() {
    // Leave current room and start fresh from the home screen
    mpExitNoRedirect();
    openMultiplayer();
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
    mpReset();
  }

  function mpExit() {
    mpExitNoRedirect();
    if (typeof openMiniGames === 'function') openMiniGames();
    else if (typeof goHome === 'function') goHome();
  }
