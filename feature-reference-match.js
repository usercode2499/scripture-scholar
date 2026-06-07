// ============================================================
// Scripture Scholar — Reference Match (mini-game)
// ============================================================
// Match a well-known doctrinal statement or scripture phrase to its
// correct reference. Builds scripture-navigation skill. Played one
// question at a time with a select-then-submit flow and a
// Continue/Stop choice between questions (like Fact Game & Verse Quiz).
//
// All references are drawn from the Book of Mormon and were verified
// against official sources (they mirror the verified verse_location
// trivia bank). +10 XP per correct answer (min 10 floor).
//
// Exports (global):
//   REFERENCE_MATCH_DATA        — array of questions
//   openReferenceMatch()        — entry point
//   hasReferenceMatchInProgress()
//   getReferenceMatchPosition() — {current, total}
//   startNewReferenceMatch()
// ============================================================

  const REFERENCE_MATCH_DATA = [
    { statement: 'Nephi pledges to "go and do the things which the Lord hath commanded."', options: ['1 Nephi 3:7', 'Mosiah 2:17', 'Alma 32:21', 'Moroni 10:4'], correct: 0, note: 'Nephi\u2019s famous pledge of obedience.' },
    { statement: '"Adam fell that men might be; and men are, that they might have joy."', options: ['2 Nephi 2:25', '1 Nephi 1:1', 'Alma 41:10', 'Ether 12:27'], correct: 0, note: 'Lehi teaching Jacob about the purpose of mortality.' },
    { statement: 'When in the service of others, "ye are only in the service of your God."', options: ['Mosiah 2:17', 'Alma 37:6', 'Helaman 5:12', '3 Nephi 11:10'], correct: 0, note: 'King Benjamin\u2019s address.' },
    { statement: '"By small and simple things are great things brought to pass."', options: ['Alma 37:6', '1 Nephi 3:7', 'Mosiah 4:11', 'Ether 12:27'], correct: 0, note: 'Alma to his son Helaman.' },
    { statement: '"Charity is the pure love of Christ, and it endureth forever."', options: ['Moroni 7:47', 'Alma 7:11', '2 Nephi 31:20', 'Mosiah 4:11'], correct: 0, note: 'Mormon\u2019s sermon on charity.' },
    { statement: '"I, Nephi, having been born of goodly parents..."', options: ['1 Nephi 1:1', '2 Nephi 1:1', 'Mosiah 1:1', 'Alma 1:1'], correct: 0, note: 'The opening verse of the Book of Mormon.' },
    { statement: 'Moroni invites us to "ask God, the Eternal Father, in the name of Christ, if these things are not true."', options: ['Moroni 10:4', 'Moroni 7:47', 'Ether 12:6', '2 Nephi 33:1'], correct: 0, note: 'Moroni\u2019s promise.' },
    { statement: '"By the power of the Holy Ghost ye may know the truth of all things."', options: ['Moroni 10:5', 'Moroni 10:4', '1 Nephi 10:19', 'Alma 5:46'], correct: 0, note: 'The companion to Moroni\u2019s promise.' },
    { statement: '"Wickedness never was happiness."', options: ['Alma 41:10', 'Alma 5:10', 'Mosiah 2:41', 'Helaman 13:38'], correct: 0, note: 'Alma counseling his son Corianton.' },
    { statement: '"The natural man is an enemy to God..."', options: ['Mosiah 3:19', 'Mosiah 2:17', 'Alma 41:10', '2 Nephi 2:25'], correct: 0, note: 'From King Benjamin\u2019s address, quoting an angel.' },
    { statement: '"I give unto men weakness... then will I make weak things become strong unto them."', options: ['Ether 12:27', 'Ether 12:6', 'Alma 32:21', 'Moroni 7:33'], correct: 0, note: 'The Lord speaking to Moroni.' },
    { statement: '"Ye receive no witness until after the trial of your faith."', options: ['Ether 12:6', 'Alma 32:21', 'Moroni 7:26', 'Mosiah 3:19'], correct: 0, note: 'Moroni teaching that faith is tested before its reward.' },
    { statement: '"If ye have faith ye hope for things which are not seen, which are true."', options: ['Alma 32:21', 'Ether 12:6', 'Moroni 7:47', '2 Nephi 31:20'], correct: 0, note: 'Alma\u2019s sermon on faith to the Zoramites.' },
    { statement: 'We must build our foundation "upon the rock of our Redeemer."', options: ['Helaman 5:12', 'Mosiah 2:17', 'Alma 37:6', '3 Nephi 11:39'], correct: 0, note: 'Helaman\u2019s counsel to his sons.' },
    { statement: '"Press forward with a steadfastness in Christ, having a perfect brightness of hope."', options: ['2 Nephi 31:20', 'Moroni 7:47', 'Alma 32:21', 'Mosiah 4:11'], correct: 0, note: 'Nephi on the doctrine of Christ.' },
    { statement: 'Christ "will take upon him the pains and the sicknesses of his people."', options: ['Alma 7:11', 'Mosiah 3:19', '2 Nephi 9:21', 'Moroni 8:8'], correct: 0, note: 'Alma prophesying of the Atonement at Gideon.' },
    { statement: '"Learn in thy youth to keep the commandments of God."', options: ['Alma 37:35', 'Alma 37:6', 'Mosiah 4:15', 'Helaman 5:12'], correct: 0, note: 'Alma\u2019s counsel to his son Helaman.' },
    { statement: '"Behold, I am Jesus Christ, whom the prophets testified shall come into the world."', options: ['3 Nephi 11:10', '3 Nephi 9:15', '1 Nephi 11:7', 'Mosiah 3:8'], correct: 0, note: 'The risen Christ introducing Himself to the Nephites.' },
    { statement: '"It is by grace that we are saved, after all we can do."', options: ['2 Nephi 25:23', 'Moroni 10:32', 'Alma 24:11', 'Mosiah 3:17'], correct: 0, note: 'Nephi teaching about grace.' },
    { statement: '"Come unto Christ, and be perfected in him, and deny yourselves of all ungodliness."', options: ['Moroni 10:32', 'Moroni 7:47', '3 Nephi 12:48', '2 Nephi 31:20'], correct: 0, note: 'Moroni\u2019s closing invitation.' },
    { statement: '"This life is the time for men to prepare to meet God."', options: ['Alma 34:32', 'Alma 5:28', '2 Nephi 9:27', 'Mosiah 3:19'], correct: 0, note: 'Amulek preaching to the Zoramites.' },
    { statement: '"There is no other name given whereby salvation cometh... take upon you the name of Christ."', options: ['Mosiah 5:8', 'Mosiah 3:17', '2 Nephi 25:23', 'Helaman 5:9'], correct: 0, note: 'King Benjamin\u2019s people covenanting.' }
  ];

  // ----- state -----
  const RM_STORAGE_KEY = 'scripture-scholar-refmatch';
  let rmState = null;

  function rmLoad() {
    try {
      const raw = localStorage.getItem(RM_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
  }
  function rmSave() {
    try { localStorage.setItem(RM_STORAGE_KEY, JSON.stringify(rmState)); } catch (e) {}
  }
  function rmClear() {
    rmState = null;
    try { localStorage.removeItem(RM_STORAGE_KEY); } catch (e) {}
  }

  function hasReferenceMatchInProgress() {
    const s = rmLoad();
    return !!(s && s.order && s.idx < s.order.length);
  }
  function getReferenceMatchPosition() {
    const s = rmLoad();
    if (!s || !s.order) return null;
    return { current: Math.min(s.idx + 1, s.order.length), total: s.order.length };
  }

  function rmShuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Shuffles the question order but ensures the game doesn't OPEN with the same
  // question as last time (so consecutive games feel fresh from the very first card).
  function rmFreshOrder() {
    let lastFirst = null;
    try { lastFirst = localStorage.getItem('scripture-scholar-rm-lastfirst'); } catch (e) {}
    let order = rmShuffle(REFERENCE_MATCH_DATA.map((_, i) => i));
    // If more than one question exists and we'd repeat the opener, re-roll the front.
    if (REFERENCE_MATCH_DATA.length > 1 && lastFirst !== null && String(order[0]) === String(lastFirst)) {
      // swap the first item with a random later one
      const j = 1 + Math.floor(Math.random() * (order.length - 1));
      [order[0], order[j]] = [order[j], order[0]];
    }
    try { localStorage.setItem('scripture-scholar-rm-lastfirst', String(order[0])); } catch (e) {}
    return order;
  }

  function startNewReferenceMatch() {
    const order = rmFreshOrder();
    rmState = { order: order, idx: 0, correctCount: 0, selected: null, submitted: false, optOrder: null };
    rmSave();
    rmRenderQuestion();
  }

  function openReferenceMatch() {
    const existing = rmLoad();
    if (existing && existing.order && existing.idx < existing.order.length) {
      rmState = existing;
    } else {
      const order = rmFreshOrder();
      rmState = { order: order, idx: 0, correctCount: 0, selected: null, submitted: false, optOrder: null };
      rmSave();
    }
    if (typeof showScreen === 'function') showScreen('screen-reference-match');
    rmRenderQuestion();
  }

  function rmCurrentQuestion() {
    const qi = rmState.order[rmState.idx];
    return REFERENCE_MATCH_DATA[qi];
  }

  function rmRenderQuestion() {
    const c = document.getElementById('referenceMatchContainer');
    if (!c) return;
    if (rmState.idx >= rmState.order.length) { rmRenderComplete(); return; }

    const q = rmCurrentQuestion();
    // Shuffle the options once per question and remember the order so the
    // correct answer isn't always first.
    if (!rmState.optOrder) {
      rmState.optOrder = rmShuffle(q.options.map((_, i) => i));
      rmSave();
    }
    const total = rmState.order.length;
    const num = rmState.idx + 1;
    const progress = Math.round((rmState.idx / total) * 100);

    const optsHtml = rmState.optOrder.map(origIdx => {
      const isSel = rmState.selected === origIdx;
      const isCorrect = origIdx === q.correct;
      let cls = 'rm-option';
      if (rmState.submitted) {
        if (isCorrect) cls += ' correct';
        else if (isSel) cls += ' wrong';
        else cls += ' dim';
      } else if (isSel) {
        cls += ' selected';
      }
      const onclick = rmState.submitted ? '' : `onclick="rmSelect(${origIdx})"`;
      return `<button class="${cls}" ${onclick}>${q.options[origIdx]}</button>`;
    }).join('');

    c.innerHTML = `
      <div class="rm-progress-row">
        <span class="rm-qnum">Question ${num} of ${total}</span>
        <span class="rm-xp-hint">⭐ +10 XP</span>
      </div>
      <div class="rm-progress-bar"><div class="rm-progress-fill" style="width:${progress}%"></div></div>
      <div class="rm-prompt-label">Where is this found?</div>
      <div class="rm-statement serif">${q.statement}</div>
      <div class="rm-options">${optsHtml}</div>
      ${rmState.submitted ? rmResultHtml(q) : `
        <button class="btn btn-gold rm-submit" id="rmSubmitBtn" ${rmState.selected === null ? 'disabled' : ''} onclick="rmSubmit()">Submit Answer</button>
      `}
    `;
  }

  function rmResultHtml(q) {
    const correct = rmState.selected === q.correct;
    const last = rmState.idx >= rmState.order.length - 1;
    return `
      <div class="rm-result ${correct ? 'correct' : 'wrong'}">
        <div class="rm-result-head">${correct ? '✓ Correct!' : '✗ Not quite'}</div>
        <div class="rm-result-ref">Answer: <strong>${q.options[q.correct]}</strong></div>
        ${q.note ? `<div class="rm-result-note">${q.note}</div>` : ''}
      </div>
      <div class="rm-actions">
        <button class="btn btn-gold" onclick="rmNext()">${last ? 'See Results →' : 'Continue →'}</button>
        <button class="btn btn-ghost" onclick="rmStop()">Stop for now</button>
      </div>
    `;
  }

  function rmSelect(origIdx) {
    if (rmState.submitted) return;
    rmState.selected = origIdx;
    rmSave();
    const btn = document.getElementById('rmSubmitBtn');
    if (btn) btn.disabled = false;
    rmRenderQuestion();
  }

  function rmSubmit() {
    if (rmState.selected === null || rmState.submitted) return;
    const q = rmCurrentQuestion();
    const correct = rmState.selected === q.correct;
    rmState.submitted = true;
    if (correct) {
      rmState.correctCount++;
      if (typeof awardXp === 'function') awardXp(10);
      if (typeof playSfx === 'function') playSfx('correct');
    } else {
      if (typeof playSfx === 'function') playSfx('wrong');
    }
    rmSave();
    rmRenderQuestion();
  }

  function rmNext() {
    rmState.idx++;
    rmState.selected = null;
    rmState.submitted = false;
    rmState.optOrder = null;
    rmSave();
    if (rmState.idx >= rmState.order.length) {
      rmRenderComplete();
    } else {
      rmRenderQuestion();
    }
  }

  function rmStop() {
    rmSave();
    if (typeof openMiniGames === 'function') openMiniGames();
  }

  function rmRenderComplete() {
    const c = document.getElementById('referenceMatchContainer');
    if (!c) return;
    const total = rmState.order.length;
    const score = rmState.correctCount;
    const pct = Math.round((score / total) * 100);
    let msg = 'Well done!';
    if (pct === 100) msg = 'Perfect! You know your references! 🌟';
    else if (pct >= 80) msg = 'Excellent navigation skill!';
    else if (pct >= 50) msg = 'Good work — keep practicing!';
    else msg = 'Keep studying — you\u2019ll get there!';

    rmClear();

    c.innerHTML = `
      <div class="rm-complete">
        <div class="rm-complete-icon">🎯</div>
        <div class="rm-complete-title serif">Round Complete</div>
        <div class="rm-complete-score">${score} / ${total}</div>
        <div class="rm-complete-msg">${msg}</div>
        <button class="btn btn-gold" onclick="startNewReferenceMatch()">Play Again</button>
        <button class="btn btn-ghost" onclick="openMiniGames()">Back to Games</button>
      </div>
    `;
    if (pct >= 80 && typeof fireConfetti === 'function') fireConfetti();
  }
