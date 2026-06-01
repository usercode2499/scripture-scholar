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
