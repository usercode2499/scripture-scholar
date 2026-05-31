// ============================================================
// Scripture Scholar — Multiplayer (MOCK / Phase 1)
// ============================================================
// Kahoot-style live trivia. THIS IS A MOCK: it simulates 3 other
// players locally so the full flow (lobby → synced questions →
// live leaderboard → podium) can be seen and tested WITHOUT any
// backend. Firebase wiring replaces the mock engine later — the
// UI and screen flow stay identical.
//
// A "MP_BACKEND" object is the seam where Firebase plugs in. Right
// now it's an in-memory simulation. Swapping in Firebase means
// reimplementing these same methods against the Realtime Database.
//
// Exports (global):
//   openMultiplayer()    — entry: choose host or join
//   mpHostGame(), mpJoinGame()
//   (plus internal screen renderers)
// ============================================================

  // Reuse the Fact Game question pool for multiplayer rounds.
  function mpGetQuestions(count) {
    const pool = (typeof FACT_GAME_DATA !== 'undefined') ? FACT_GAME_DATA.slice() : [];
    // shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, count || 8).map(item => {
      // shuffle options, track correct index
      const opts = item.options.map((text, i) => ({ text, isCorrect: i === item.correct }));
      for (let i = opts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opts[i], opts[j]] = [opts[j], opts[i]];
      }
      return {
        q: item.q,
        ref: item.ref,
        note: item.note,
        options: opts.map(o => o.text),
        correct: opts.findIndex(o => o.isCorrect)
      };
    });
  }

  // ---- Mock player names for the simulation ----
  const MP_FAKE_NAMES = ['Maria', 'Brother Lee', 'Sister Cruz', 'Elder Tom', 'Joseph', 'Hannah'];

  // ---- Game state (mirrors what will live in Firebase) ----
  const mpState = {
    mode: null,         // 'host' | 'join'
    roomCode: '',
    me: '',             // my display name
    players: [],        // [{name, score, lastDelta, answered}]
    questions: [],
    currentIdx: -1,     // -1 = lobby, 0..n = questions, >=n = finished
    questionStartedAt: 0,
    myAnswerIdx: null,
    timerInterval: null,
    timeLeft: 0,
    QUESTION_SECONDS: 15,
    NUM_QUESTIONS: 8,
    botTimers: []
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

  // ================= ENTRY =================
  function openMultiplayer() {
    mpReset();
    renderMpHome();
    if (typeof showScreen === 'function') showScreen('screen-multiplayer');
  }

  function mpReset() {
    if (mpState.timerInterval) clearInterval(mpState.timerInterval);
    mpState.botTimers.forEach(t => clearTimeout(t));
    mpState.botTimers = [];
    mpState.mode = null;
    mpState.roomCode = '';
    mpState.players = [];
    mpState.questions = [];
    mpState.currentIdx = -1;
    mpState.myAnswerIdx = null;
  }

  // ================= HOME (host or join) =================
  function renderMpHome() {
    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    c.innerHTML = `
      <div class="mp-intro">
        <div class="mp-intro-icon">🎮</div>
        <h2 class="mp-intro-title serif">Group Trivia</h2>
        <p class="mp-intro-sub">Play Book of Mormon trivia live with friends, family, or your class — everyone answers the same questions at the same time.</p>
        <div class="mp-mock-banner">✨ Preview mode — you'll play against sample players for now. Real device-to-device play is coming soon!</div>
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
  }

  // ================= HOST: create room & lobby =================
  function mpHostGame() {
    mpState.mode = 'host';
    mpState.roomCode = mpRandomCode();
    mpState.me = mpMyName();
    mpState.players = [{ name: mpState.me, score: 0, lastDelta: 0, answered: false, isMe: true, isHost: true }];
    mpState.currentIdx = -1;
    renderMpLobby();
    // MOCK: simulate other players trickling in
    mpSimulatePlayersJoining();
  }

  function mpSimulatePlayersJoining() {
    const joinCount = 2 + Math.floor(Math.random() * 2); // 2-3 bots
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

  function mpJoinGame() {
    const input = document.getElementById('mpCodeInput');
    const code = input ? input.value.trim().toUpperCase() : '';
    const hint = document.getElementById('mpJoinHint');
    if (code.length < 4) {
      if (hint) hint.textContent = 'Please enter the full room code.';
      return;
    }
    // MOCK: accept any code, drop us into a lobby with simulated players
    mpState.mode = 'join';
    mpState.roomCode = code;
    mpState.me = mpMyName();
    const others = MP_FAKE_NAMES.slice().sort(() => Math.random() - 0.5).slice(0, 3);
    mpState.players = [
      { name: others[0], score: 0, lastDelta: 0, answered: false, isHost: true },
      { name: mpState.me, score: 0, lastDelta: 0, answered: false, isMe: true },
      { name: others[1], score: 0, lastDelta: 0, answered: false },
      { name: others[2], score: 0, lastDelta: 0, answered: false }
    ];
    renderMpLobby();
    // MOCK: host "starts" the game after a few seconds
    const t = setTimeout(() => { mpStartGame(); }, 4000);
    mpState.botTimers.push(t);
  }

  function renderMpLobby() {
    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    const isHost = mpState.mode === 'host';
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

        ${isHost ? `
          <button class="btn btn-gold mp-start-btn" onclick="mpStartGame()" ${mpState.players.length < 2 ? 'disabled' : ''}>
            ${mpState.players.length < 2 ? 'Waiting for players…' : 'Start Game →'}
          </button>
        ` : `
          <div class="mp-waiting-spinner">⏳ Waiting for host…</div>
        `}
        <button class="mp-leave-link" onclick="mpConfirmLeave()">Leave room</button>
      </div>
    `;
  }

  function escapeHtmlMp(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // ================= GAMEPLAY =================
  function mpStartGame() {
    mpState.questions = mpGetQuestions(mpState.NUM_QUESTIONS);
    mpState.currentIdx = 0;
    mpState.players.forEach(p => { p.score = 0; p.lastDelta = 0; });
    mpShowQuestion();
  }

  function mpShowQuestion() {
    const q = mpState.questions[mpState.currentIdx];
    if (!q) { mpShowPodium(); return; }
    mpState.myAnswerIdx = null;
    mpState.players.forEach(p => { p.answered = false; p.lastDelta = 0; });
    mpState.questionStartedAt = Date.now();
    mpState.timeLeft = mpState.QUESTION_SECONDS;

    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    c.innerHTML = `
      <div class="mp-game">
        <div class="mp-game-top">
          <span class="mp-qcount">Question ${mpState.currentIdx + 1} of ${mpState.questions.length}</span>
          <span class="mp-timer" id="mpTimer">${mpState.timeLeft}</span>
        </div>
        <div class="mp-timer-track"><div class="mp-timer-fill" id="mpTimerFill" style="width:100%"></div></div>
        <div class="mp-question serif">${q.q}</div>
        <div class="mp-options" id="mpOptions">
          ${q.options.map((opt, i) => `
            <button class="mp-option" data-no-tap-sound onclick="mpAnswer(${i})">${opt}</button>
          `).join('')}
        </div>
        <div class="mp-answered-count" id="mpAnsweredCount"></div>
      </div>
    `;

    // MOCK: bots answer at random times with random correctness
    mpSimulateBotAnswers();

    // Timer countdown
    if (mpState.timerInterval) clearInterval(mpState.timerInterval);
    mpState.timerInterval = setInterval(() => {
      mpState.timeLeft -= 0.1;
      const fill = document.getElementById('mpTimerFill');
      const tnum = document.getElementById('mpTimer');
      if (fill) fill.style.width = Math.max(0, (mpState.timeLeft / mpState.QUESTION_SECONDS) * 100) + '%';
      if (tnum) tnum.textContent = Math.ceil(Math.max(0, mpState.timeLeft));
      if (mpState.timeLeft <= 0) {
        clearInterval(mpState.timerInterval);
        mpRevealResults();
      }
    }, 100);
  }

  function mpSimulateBotAnswers() {
    mpState.players.forEach(p => {
      if (p.isMe) return;
      const delay = 1500 + Math.random() * 9000; // answer between 1.5s and 10.5s
      const t = setTimeout(() => {
        if (mpState.myAnswerIdx === null && mpState.timeLeft > 0) {} // bots independent
        const q = mpState.questions[mpState.currentIdx];
        const correct = Math.random() < 0.6; // 60% accuracy
        const secondsUsed = (Date.now() - mpState.questionStartedAt) / 1000;
        p.answered = true;
        p.lastDelta = correct ? mpScore(secondsUsed) : 0;
        p._pendingCorrect = correct;
        updateAnsweredCount();
      }, delay);
      mpState.botTimers.push(t);
    });
  }

  function mpScore(secondsUsed) {
    // Kahoot-style: base 1000, faster = more, floor 500 for a correct answer
    const frac = Math.max(0, 1 - (secondsUsed / mpState.QUESTION_SECONDS));
    return Math.round(500 + 500 * frac);
  }

  function mpAnswer(choiceIdx) {
    if (mpState.myAnswerIdx !== null) return;
    mpState.myAnswerIdx = choiceIdx;
    const q = mpState.questions[mpState.currentIdx];
    const me = mpState.players.find(p => p.isMe);
    const secondsUsed = (Date.now() - mpState.questionStartedAt) / 1000;
    const correct = choiceIdx === q.correct;
    if (me) {
      me.answered = true;
      me.lastDelta = correct ? mpScore(secondsUsed) : 0;
      me._pendingCorrect = correct;
    }
    // Lock in UI
    document.querySelectorAll('#mpOptions .mp-option').forEach((el, i) => {
      el.disabled = true;
      if (i === choiceIdx) el.classList.add(correct ? 'picked-correct' : 'picked-wrong');
    });
    if (typeof playSfx === 'function') playSfx(correct ? 'correct' : 'wrong');
    updateAnsweredCount();
  }

  function updateAnsweredCount() {
    const el = document.getElementById('mpAnsweredCount');
    if (!el) return;
    const answered = mpState.players.filter(p => p.answered).length;
    el.textContent = `${answered} of ${mpState.players.length} answered`;
    // If everyone has answered, end early
    if (answered === mpState.players.length && mpState.timeLeft > 0) {
      setTimeout(() => {
        if (mpState.timerInterval) clearInterval(mpState.timerInterval);
        mpRevealResults();
      }, 600);
    }
  }

  function mpRevealResults() {
    if (mpState.timerInterval) clearInterval(mpState.timerInterval);
    const q = mpState.questions[mpState.currentIdx];
    // Apply this round's points
    mpState.players.forEach(p => {
      p.score += (p.lastDelta || 0);
    });
    // Sort leaderboard
    const sorted = mpState.players.slice().sort((a, b) => b.score - a.score);
    const me = mpState.players.find(p => p.isMe);
    const myCorrect = me && me._pendingCorrect;

    const c = document.getElementById('multiplayerContainer');
    if (!c) return;
    c.innerHTML = `
      <div class="mp-results">
        <div class="mp-result-banner mp-result-${myCorrect ? 'correct' : 'wrong'}">
          ${myCorrect ? `✓ Correct! +${me.lastDelta}` : (mpState.myAnswerIdx === null ? "⏱ Time’s up" : '✗ Not quite')}
        </div>
        <div class="mp-correct-answer">Answer: <strong>${q.options[q.correct]}</strong></div>
        <div class="mp-note">${q.note}</div>

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

        ${mpState.mode === 'host' ? `
          <button class="btn btn-gold" style="width:100%;" onclick="mpNextQuestion()">
            ${mpState.currentIdx + 1 >= mpState.questions.length ? 'See Final Results →' : 'Next Question →'}
          </button>
        ` : `
          <div class="mp-waiting-spinner">Waiting for host…</div>
        `}
      </div>
    `;

    // MOCK: if joiner, auto-advance after a delay (host "controls" it)
    if (mpState.mode === 'join') {
      const t = setTimeout(() => mpNextQuestion(), 3500);
      mpState.botTimers.push(t);
    }
  }

  function mpNextQuestion() {
    mpState.currentIdx++;
    if (mpState.currentIdx >= mpState.questions.length) {
      mpShowPodium();
    } else {
      mpShowQuestion();
    }
  }

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
          <button class="btn btn-gold" onclick="openMultiplayer()">Play Again</button>
          <button class="btn btn-ghost" onclick="mpExit()">Back to Home</button>
        </div>
      </div>
    `;
    if (typeof fireConfetti === 'function' && myRank === 1) fireConfetti();
    // Award a little solo XP for participating
    if (typeof awardXp === 'function' && me) {
      const bonus = Math.min(50, Math.max(10, Math.round(me.score / 100)));
      awardXp(bonus);
    }
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

  function mpExit() {
    mpReset();
    if (typeof openMiniGames === 'function') openMiniGames();
    else if (typeof goHome === 'function') goHome();
  }
