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
    practice: '<rect x="32" y="42" width="36" height="20" rx="10" fill="none" stroke="#fff" stroke-width="3.4"/><line x1="42" y1="48" x2="42" y2="56" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/><line x1="38" y1="52" x2="46" y2="52" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/><circle cx="59" cy="50" r="2.4" fill="#fff"/><circle cx="64" cy="55" r="2.4" fill="#fff"/>',
    // Flame
    streak: '<path d="M50 30 C46 40 38 42 38 53 C38 62 44 68 50 68 C56 68 62 62 62 53 C62 47 58 44 56 40 C55 46 52 47 52 47 C53 41 51 35 50 30 Z" fill="#fff"/>',
    // Trophy / leaderboard
    leaderboard: '<path d="M40 34 h20 v8 a10 10 0 0 1 -20 0 z" fill="#fff"/><path d="M40 36 h-5 a5 5 0 0 0 5 6 z M60 36 h5 a5 5 0 0 1 -5 6 z" fill="#fff"/><rect x="47" y="50" width="6" height="8" fill="#fff"/><rect x="42" y="58" width="16" height="5" rx="1.5" fill="#fff"/>',
    // Gear
    settings: '<g fill="#fff"><circle cx="50" cy="50" r="6" fill="none" stroke="#fff" stroke-width="3.2"/>' +
      [0,45,90,135,180,225,270,315].map(function(a){var r=a*Math.PI/180;var x=50+Math.cos(r)*13;var y=50+Math.sin(r)*13;return '<rect x="'+(x-2).toFixed(1)+'" y="'+(y-2).toFixed(1)+'" width="4" height="4" rx="1"/>';}).join('') + '</g>',
    // Lightbulb (hints)
    hints: '<path d="M50 32 a12 12 0 0 1 7 21 c-2 2 -3 3 -3 6 h-8 c0 -3 -1 -4 -3 -6 a12 12 0 0 1 7 -21 z" fill="#fff"/><rect x="45" y="62" width="10" height="3.5" rx="1.6" fill="#fff"/><rect x="46.5" y="66.5" width="7" height="3" rx="1.5" fill="#fff"/>'
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
      if (el) el.innerHTML = navIcon(m.name, 26);
    });
    // Hints icon in the profile/journey section
    const hintIcon = document.getElementById('journeyHintsIcon');
    if (hintIcon) hintIcon.innerHTML = navIcon('hints', 28);
  }
