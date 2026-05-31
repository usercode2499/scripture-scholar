// ============================================================
// Scripture Scholar — Fact Game (mini-game)
// ============================================================
// Quick-fire multiple-choice trivia about Book of Mormon people,
// places, numbers, and events. Playable anytime, one question at a
// time with a Continue/Stop choice between each (like Verse Quiz).
//
// All facts are drawn from the Book of Mormon text. XP scales:
// +10 XP per correct answer.
//
// Exports (global):
//   FACT_GAME_DATA            — array of questions
//   openFactGame()            — entry point
//   hasFactGameInProgress()   — resume support
//   getFactGamePosition()     — {current, total} for resume pill
//   startNewFactGame()
// ============================================================

  const FACT_GAME_DATA = [
    {
      q: 'How many sons of Mosiah went on missions to the Lamanites?',
      options: ['Two', 'Four', 'Six', 'Twelve'],
      correct: 1,
      ref: 'Mosiah 27:34',
      note: 'Ammon, Aaron, Omner, and Himni — the four sons of Mosiah — became great missionaries to the Lamanites.'
    },
    {
      q: 'What was the name of the man who helped Alma the Younger when he was preaching in Ammonihah?',
      options: ['Amulek', 'Amlici', 'Antionah', 'Zeezrom'],
      correct: 0,
      ref: 'Alma 8:21',
      note: 'Amulek took Alma into his home and became his missionary companion in the wicked city of Ammonihah.'
    },
    {
      q: 'How many stripling warriors did Helaman lead?',
      options: ['1,000', '2,000 (later 2,060)', '5,000', '10,000'],
      correct: 1,
      ref: 'Alma 53:22; 57:6',
      note: 'Helaman led 2,000 young men (later joined by 60 more). Not one of them was killed, because of their great faith.'
    },
    {
      q: 'Who was the prophet that king Noah had put to death by fire?',
      options: ['Alma', 'Abinadi', 'Amulon', 'Gideon'],
      correct: 1,
      ref: 'Mosiah 17:20',
      note: 'Abinadi sealed his testimony with his life, suffering death by fire — but his words converted Alma.'
    },
    {
      q: 'What did Lehi see in his dream that represented the love of God?',
      options: ['A great river', 'The tree of life', 'An iron rod', 'A spacious building'],
      correct: 1,
      ref: '1 Nephi 11:21–22',
      note: 'The tree with white fruit represented the love of God, "most desirable above all things."'
    },
    {
      q: 'What guided Lehi\'s family through the wilderness?',
      options: ['A pillar of fire', 'The Liahona', 'A star', 'An angel'],
      correct: 1,
      ref: '1 Nephi 16:10',
      note: 'The Liahona was a round brass ball with spindles that pointed the way — but only worked by faith and diligence.'
    },
    {
      q: 'Who buried the records and weapons before the people of Ammon made their covenant of peace?',
      options: ['The Nephites', 'The Anti-Nephi-Lehies', 'The Lamanite kings', 'The sons of Mosiah'],
      correct: 1,
      ref: 'Alma 24:17',
      note: 'The Anti-Nephi-Lehies buried their weapons of war as a covenant never to shed blood again.'
    },
    {
      q: 'How many days of darkness covered the land after the Savior\'s crucifixion?',
      options: ['One day', 'Three days', 'Seven days', 'Forty days'],
      correct: 1,
      ref: '3 Nephi 8:23',
      note: 'Three days of thick darkness covered the land before the resurrected Christ appeared to the Nephites.'
    },
    {
      q: 'What was the name of the land where Lehi\'s family first arrived in the promised land?',
      options: ['Bountiful', 'The land of first inheritance', 'Zarahemla', 'The land of Nephi'],
      correct: 1,
      ref: 'Alma 22:28',
      note: 'They landed on the west seashore in what became called the land of first inheritance.'
    },
    {
      q: 'Who was the first Nephite chief judge?',
      options: ['Mosiah', 'Alma the Younger', 'Nephihah', 'Pahoran'],
      correct: 1,
      ref: 'Mosiah 29:42',
      note: 'When King Mosiah ended the reign of kings, Alma the Younger was appointed the first chief judge.'
    },
    {
      q: 'What did Nephi build at the Lord\'s command in Bountiful?',
      options: ['A temple', 'A ship', 'A tower', 'A city'],
      correct: 1,
      ref: '1 Nephi 17:8',
      note: 'The Lord commanded Nephi to build a ship to carry his family across the great waters to the promised land.'
    },
    {
      q: 'How many plates make up the records Joseph Smith translated?',
      options: ['Brass plates only', 'The gold plates', 'Silver plates', 'Stone tablets'],
      correct: 1,
      ref: 'Title Page',
      note: 'The Book of Mormon was translated from the gold plates, an abridgment by Mormon of many records.'
    },
    {
      q: 'Who was the brother of Jared\'s record-keeper that saw the finger of the Lord?',
      options: ['Jared', 'The brother of Jared (Mahonri)', 'Ether', 'Coriantumr'],
      correct: 1,
      ref: 'Ether 3:6',
      note: 'The brother of Jared saw the Lord\'s finger touch sixteen stones, then beheld the Lord Himself because of his great faith.'
    },
    {
      q: 'What sign did Samuel the Lamanite prophesy would mark the Savior\'s birth?',
      options: ['An earthquake', 'A day, a night, and a day with no darkness', 'A new star only', 'A great storm'],
      correct: 1,
      ref: 'Helaman 14:3–4',
      note: 'Samuel prophesied a day and a night and a day as if it were one day without darkness, plus a new star.'
    },
    {
      q: 'How many disciples did Jesus choose among the Nephites?',
      options: ['Three', 'Twelve', 'Seventy', 'Forty'],
      correct: 1,
      ref: '3 Nephi 12:1',
      note: 'Jesus chose twelve disciples to lead His church among the Nephites, similar to His twelve apostles in Jerusalem.'
    },
    {
      q: 'Who was the last Nephite prophet, who buried the plates?',
      options: ['Mormon', 'Moroni', 'Ether', 'Nephi'],
      correct: 1,
      ref: 'Moroni 10:1–2',
      note: 'Moroni, son of Mormon, finished the record and buried the plates — later delivering them to Joseph Smith.'
    },
    {
      q: 'What did Korihor claim that made him an "anti-Christ"?',
      options: ['That there would be no Christ', 'That he was the Messiah', 'That the law was fulfilled', 'That riches were evil'],
      correct: 0,
      ref: 'Alma 30:12',
      note: 'Korihor taught there would be no Christ and no atonement — denying prophecy. He was later struck dumb.'
    },
    {
      q: 'Which Nephite leader raised the "title of liberty"?',
      options: ['Captain Moroni', 'Helaman', 'Teancum', 'Pahoran'],
      correct: 0,
      ref: 'Alma 46:12–13',
      note: 'Captain Moroni tore his coat and wrote on it "In memory of our God, our religion, and freedom..." raising it as a standard.'
    },
    {
      q: 'How old was Mormon when he was first visited by the Lord?',
      options: ['Ten', 'Fifteen', 'Twenty', 'Twenty-five'],
      correct: 1,
      ref: 'Mormon 1:15',
      note: 'Mormon was fifteen years old when he was visited of the Lord and tasted of His goodness.'
    },
    {
      q: 'What did the people of King Benjamin pitch toward the temple to hear his address?',
      options: ['Their banners', 'Their tents', 'Their offerings', 'Their flags'],
      correct: 1,
      ref: 'Mosiah 2:6',
      note: 'The people pitched their tents with the doors toward the temple so they could hear King Benjamin\'s words.'
    }
  ];

  const fgState = {
    currentIdx: 0,
    pool: [],
    answered: false,
    correctCount: 0,
    totalXp: 0
  };

  function fgShuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function hasFactGameInProgress() {
    return fgState.pool.length > 0 && fgState.currentIdx < fgState.pool.length;
  }

  function getFactGamePosition() {
    if (!hasFactGameInProgress()) return null;
    return { current: fgState.currentIdx + 1, total: fgState.pool.length };
  }

  function openFactGame() {
    if (hasFactGameInProgress()) {
      if (typeof showScreen === 'function') showScreen('screen-fact-game');
      renderFactGameScreen();
      return;
    }
    startNewFactGame();
  }

  function startNewFactGame() {
    fgState.currentIdx = 0;
    fgState.answered = false;
    fgState.correctCount = 0;
    fgState.totalXp = 0;
    // Shuffle question order; keep each question's options in place but shuffle them too
    fgState.pool = fgShuffle(FACT_GAME_DATA).map(item => {
      const opts = item.options.map((text, i) => ({ text, isCorrect: i === item.correct }));
      const shuffledOpts = fgShuffle(opts);
      return {
        q: item.q,
        ref: item.ref,
        note: item.note,
        options: shuffledOpts.map(o => o.text),
        correct: shuffledOpts.findIndex(o => o.isCorrect)
      };
    });
    if (typeof showScreen === 'function') showScreen('screen-fact-game');
    renderFactGameScreen();
  }

  function renderFactGameScreen() {
    const container = document.getElementById('factGameContainer');
    if (!container) return;
    if (fgState.currentIdx >= fgState.pool.length) {
      renderFactGameComplete(container);
      return;
    }
    const item = fgState.pool[fgState.currentIdx];
    fgState.answered = false;
    fgState.selectedIdx = null;
    container.innerHTML = `
      <div class="fg-header">
        <div class="fg-progress-row">
          <span class="fg-progress-label">Question ${fgState.currentIdx + 1} of ${fgState.pool.length}</span>
          <span class="fg-progress-xp">⭐ ${fgState.totalXp} XP</span>
        </div>
        <div class="fg-progress-track">
          <div class="fg-progress-fill" style="width: ${(fgState.currentIdx / fgState.pool.length) * 100}%"></div>
        </div>
      </div>
      <div class="fg-question serif">${item.q}</div>
      <div class="fg-options" id="fgOptions">
        ${item.options.map((opt, i) => `
          <button class="fg-option" onclick="onFgSelect(${i})">${opt}</button>
        `).join('')}
      </div>
      <button class="btn btn-gold fg-submit-btn" id="fgSubmitBtn" onclick="onFgSubmit()" data-no-tap-sound disabled>Submit Answer</button>
    `;
  }

  // Step 1: highlight the chosen option (does not grade yet)
  function onFgSelect(choiceIdx) {
    if (fgState.answered) return;
    fgState.selectedIdx = choiceIdx;
    const optionEls = document.querySelectorAll('#fgOptions .fg-option');
    optionEls.forEach((el, i) => {
      el.classList.toggle('selected', i === choiceIdx);
    });
    const submitBtn = document.getElementById('fgSubmitBtn');
    if (submitBtn) submitBtn.disabled = false;
    if (typeof playTapSfx === 'function') playTapSfx();
  }

  // Step 2: grade the selected answer
  function onFgSubmit() {
    if (fgState.answered || fgState.selectedIdx === null) return;
    onFgAnswer(fgState.selectedIdx);
  }

  function onFgAnswer(choiceIdx) {
    if (fgState.answered) return;
    fgState.answered = true;
    const item = fgState.pool[fgState.currentIdx];
    const isCorrect = choiceIdx === item.correct;
    const xpReward = isCorrect ? 10 : 0;

    // Mark buttons + hide the submit button
    const optionEls = document.querySelectorAll('#fgOptions .fg-option');
    optionEls.forEach((el, i) => {
      el.disabled = true;
      el.classList.remove('selected');
      if (i === item.correct) el.classList.add('correct');
      else if (i === choiceIdx) el.classList.add('wrong');
    });
    const submitBtn = document.getElementById('fgSubmitBtn');
    if (submitBtn) submitBtn.style.display = 'none';

    if (isCorrect) {
      fgState.correctCount++;
      fgState.totalXp += xpReward;
      if (typeof awardXp === 'function') awardXp(xpReward);
      else { state.xp += xpReward; if (typeof saveState === 'function') saveState(); if (typeof updateTopbar === 'function') updateTopbar(); }
      if (typeof playSfx === 'function') playSfx('correct');
    } else {
      if (typeof playSfx === 'function') playSfx('wrong');
    }

    // Append explanation + continue/stop
    const container = document.getElementById('factGameContainer');
    const result = document.createElement('div');
    result.className = 'fg-result';
    result.innerHTML = `
      <div class="fg-result-banner fg-result-${isCorrect ? 'correct' : 'wrong'}">
        ${isCorrect ? `✓ Correct! +${xpReward} XP` : '✗ Not quite'}
      </div>
      <div class="fg-note">${item.note}</div>
      <div class="fg-ref">— ${item.ref}</div>
      <div class="fg-actions">
        <button class="btn btn-gold" onclick="onFgContinue()">${fgState.currentIdx + 1 >= fgState.pool.length ? 'Finish →' : 'Continue →'}</button>
        <button class="btn btn-ghost" onclick="onFgStop()">Stop and return home</button>
      </div>
    `;
    container.appendChild(result);
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function onFgContinue() {
    fgState.currentIdx++;
    renderFactGameScreen();
  }

  function onFgStop() {
    fgState.pool = [];
    fgState.currentIdx = 0;
    if (typeof goHome === 'function') goHome();
  }

  function renderFactGameComplete(container) {
    container.innerHTML = `
      <div class="fg-complete">
        <div class="fg-complete-icon">🧠</div>
        <h2 class="fg-complete-title serif">Fact Game Complete!</h2>
        <p class="fg-complete-sub">You answered <strong>${fgState.correctCount} of ${fgState.pool.length}</strong> facts correctly.</p>
        <div class="fg-complete-xp">+${fgState.totalXp} XP earned</div>
        <div class="fg-actions">
          <button class="btn btn-gold" onclick="startNewFactGame()">Play Again</button>
          <button class="btn btn-ghost" onclick="goHome()">Back to Home</button>
        </div>
      </div>
    `;
    fgState.pool = [];
    fgState.currentIdx = 0;
  }
