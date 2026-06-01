// ============================================================
// Scripture Scholar — Mini-Games Hub
// ============================================================
// Hub screen listing the practice mini-games. Games can be played
// any time — no daily limit. Each game lives in its own file.
//
// Exports (global):
//   MINI_GAMES        — game catalog
//   openMiniGames()   — open the hub
//   renderMiniGames() — populate the cards
//   launchMiniGame(id) — start a specific game
// ============================================================

  const MINI_GAMES = [
    {
      id: 'verse_quiz',
      title: 'Verse Quiz',
      description: 'Complete scripture passages by tapping word cards in the correct order. Play one at a time and continue at your own pace.',
      icon: '📜',
      xpRange: '+5 XP per correct answer',
      launch: 'openVerseQuiz'  // function name to call when started
    },
    {
      id: 'fact_game',
      title: 'Fact Game',
      description: 'Test your knowledge of Book of Mormon people, places, and events with quick trivia questions.',
      icon: '🧠',
      xpRange: '+10 XP per correct answer',
      launch: 'openFactGame'
    },
    {
      id: 'group_trivia',
      title: 'Group Trivia',
      description: 'Play live with friends, family, or your class — everyone answers the same questions and races up the leaderboard.',
      icon: '🎮',
      xpRange: 'Live multiplayer',
      launch: 'openMultiplayer',
      badge: 'NEW'
    },
    {
      id: 'speed_review',
      title: 'Speed Review',
      description: 'Type the missing word before time runs out. Quick rounds of verse fill-ins.',
      icon: '⚡',
      xpRange: '+2 XP per correct',
      comingSoon: true
    },
    {
      id: 'reference_match',
      title: 'Reference Match',
      description: 'Match doctrinal statements to their scripture references. Build navigation skill.',
      icon: '🎯',
      xpRange: '+3 XP per correct',
      launch: 'openReferenceMatch',
      badge: 'NEW'
    }
  ];

  function openMiniGames() {
    if (typeof renderDailyTasksCard === 'function') renderDailyTasksCard();
    renderMiniGames();
    if (typeof showScreen === 'function') showScreen('screen-mini-games');
  }

  function renderMiniGames() {
    const grid = document.getElementById('miniGamesGrid');
    if (!grid) return;
    grid.innerHTML = MINI_GAMES.map(game => {
      const soon = game.comingSoon;
      // Show a "Resume" hint if this game has an in-progress session
      let resumeTag = '';
      if (game.id === 'verse_quiz' && typeof hasVerseQuizInProgress === 'function' && hasVerseQuizInProgress()) {
        const pos = (typeof getVerseQuizPosition === 'function') ? getVerseQuizPosition() : null;
        resumeTag = pos
          ? `<span class="minigame-resume-pill">Resume · Q${pos.current}/${pos.total}</span>`
          : `<span class="minigame-resume-pill">Resume</span>`;
      }
      if (game.id === 'fact_game' && typeof hasFactGameInProgress === 'function' && hasFactGameInProgress()) {
        const pos = (typeof getFactGamePosition === 'function') ? getFactGamePosition() : null;
        resumeTag = pos
          ? `<span class="minigame-resume-pill">Resume · Q${pos.current}/${pos.total}</span>`
          : `<span class="minigame-resume-pill">Resume</span>`;
      }
      if (game.id === 'reference_match' && typeof hasReferenceMatchInProgress === 'function' && hasReferenceMatchInProgress()) {
        const pos = (typeof getReferenceMatchPosition === 'function') ? getReferenceMatchPosition() : null;
        resumeTag = pos
          ? `<span class="minigame-resume-pill">Resume · Q${pos.current}/${pos.total}</span>`
          : `<span class="minigame-resume-pill">Resume</span>`;
      }
      const newTag = game.badge === 'NEW' ? '<span class="minigame-new-pill">NEW</span>' : '';
      return `
        <button class="minigame-card${soon ? ' coming-soon' : ''}" onclick="launchMiniGame('${game.id}')">
          <div class="minigame-icon">${game.icon}</div>
          <div class="minigame-body">
            <div class="minigame-title serif">${game.title}${newTag}</div>
            <div class="minigame-desc">${game.description}</div>
            <div class="minigame-meta">
              <span class="minigame-xp">${game.xpRange}</span>
              ${soon ? '<span class="minigame-soon-pill">Coming Soon</span>' : ''}
              ${resumeTag}
            </div>
          </div>
        </button>
      `;
    }).join('');
  }

  function launchMiniGame(gameId) {
    const game = MINI_GAMES.find(g => g.id === gameId);
    if (!game) return;
    if (game.comingSoon) {
      if (typeof showToast === 'function') showToast(`🎮 ${game.title} — coming soon`);
      return;
    }
    if (game.launch && typeof window[game.launch] === 'function') {
      window[game.launch]();
    } else {
      if (typeof showToast === 'function') showToast(`Could not start ${game.title}`);
    }
  }
