// ============================================================
// Scripture Scholar — Mini-Games Hub
// ============================================================
// Hub screen showing available and upcoming mini-games.
// Each game is its own card; when implemented, replace the
// comingSoon flag with an onclick handler that launches it.
//
// Exports (global):
//   MINI_GAMES        — game catalog
//   openMiniGames()   — show the mini-games screen
//   renderMiniGames() — populate the hub
// ============================================================

  const MINI_GAMES = [
    {
      id: 'verse_quiz',
      title: 'Daily Verse Quiz',
      description: 'One scripture-mastery question per day. Free XP for staying consistent.',
      icon: '📜',
      xpRange: '+5 XP',
      comingSoon: true
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
      comingSoon: true
    }
  ];

  function openMiniGames() {
    renderMiniGames();
    if (typeof showScreen === 'function') showScreen('screen-mini-games');
  }

  function renderMiniGames() {
    const grid = document.getElementById('miniGamesGrid');
    if (!grid) return;
    grid.innerHTML = MINI_GAMES.map(game => {
      const soon = game.comingSoon;
      return `
        <button class="minigame-card${soon ? ' coming-soon' : ''}" ${soon ? '' : `onclick="launchMiniGame('${game.id}')"`}>
          <div class="minigame-icon">${game.icon}</div>
          <div class="minigame-body">
            <div class="minigame-title serif">${game.title}</div>
            <div class="minigame-desc">${game.description}</div>
            <div class="minigame-meta">
              <span class="minigame-xp">${game.xpRange}</span>
              ${soon ? '<span class="minigame-soon-pill">Coming Soon</span>' : ''}
            </div>
          </div>
        </button>
      `;
    }).join('');
  }

  // Placeholder for when a real game is plugged in — currently nothing
  // is launchable because all games are comingSoon: true.
  function launchMiniGame(gameId) {
    if (typeof showToast === 'function') {
      showToast(`🎮 ${gameId} coming soon`);
    }
  }
