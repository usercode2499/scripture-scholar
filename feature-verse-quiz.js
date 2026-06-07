// ============================================================
// Scripture Scholar — Verse Quiz (mini-game)
// ============================================================
// Standalone mini-game: completing scripture passages by tapping
// word cards in order (Duolingo-style word bank).
//
// Players choose how many to play. Each question shows a verse with
// one or more blanks; word tiles below shuffle the correct answers
// with distractors. Tap tiles in order to fill the blanks. After
// each question, the player chooses Continue or Stop.
//
// Sources: scripture-mastery verses from the Book of Mormon Teacher
// Manual (chapters 1-10) — also drawn from existing LESSONS questions.
//
// Exports (global):
//   VERSE_QUIZ_DATA      — array of 20 questions
//   openVerseQuiz()      — entry point (from mini-games hub)
//   renderVerseQuizScreen()  — internal
// ============================================================

  const VERSE_QUIZ_DATA = [
    {
      id: 'vq1',
      reference: '1 Nephi 3:7',
      prompt: 'I will go and ___ the things which the Lord hath ___, for I know that the Lord giveth no commandments unto the children of men, save he shall ___ a way for them that they may accomplish the thing which he commandeth them.',
      answers: ['do', 'commanded', 'prepare'],
      distractors: ['try', 'instructed', 'find', 'make', 'said']
    },
    {
      id: 'vq2',
      reference: '1 Nephi 19:23',
      prompt: 'I did read many things unto them... that I might more fully ___ them to believe in the Lord their ___.',
      answers: ['persuade', 'Redeemer'],
      distractors: ['teach', 'inspire', 'Savior', 'Master', 'God']
    },
    {
      id: 'vq3',
      reference: '1 Nephi 21:16',
      prompt: 'Behold, I have ___ thee upon the palms of my ___.',
      answers: ['graven', 'hands'],
      distractors: ['written', 'placed', 'arms', 'heart', 'palms']
    },
    {
      id: 'vq4',
      reference: '2 Nephi 2:25',
      prompt: 'Adam fell that men might be; and men are, that they might have ___.',
      answers: ['joy'],
      distractors: ['life', 'love', 'peace', 'hope', 'truth']
    },
    {
      id: 'vq5',
      reference: '2 Nephi 2:27',
      prompt: 'They are free to choose ___ and eternal life... or to choose ___ and death.',
      answers: ['liberty', 'captivity'],
      distractors: ['freedom', 'bondage', 'sin', 'darkness', 'happiness']
    },
    {
      id: 'vq6',
      reference: '2 Nephi 4:34',
      prompt: 'I have ___ in thee, and I will ___ in thee forever.',
      answers: ['trusted', 'trust'],
      distractors: ['believed', 'believe', 'hoped', 'rest', 'remained']
    },
    {
      id: 'vq7',
      reference: '2 Nephi 5:27',
      prompt: 'And it came to pass that we lived after the manner of ___.',
      answers: ['happiness'],
      distractors: ['joy', 'peace', 'righteousness', 'faith', 'wisdom']
    },
    {
      id: 'vq8',
      reference: '2 Nephi 9:39',
      prompt: 'To be carnally-minded is ___, and to be spiritually-minded is ___ ___.',
      answers: ['death', 'life', 'eternal'],
      distractors: ['hell', 'joy', 'sin', 'pain', 'darkness']
    },
    {
      id: 'vq9',
      reference: '2 Nephi 9:41',
      prompt: 'The keeper of the gate is the ___ ___ of Israel; and he employeth no servant there.',
      answers: ['Holy', 'One'],
      distractors: ['Mighty', 'God', 'King', 'Son', 'Lord']
    },
    {
      id: 'vq10',
      reference: '2 Nephi 11:4',
      prompt: 'All things which have been given of God from the beginning of the world, unto man, are the ___ of him.',
      answers: ['typifying'],
      distractors: ['testimony', 'witnessing', 'fulfilling', 'mention', 'image']
    },
    {
      id: 'vq11',
      reference: '2 Nephi 16:8',
      prompt: '"Here am I; send ___."',
      answers: ['me'],
      distractors: ['us', 'them', 'him', 'all', 'now']
    },
    {
      id: 'vq12',
      reference: '1 Nephi 22:17',
      prompt: 'The righteous need not ___, for the Lord will ___ them by his power.',
      answers: ['fear', 'preserve'],
      distractors: ['worry', 'protect', 'doubt', 'save', 'lead']
    },
    {
      id: 'vq13',
      reference: '1 Nephi 19:23',
      prompt: 'And I did read many things... that I might more fully persuade them to ___ in the Lord their Redeemer.',
      answers: ['believe'],
      distractors: ['trust', 'hope', 'walk', 'live', 'follow']
    },
    {
      id: 'vq14',
      reference: '2 Nephi 10:23–24',
      prompt: 'Cheer up your ___, and remember that ye are free to act for yourselves — to choose the way of everlasting ___.',
      answers: ['hearts', 'death'],
      distractors: ['souls', 'life', 'minds', 'spirits', 'joy']
    },
    {
      id: 'vq15',
      reference: '1 Nephi 1:20',
      prompt: 'I, Nephi, will show unto you that the tender ___ of the Lord are over all those whom he hath ___.',
      answers: ['mercies', 'chosen'],
      distractors: ['blessings', 'called', 'graces', 'favored', 'gifts']
    },
    {
      id: 'vq16',
      reference: '2 Nephi 9:28',
      prompt: 'When they are ___ they think they are wise, and they hearken not unto the counsel of God.',
      answers: ['learned'],
      distractors: ['wealthy', 'powerful', 'famous', 'taught', 'mighty']
    },
    {
      id: 'vq17',
      reference: '2 Nephi 9:29',
      prompt: 'To be ___ is good if they hearken unto the counsels of God.',
      answers: ['learned'],
      distractors: ['wise', 'rich', 'humble', 'taught', 'pure']
    },
    {
      id: 'vq18',
      reference: '1 Nephi 3:7',
      prompt: 'The Lord giveth no ___ unto the children of men, save he shall prepare a way for them.',
      answers: ['commandments'],
      distractors: ['trials', 'gifts', 'promises', 'blessings', 'tasks']
    },
    {
      id: 'vq19',
      reference: '2 Nephi 2:11',
      prompt: 'It must needs be, that there is an ___ in all things.',
      answers: ['opposition'],
      distractors: ['order', 'wisdom', 'purpose', 'meaning', 'design']
    },
    {
      id: 'vq20',
      reference: '2 Nephi 10:20',
      prompt: 'Let us remember him, and lay aside our sins, and not hang down our heads, for we are not ___ off.',
      answers: ['cast'],
      distractors: ['put', 'thrown', 'sent', 'taken', 'driven']
    }
  ];

  // Internal state for an active session
  const vqState = {
    currentIdx: 0,        // index into the chosen pool
    pool: [],             // shuffled subset of VERSE_QUIZ_DATA
    selectedTiles: [],    // word tiles the user has tapped in order
    answeredCorrectly: 0, // running tally for the session
    totalXp: 0
  };

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // True if there's a session in progress that can be resumed
  function hasVerseQuizInProgress() {
    return vqState.pool.length > 0 && vqState.currentIdx < vqState.pool.length;
  }

  // Returns {current, total} for the resume pill, or null
  function getVerseQuizPosition() {
    if (!hasVerseQuizInProgress()) return null;
    return { current: vqState.currentIdx + 1, total: vqState.pool.length };
  }

  // Entry point — called from the mini-games hub.
  // If a session is mid-way, resume it instead of restarting.
  function openVerseQuiz() {
    if (hasVerseQuizInProgress()) {
      // Resume where the user left off
      if (typeof showScreen === 'function') showScreen('screen-verse-quiz');
      renderVerseQuizScreen();
      return;
    }
    startNewVerseQuiz();
  }

  // Always begins a fresh shuffled session
  function startNewVerseQuiz() {
    vqState.currentIdx = 0;
    vqState.selectedTiles = [];
    vqState.answeredCorrectly = 0;
    vqState.totalXp = 0;
    vqState.pool = buildVerseQuizPool();
    if (typeof showScreen === 'function') showScreen('screen-verse-quiz');
    renderVerseQuizScreen();
  }

  // Builds the question pool ordered by difficulty: questions with more
  // blanks and more distractors come later, so the quiz gets harder as the
  // number climbs. Within each difficulty tier, order is shuffled for variety.
  function buildVerseQuizPool() {
    // Difficulty score = number of blanks (answers) weighted heavily,
    // plus distractor count as a tiebreaker.
    const scored = VERSE_QUIZ_DATA.map(q => ({
      q,
      difficulty: q.answers.length * 10 + q.distractors.length
    }));
    // Group by difficulty so we can shuffle within a tier but keep tiers ordered
    const tiers = {};
    scored.forEach(item => {
      const t = item.difficulty;
      if (!tiers[t]) tiers[t] = [];
      tiers[t].push(item.q);
    });
    const sortedKeys = Object.keys(tiers).map(Number).sort((a, b) => a - b);
    let pool = [];
    sortedKeys.forEach(k => {
      pool = pool.concat(shuffleArray(tiers[k]));
    });
    // Make sure the quiz doesn't OPEN with the same question two games running.
    let lastFirst = null;
    try { lastFirst = localStorage.getItem('scripture-scholar-vq-lastfirst'); } catch (e) {}
    if (pool.length > 1 && lastFirst !== null && pool[0] && pool[0].reference === lastFirst) {
      // find another question in the same easiest tier to lead with, if possible
      const sameTier = tiers[sortedKeys[0]];
      if (sameTier && sameTier.length > 1) {
        const alt = sameTier.find(q => q.reference !== lastFirst);
        if (alt) {
          const altIdx = pool.indexOf(alt);
          if (altIdx > 0) { [pool[0], pool[altIdx]] = [pool[altIdx], pool[0]]; }
        }
      }
    }
    try { if (pool[0]) localStorage.setItem('scripture-scholar-vq-lastfirst', pool[0].reference); } catch (e) {}
    return pool;
  }

  function renderVerseQuizScreen() {
    const container = document.getElementById('verseQuizContainer');
    if (!container) return;
    if (vqState.currentIdx >= vqState.pool.length) {
      renderVerseQuizComplete(container);
      return;
    }
    const q = vqState.pool[vqState.currentIdx];
    const promptHtml = renderPromptWithBlanks(q.prompt, vqState.selectedTiles);
    const tilesPool = shuffleArray(q.answers.concat(q.distractors));

    container.innerHTML = `
      <div class="vq-header">
        <div class="vq-progress-row">
          <span class="vq-progress-label">Question ${vqState.currentIdx + 1} of ${vqState.pool.length}</span>
          <span class="vq-progress-xp">⭐ ${vqState.totalXp} XP</span>
        </div>
        <div class="vq-progress-track">
          <div class="vq-progress-fill" style="width: ${((vqState.currentIdx) / vqState.pool.length) * 100}%"></div>
        </div>
      </div>

      <div class="vq-instructions">Tap the word cards in order to fill the blanks</div>

      <div class="vq-prompt serif" id="vqPrompt">${promptHtml}</div>

      <div class="vq-ref">— ${q.reference}</div>

      <div class="vq-tiles" id="vqTiles">
        ${tilesPool.map((word, i) => {
          const used = vqState.selectedTiles.includes(word) && countInArray(vqState.selectedTiles, word) > countInArray(tilesPool.slice(0, i), word);
          return `<button class="vq-tile${used ? ' used' : ''}" onclick="onVqTileTap('${escapeAttr(word)}', this)">${word}</button>`;
        }).join('')}
      </div>

      <div class="vq-actions">
        <button class="btn btn-ghost" onclick="onVqUndo()" ${vqState.selectedTiles.length === 0 ? 'disabled' : ''}>↶ Undo</button>
        <button class="btn btn-gold" id="vqCheckBtn" onclick="onVqCheck()" data-no-tap-sound ${vqState.selectedTiles.length < q.answers.length ? 'disabled' : ''}>Check</button>
      </div>
    `;
  }

  function countInArray(arr, val) {
    return arr.reduce((c, x) => c + (x === val ? 1 : 0), 0);
  }

  function escapeAttr(s) { return s.replace(/'/g, "\\'").replace(/"/g, '&quot;'); }

  // Renders the prompt with blanks filled in by the user's selected tiles
  function renderPromptWithBlanks(prompt, selected) {
    let i = 0;
    return prompt.replace(/___/g, () => {
      const filled = selected[i];
      i++;
      if (filled) return `<span class="vq-blank vq-blank-filled">${filled}</span>`;
      return `<span class="vq-blank vq-blank-empty">_____</span>`;
    });
  }

  function onVqTileTap(word, btn) {
    const q = vqState.pool[vqState.currentIdx];
    if (vqState.selectedTiles.length >= q.answers.length) return;
    vqState.selectedTiles.push(word);
    renderVerseQuizScreen();
  }

  function onVqUndo() {
    vqState.selectedTiles.pop();
    renderVerseQuizScreen();
  }

  function onVqCheck() {
    const q = vqState.pool[vqState.currentIdx];
    // Case-insensitive comparison
    const isCorrect = q.answers.every((ans, i) =>
      (vqState.selectedTiles[i] || '').toLowerCase().trim() === ans.toLowerCase().trim()
    );
    // Correct answers earn XP scaled by difficulty, with a hard floor of 10.
    let xpReward = 0;
    if (isCorrect) {
      const base = q.answers.length <= 1 ? 10 : (q.answers.length === 2 ? 25 : 40);
      xpReward = Math.max(10, Math.min(base, 50));
    }
    let levelResult = null;
    if (isCorrect) {
      vqState.answeredCorrectly++;
      vqState.totalXp += xpReward;
      // awardXp handles XP, level-up detection, hints, topbar, save, AND the
      // celebration overlay — so mini-game level-ups feel identical to lessons.
      if (typeof awardXp === 'function') {
        levelResult = awardXp(xpReward);
      } else {
        state.xp += xpReward;
        if (typeof saveState === 'function') saveState();
        if (typeof updateTopbar === 'function') updateTopbar();
      }
      if (typeof playSfx === 'function') playSfx('correct');
    } else {
      if (typeof playSfx === 'function') playSfx('wrong');
    }
    // If a level-up overlay is showing, delay the result card slightly so they
    // don't stack. The overlay sits on top regardless (higher z-index).
    showVqResult(isCorrect, q, xpReward);
  }

  function showVqResult(isCorrect, q, xpReward) {
    const container = document.getElementById('verseQuizContainer');
    if (!container) return;
    const correctText = q.answers.join(' / ');
    container.innerHTML = `
      <div class="vq-header">
        <div class="vq-progress-row">
          <span class="vq-progress-label">Question ${vqState.currentIdx + 1} of ${vqState.pool.length}</span>
          <span class="vq-progress-xp">⭐ ${vqState.totalXp} XP</span>
        </div>
      </div>

      <div class="vq-result vq-result-${isCorrect ? 'correct' : 'wrong'}">
        <div class="vq-result-icon">${isCorrect ? '✓' : '✗'}</div>
        <div class="vq-result-title serif">${isCorrect ? 'Well done!' : 'Not quite'}</div>
        ${isCorrect ? `<div class="vq-result-xp">+${xpReward} XP</div>` : `<div class="vq-result-correct"><span class="vq-result-correct-label">Correct answer:</span> <strong>${correctText}</strong></div>`}
        <div class="vq-result-ref">— ${q.reference}</div>
      </div>

      <div class="vq-actions vq-actions-stack">
        <button class="btn btn-gold" onclick="onVqContinue()">${vqState.currentIdx + 1 >= vqState.pool.length ? 'Finish →' : 'Continue to next →'}</button>
        <button class="btn btn-ghost" onclick="onVqStop()">Stop and return home</button>
      </div>
    `;
  }

  function onVqContinue() {
    vqState.currentIdx++;
    vqState.selectedTiles = [];
    renderVerseQuizScreen();
  }

  function onVqStop() {
    // User chose to stop — clear the session so next visit starts fresh
    vqState.pool = [];
    vqState.currentIdx = 0;
    if (typeof goHome === 'function') goHome();
  }

  function renderVerseQuizComplete(container) {
    container.innerHTML = `
      <div class="vq-complete">
        <div class="vq-complete-icon">🏆</div>
        <h2 class="vq-complete-title serif">Quiz Complete!</h2>
        <p class="vq-complete-sub">You answered <strong>${vqState.answeredCorrectly} of ${vqState.pool.length}</strong> verses correctly.</p>
        <div class="vq-complete-xp">+${vqState.totalXp} XP earned</div>
        <div class="vq-actions vq-actions-stack">
          <button class="btn btn-gold" onclick="startNewVerseQuiz()">Play Again</button>
          <button class="btn btn-ghost" onclick="goHome()">Back to Home</button>
        </div>
      </div>
    `;
    // Clear the finished session so it won't try to "resume" a completed run
    vqState.pool = [];
    vqState.currentIdx = 0;
  }
