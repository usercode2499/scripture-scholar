// ============================================================
// Scripture Scholar — Level Badges
// ============================================================
// 25 SVG badges, one per level. Each badge has:
//   - a tier (bronze 1-9, silver 10-19, gold 20-25) controlling the
//     background plate color + animation intensity
//   - a unique emblem (the symbol drawn on the plate)
//
// Effects by tier:
//   bronze → static (no animation)
//   silver → mild shimmer
//   gold   → full shine sweep + glow pulse
//
// SVG icons are placeholders meant to be upgraded to richer art later.
// The system (tiers, effects, level-up flow) stays the same when art
// is swapped — just replace the emblem SVG in BADGE_EMBLEMS.
//
// Exports (global):
//   getBadgeTier(level)   -> 'bronze'|'silver'|'gold'
//   getBadgeName(level)   -> string
//   renderBadgeSVG(level, size) -> SVG markup string
// ============================================================

  // Badge names per level. User-specified where given; rest are themed
  // placeholders that can be renamed anytime.
  const BADGE_NAMES = [
    'Basic Scroll',            // 1  (bronze)
    "Nephi's Wooden Bow",      // 2
    'Clay Oil Lamp',           // 3
    'Olive Branch',            // 4
    'Stone Altar',             // 5
    'Shepherd\u2019s Staff',   // 6
    'Wax Seal',                // 7
    'Reed Pen',                // 8
    'Woven Sandals',           // 9
    'Silver Cup',              // 10 (silver)
    'Bronze Compass',          // 11
    'Engraved Ring',           // 12
    'Oil Flask',               // 13
    'Bound Codex',             // 14
    'Temple Veil',             // 15
    'Crown of Olive',          // 16
    'Silver Trumpet',          // 17
    'Anointing Horn',          // 18
    'Pillar of Stone',         // 19
    'Brass Plates',            // 20 (gold)
    'Liahona',                 // 21
    'Sword of Laban',          // 22
    "Seer\u2019s Stone",       // 23
    'Gold Plates',             // 24
    'Sealed Plates'            // 25
  ];

  function getBadgeTier(level) {
    if (level >= 20) return 'gold';
    if (level >= 10) return 'silver';
    return 'bronze';
  }

  function getBadgeName(level) {
    return BADGE_NAMES[Math.min(Math.max(level, 1), BADGE_NAMES.length) - 1];
  }

  // Tier color palettes for the plate background
  const TIER_COLORS = {
    bronze: { base: '#b87333', light: '#e8a866', dark: '#7a4a1e', rim: '#5c3614', emblem: '#fdf0dc' },
    silver: { base: '#a8b0bd', light: '#e2e8f0', dark: '#6b7280', rim: '#4b5563', emblem: '#ffffff' },
    gold:   { base: '#d4a32c', light: '#fce078', dark: '#9a7414', rim: '#6b5018', emblem: '#fff8e1' }
  };

  // Each emblem is an SVG <g> drawn centered in a 100x100 viewBox, roughly
  // within x/y 28-72. Uses currentColor (set to the tier's emblem color).
  // Kept simple/iconographic — placeholders for richer art later.
  const BADGE_EMBLEMS = {
    1: '<g><rect x="34" y="34" width="32" height="32" rx="3" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="34" cy="34" r="4" fill="currentColor"/><circle cx="66" cy="66" r="4" fill="currentColor"/><line x1="40" y1="44" x2="60" y2="44" stroke="currentColor" stroke-width="2.5"/><line x1="40" y1="52" x2="60" y2="52" stroke="currentColor" stroke-width="2.5"/></g>',
    2: '<g><path d="M 38,30 Q 64,50 38,70" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="38" y1="30" x2="38" y2="70" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/><polygon points="58,46 66,50 58,54" fill="currentColor"/></g>',
    3: '<g><ellipse cx="50" cy="56" rx="16" ry="9" fill="none" stroke="currentColor" stroke-width="3"/><path d="M 58,52 Q 68,48 64,40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M 64,40 Q 62,36 66,34" fill="currentColor" stroke="currentColor" stroke-width="2"/></g>',
    4: '<g><path d="M 50,68 Q 50,44 50,34" fill="none" stroke="currentColor" stroke-width="3"/><path d="M 50,46 Q 40,40 34,44 Q 42,48 50,48" fill="currentColor"/><path d="M 50,54 Q 60,48 66,52 Q 58,56 50,56" fill="currentColor"/><path d="M 50,40 Q 44,34 40,36 Q 46,40 50,42" fill="currentColor"/></g>',
    5: '<g><rect x="34" y="50" width="32" height="14" rx="2" fill="currentColor"/><rect x="38" y="42" width="24" height="10" rx="2" fill="currentColor" opacity="0.8"/><rect x="42" y="36" width="16" height="8" rx="2" fill="currentColor" opacity="0.6"/></g>',
    6: '<g><path d="M 44,32 Q 36,32 36,40 L 36,44" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="44" y1="32" x2="58" y2="70" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></g>',
    7: '<g><circle cx="50" cy="50" r="15" fill="currentColor"/><path d="M 50,42 L 53,50 L 50,58 L 47,50 Z" fill="#7a4a1e"/></g>',
    8: '<g><line x1="40" y1="64" x2="62" y2="38" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><path d="M 62,38 L 66,34 L 64,42 Z" fill="currentColor"/><line x1="38" y1="66" x2="44" y2="62" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></g>',
    9: '<g><path d="M 38,42 L 62,42 L 58,64 L 42,64 Z" fill="none" stroke="currentColor" stroke-width="3"/><line x1="44" y1="42" x2="44" y2="36" stroke="currentColor" stroke-width="2.5"/><line x1="56" y1="42" x2="56" y2="36" stroke="currentColor" stroke-width="2.5"/></g>',
    10: '<g><path d="M 40,40 L 60,40 L 56,58 Q 50,64 44,58 Z" fill="currentColor"/><line x1="50" y1="64" x2="50" y2="70" stroke="currentColor" stroke-width="3"/><line x1="42" y1="70" x2="58" y2="70" stroke="currentColor" stroke-width="3"/></g>',
    11: '<g><circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="3"/><polygon points="50,38 54,50 50,62 46,50" fill="currentColor"/><circle cx="50" cy="50" r="3" fill="currentColor"/></g>',
    12: '<g><circle cx="50" cy="50" r="13" fill="none" stroke="currentColor" stroke-width="3.5"/><rect x="46" y="30" width="8" height="10" rx="2" fill="currentColor"/></g>',
    13: '<g><path d="M 44,36 L 56,36 L 56,42 Q 64,48 64,58 Q 64,68 50,68 Q 36,68 36,58 Q 36,48 44,42 Z" fill="none" stroke="currentColor" stroke-width="3"/></g>',
    14: '<g><rect x="36" y="36" width="28" height="30" rx="2" fill="none" stroke="currentColor" stroke-width="3"/><line x1="50" y1="36" x2="50" y2="66" stroke="currentColor" stroke-width="2.5"/><line x1="42" y1="44" x2="46" y2="44" stroke="currentColor" stroke-width="2"/><line x1="54" y1="44" x2="58" y2="44" stroke="currentColor" stroke-width="2"/></g>',
    15: '<g><path d="M 36,34 L 64,34 L 64,40 Q 50,46 36,40 Z" fill="currentColor"/><path d="M 38,40 Q 50,46 62,40 L 60,68 L 40,68 Z" fill="none" stroke="currentColor" stroke-width="3"/></g>',
    16: '<g><path d="M 34,58 L 38,42 L 46,52 L 50,36 L 54,52 L 62,42 L 66,58 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><circle cx="50" cy="36" r="2.5" fill="currentColor"/></g>',
    17: '<g><path d="M 34,46 L 56,40 L 56,60 L 34,54 Z" fill="currentColor"/><rect x="56" y="44" width="12" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="3"/></g>',
    18: '<g><path d="M 38,40 Q 60,40 64,60 Q 50,58 42,66 Q 40,52 38,40 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></g>',
    19: '<g><rect x="42" y="34" width="16" height="32" fill="none" stroke="currentColor" stroke-width="3"/><rect x="38" y="30" width="24" height="6" fill="currentColor"/><rect x="38" y="66" width="24" height="6" fill="currentColor"/></g>',
    20: '<g><rect x="36" y="34" width="13" height="34" rx="2" fill="currentColor"/><rect x="51" y="34" width="13" height="34" rx="2" fill="currentColor" opacity="0.85"/><line x1="42" y1="42" x2="44" y2="42" stroke="#6b5018" stroke-width="2"/><line x1="42" y1="50" x2="44" y2="50" stroke="#6b5018" stroke-width="2"/></g>',
    21: '<g><circle cx="50" cy="52" r="16" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="50" cy="32" r="3" fill="currentColor"/><line x1="50" y1="35" x2="50" y2="38" stroke="currentColor" stroke-width="2"/><rect x="34" y="49" width="32" height="6" fill="currentColor"/><polygon points="50,44 53,52 50,60 47,52" fill="#6b5018"/></g>',
    22: '<g><line x1="50" y1="30" x2="50" y2="62" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="40" y1="60" x2="60" y2="60" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="46" y1="66" x2="54" y2="66" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><polygon points="50,28 53,34 47,34" fill="currentColor"/></g>',
    23: '<g><ellipse cx="50" cy="50" rx="14" ry="16" fill="currentColor"/><ellipse cx="45" cy="44" rx="4" ry="5" fill="#fff8e1" opacity="0.6"/></g>',
    24: '<g><rect x="36" y="36" width="28" height="30" rx="2" fill="currentColor"/><line x1="44" y1="36" x2="44" y2="66" stroke="#6b5018" stroke-width="1.5"/><line x1="52" y1="36" x2="52" y2="66" stroke="#6b5018" stroke-width="1.5"/><line x1="60" y1="36" x2="60" y2="66" stroke="#6b5018" stroke-width="1.5"/></g>',
    25: '<g><rect x="36" y="36" width="28" height="30" rx="2" fill="currentColor"/><path d="M 50,38 L 50,64" stroke="#6b5018" stroke-width="1.5"/><circle cx="50" cy="51" r="7" fill="#6b5018"/><path d="M 47,51 L 49,54 L 54,48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>'
  };

  // Renders a full badge SVG for a given level at the given pixel size.
  // includeEffects: whether to add the tier animation (shimmer/shine).
  function renderBadgeSVG(level, size, includeEffects) {
    level = Math.min(Math.max(level, 1), 25);
    size = size || 96;
    const tier = getBadgeTier(level);
    const c = TIER_COLORS[tier];
    const emblem = BADGE_EMBLEMS[level] || BADGE_EMBLEMS[1];
    const uid = 'bdg' + level + '_' + Math.floor(Math.random() * 100000);
    const fx = includeEffects !== false;

    // Effect class drives the CSS animation by tier
    const fxClass = fx ? ('badge-fx-' + tier) : '';

    return `
      <svg class="badge-svg ${fxClass}" viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Level ${level} badge">
        <defs>
          <radialGradient id="${uid}_plate" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stop-color="${c.light}"/>
            <stop offset="55%" stop-color="${c.base}"/>
            <stop offset="100%" stop-color="${c.dark}"/>
          </radialGradient>
          <linearGradient id="${uid}_shine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
            <stop offset="50%" stop-color="#ffffff" stop-opacity="0.55"/>
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
          </linearGradient>
          <clipPath id="${uid}_clip">
            <circle cx="50" cy="50" r="44"/>
          </clipPath>
        </defs>

        <!-- Outer rim -->
        <circle cx="50" cy="50" r="47" fill="${c.rim}"/>
        <!-- Decorative notches around the rim -->
        <g fill="${c.light}" opacity="0.6">
          ${Array.from({length: 12}).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            const x = 50 + Math.cos(a) * 44;
            const y = 50 + Math.sin(a) * 44;
            return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.6"/>`;
          }).join('')}
        </g>
        <!-- Plate -->
        <circle cx="50" cy="50" r="42" fill="url(#${uid}_plate)" stroke="${c.rim}" stroke-width="1.5"/>
        <!-- Inner ring -->
        <circle cx="50" cy="50" r="36" fill="none" stroke="${c.light}" stroke-width="1" opacity="0.45"/>

        <!-- Emblem -->
        <g color="${c.emblem}" style="color:${c.emblem}">
          ${emblem}
        </g>

        <!-- Shine sweep (animated for silver/gold via CSS) -->
        <g clip-path="url(#${uid}_clip)">
          <rect class="badge-shine" x="-60" y="-10" width="40" height="120" fill="url(#${uid}_shine)" transform="rotate(20 50 50)"/>
        </g>
      </svg>`;
  }
