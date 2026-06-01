// ============================================================
// Scripture Scholar — Nav Icons (badge-art style)
// ============================================================
// SVG icons that match the level-badge aesthetic: a small gold
// medallion (radial-gradient plate, notched rim) with a clean
// white emblem in the center. Replaces the emoji nav icons.
//
//   navIcon(name, size)  →  SVG string
//   names: 'practice' | 'streak' | 'leaderboard' | 'settings' | 'hints'
// ============================================================

  const NAV_ICON_EMBLEMS = {
    // Game controller
    practice: '<rect x="30" y="40" width="40" height="22" rx="11" fill="none" stroke="#fff" stroke-width="4.2"/><line x1="42" y1="47" x2="42" y2="55" stroke="#fff" stroke-width="4" stroke-linecap="round"/><line x1="38" y1="51" x2="46" y2="51" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="59" cy="49" r="2.8" fill="#fff"/><circle cx="64" cy="54" r="2.8" fill="#fff"/>',
    // Flame
    streak: '<path d="M50 28 C45 39 36 42 36 54 C36 64 43 70 50 70 C57 70 64 64 64 54 C64 47 59 43 57 38 C56 45 52 47 52 47 C53 40 51 34 50 28 Z" fill="#fff"/>',
    // Trophy / leaderboard
    leaderboard: '<path d="M38 32 h24 v9 a12 12 0 0 1 -24 0 z" fill="#fff"/><path d="M38 35 h-6 a6 6 0 0 0 6 7 z M62 35 h6 a6 6 0 0 1 -6 7 z" fill="#fff"/><rect x="46.5" y="50" width="7" height="9" fill="#fff"/><rect x="40" y="59" width="20" height="6" rx="2" fill="#fff"/>',
    // Gear
    settings: '<g fill="#fff"><circle cx="50" cy="50" r="7" fill="none" stroke="#fff" stroke-width="4"/>' +
      [0,45,90,135,180,225,270,315].map(function(a){var r=a*Math.PI/180;var x=50+Math.cos(r)*14;var y=50+Math.sin(r)*14;return '<rect x="'+(x-2.6).toFixed(1)+'" y="'+(y-2.6).toFixed(1)+'" width="5.2" height="5.2" rx="1.5"/>';}).join('') + '</g>',
    // Lightbulb (hints)
    hints: '<path d="M50 30 a13 13 0 0 1 8 23 c-2 2 -3.5 3.5 -3.5 6.5 h-9 c0 -3 -1.5 -4.5 -3.5 -6.5 a13 13 0 0 1 8 -23 z" fill="#fff"/><rect x="44" y="62" width="12" height="4" rx="2" fill="#fff"/><rect x="46" y="67" width="8" height="3.5" rx="1.7" fill="#fff"/>'
  };

  function navIcon(name, size) {
    size = size || 24;
    const emblem = NAV_ICON_EMBLEMS[name] || NAV_ICON_EMBLEMS.settings;
    const uid = 'nav_' + name + '_' + Math.floor(Math.random() * 100000);
    return `
      <svg class="nav-icon-svg" viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name}">
        <defs>
          <radialGradient id="${uid}_p" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stop-color="#f7e3a8"/>
            <stop offset="55%" stop-color="#e0b552"/>
            <stop offset="100%" stop-color="#b8862c"/>
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="47" fill="#9a6f24"/>
        <g fill="#f7e3a8" opacity="0.55">
          ${Array.from({length: 10}).map((_, i) => {
            const a = (i / 10) * Math.PI * 2;
            const x = 50 + Math.cos(a) * 44;
            const y = 50 + Math.sin(a) * 44;
            return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.4"/>`;
          }).join('')}
        </g>
        <circle cx="50" cy="50" r="42" fill="url(#${uid}_p)" stroke="#9a6f24" stroke-width="1.5"/>
        <circle cx="50" cy="50" r="36" fill="none" stroke="#f7e3a8" stroke-width="1" opacity="0.45"/>
        ${emblem}
      </svg>`;
  }

  // Inject icons into the navbar (called on init after DOM is ready).
  function applyNavIcons() {
    const map = [
      { id: 'navIconPractice', name: 'practice' },
      { id: 'navIconStreak', name: 'streak' },
      { id: 'navIconLeaderboard', name: 'leaderboard' },
      { id: 'navIconSettings', name: 'settings' }
    ];
    map.forEach(m => {
      const el = document.getElementById(m.id);
      if (el) el.innerHTML = navIcon(m.name, 40);
    });
    // Hints icon in the profile/journey section
    const hintIcon = document.getElementById('journeyHintsIcon');
    if (hintIcon) hintIcon.innerHTML = navIcon('hints', 32);
  }

  // ============ RANK TROPHY ICONS ============
  // An art trophy with a rank number inside the cup. Colored by placement:
  //   1 = gold, 2 = silver, 3 = bronze, 4+ = neutral stone.
  // Used in the leaderboard and the multiplayer lobby/results.
  const RANK_TROPHY_COLORS = {
    gold:   { light: '#fce078', base: '#e0b552', dark: '#b8862c', rim: '#9a6f24', num: '#7a5414' },
    silver: { light: '#eef2f7', base: '#c2cad6', dark: '#94a0b0', rim: '#76828f', num: '#56606b' },
    bronze: { light: '#e8b98a', base: '#c08043', dark: '#8f5a28', rim: '#6f4720', num: '#5a3818' },
    stone:  { light: '#e9e2d2', base: '#cbbfa6', dark: '#a89a7d', rim: '#8a7c62', num: '#6a5e48' }
  };

  function rankTier(rank) {
    if (rank === 1) return 'gold';
    if (rank === 2) return 'silver';
    if (rank === 3) return 'bronze';
    return 'stone';
  }

  // rank: 1-based placement. size: px. Returns an SVG trophy with the number inside.
  function rankTrophy(rank, size) {
    size = size || 34;
    const tier = rankTier(rank);
    const c = RANK_TROPHY_COLORS[tier];
    const uid = 'trophy_' + rank + '_' + Math.floor(Math.random() * 100000);
    const num = String(rank);
    // Smaller font for 2-digit numbers
    const fontSize = num.length > 1 ? 20 : 26;

    return `
      <svg class="rank-trophy rank-trophy-${tier}" viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rank ${rank}">
        <defs>
          <linearGradient id="${uid}_cup" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${c.light}"/>
            <stop offset="55%" stop-color="${c.base}"/>
            <stop offset="100%" stop-color="${c.dark}"/>
          </linearGradient>
        </defs>
        <!-- Handles -->
        <path d="M28 30 Q14 30 16 44 Q18 54 32 52" fill="none" stroke="${c.dark}" stroke-width="5" stroke-linecap="round"/>
        <path d="M72 30 Q86 30 84 44 Q82 54 68 52" fill="none" stroke="${c.dark}" stroke-width="5" stroke-linecap="round"/>
        <!-- Cup bowl -->
        <path d="M28 26 L72 26 L70 46 Q66 62 50 64 Q34 62 30 46 Z" fill="url(#${uid}_cup)" stroke="${c.rim}" stroke-width="2" stroke-linejoin="round"/>
        <!-- Stem + base -->
        <rect x="46" y="64" width="8" height="10" fill="${c.base}"/>
        <path d="M38 74 L62 74 L64 80 L36 80 Z" fill="${c.dark}"/>
        <rect x="32" y="80" width="36" height="5" rx="2" fill="${c.rim}"/>
        <!-- Rank number inside the cup -->
        <text x="50" y="49" font-size="${fontSize}" fill="${c.num}" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-weight="700">${num}</text>
      </svg>`;
  }
