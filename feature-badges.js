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

  // Badge names per level — Book of Mormon artifacts and objects.
  // Levels 20–25 are fixed (the great sacred relics). Levels 1–19 progress
  // through everyday-to-significant objects found across the Book of Mormon.
  const BADGE_NAMES = [
    'Bronze Scroll',               // 1  (bronze)
    "Nephi\u2019s Wooden Bow",     // 2
    'Iron Rod',                    // 3
    'Mustard Seed',                // 4
    'Bronze Liahona',              // 5
    "Ammon\u2019s Slingshot",      // 6
    'Watchman',                    // 7
    'Trumpet',                     // 8
    'Bronze Tree of Life',         // 9
    'Silver Scroll',               // 10 (silver)
    'Pillar of Fire',              // 11
    'Breastplate of Righteousness',// 12
    'Sword of the Spirit',         // 13
    'Silver Liahona',              // 14
    'Helmet of Salvation',         // 15
    'Shield of Faith',             // 16
    'Ensign of Truth',             // 17
    'Silver Tree of Life',         // 18
    'Title of Liberty',            // 19
    'Brass Plates',                // 20 (gold)
    'Liahona',                     // 21
    'Sword of Laban',              // 22
    "Seer\u2019s Stone",           // 23
    'Gold Plates',                 // 24
    'Sealed Plates'                // 25
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
    // 1: Bronze Scroll — a rolled scroll
    1: '<g><rect x="38" y="36" width="24" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="3"/><line x1="43" y1="44" x2="57" y2="44" stroke="currentColor" stroke-width="2"/><line x1="43" y1="50" x2="57" y2="50" stroke="currentColor" stroke-width="2"/><line x1="43" y1="56" x2="53" y2="56" stroke="currentColor" stroke-width="2"/><path d="M 38,36 Q 34,40 38,44 M 62,56 Q 66,60 62,64" stroke="currentColor" stroke-width="2.5" fill="none"/></g>',
    // 2: Nephi's Wooden Bow — a bow and arrow
    2: '<g><path d="M 40,30 Q 64,50 40,70" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="40" y1="30" x2="40" y2="70" stroke="currentColor" stroke-width="2"/><line x1="38" y1="50" x2="66" y2="50" stroke="currentColor" stroke-width="2.5"/><polygon points="66,50 60,46 60,54" fill="currentColor"/></g>',
    // 3: Iron Rod — a straight rod
    3: '<g><line x1="36" y1="64" x2="64" y2="36" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><circle cx="64" cy="36" r="4" fill="currentColor"/><circle cx="36" cy="64" r="4" fill="currentColor"/></g>',
    // 4: Mustard Seed — a small seed sprouting
    4: '<g><circle cx="50" cy="58" r="7" fill="currentColor"/><path d="M 50,52 Q 50,40 44,36 M 50,52 Q 50,42 58,38" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="42" cy="35" rx="4" ry="2.5" fill="currentColor" transform="rotate(-30 42 35)"/><ellipse cx="59" cy="37" rx="4" ry="2.5" fill="currentColor" transform="rotate(30 59 37)"/></g>',
    // 5: Bronze Liahona — a round ball with spindles
    5: '<g><circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="50" cy="32" r="2.5" fill="currentColor"/><polygon points="50,42 53,50 50,58 47,50" fill="currentColor"/><polygon points="42,50 50,47 58,50 50,53" fill="currentColor" opacity="0.6"/></g>',
    // 6: Ammon's Slingshot — a sling with stone
    6: '<g><path d="M 34,36 Q 50,54 66,36" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="34" y1="36" x2="44" y2="58" stroke="currentColor" stroke-width="2.5"/><line x1="66" y1="36" x2="56" y2="58" stroke="currentColor" stroke-width="2.5"/><circle cx="50" cy="50" r="5" fill="currentColor"/></g>',
    // 7: Watchman — a watchtower
    7: '<g><path d="M 42,66 L 44,44 L 56,44 L 58,66 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M 40,44 L 50,34 L 60,44 Z" fill="currentColor"/><rect x="47" y="52" width="6" height="8" fill="currentColor"/></g>',
    // 8: Trumpet — a horn trumpet
    8: '<g><path d="M 34,46 L 56,46 Q 66,46 66,40 L 66,60 Q 66,54 56,54 L 34,54 Z" fill="currentColor"/><rect x="30" y="44" width="5" height="12" rx="2" fill="currentColor"/></g>',
    // 9: Bronze Tree of Life — a tree
    9: '<g><line x1="50" y1="50" x2="50" y2="70" stroke="currentColor" stroke-width="3.5"/><circle cx="50" cy="42" r="14" fill="currentColor"/><circle cx="40" cy="48" r="8" fill="currentColor"/><circle cx="60" cy="48" r="8" fill="currentColor"/></g>',
    // 10: Silver Scroll — a scroll (silver tier)
    10: '<g><rect x="38" y="36" width="24" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="3"/><line x1="43" y1="44" x2="57" y2="44" stroke="currentColor" stroke-width="2"/><line x1="43" y1="50" x2="57" y2="50" stroke="currentColor" stroke-width="2"/><line x1="43" y1="56" x2="53" y2="56" stroke="currentColor" stroke-width="2"/><path d="M 38,36 Q 34,40 38,44 M 62,56 Q 66,60 62,64" stroke="currentColor" stroke-width="2.5" fill="none"/></g>',
    // 11: Pillar of Fire — rising flame
    11: '<g><path d="M 50,32 Q 42,44 46,54 Q 40,52 42,62 Q 44,70 50,70 Q 56,70 58,62 Q 60,52 54,54 Q 58,44 50,32 Z" fill="currentColor"/></g>',
    // 12: Breastplate of Righteousness — armor
    12: '<g><path d="M 38,36 L 62,36 L 60,58 Q 50,68 40,58 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><line x1="50" y1="40" x2="50" y2="62" stroke="currentColor" stroke-width="2"/><line x1="44" y1="46" x2="56" y2="46" stroke="currentColor" stroke-width="2"/></g>',
    // 13: Sword of the Spirit — upright sword
    13: '<g><line x1="50" y1="30" x2="50" y2="60" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><line x1="40" y1="60" x2="60" y2="60" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="60" x2="50" y2="70" stroke="currentColor" stroke-width="3"/></g>',
    // 14: Silver Liahona — round ball with spindles (silver)
    14: '<g><circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="50" cy="32" r="2.5" fill="currentColor"/><polygon points="50,42 53,50 50,58 47,50" fill="currentColor"/><polygon points="42,50 50,47 58,50 50,53" fill="currentColor" opacity="0.6"/></g>',
    // 15: Helmet of Salvation
    15: '<g><path d="M 36,56 Q 36,36 50,36 Q 64,36 64,56 L 58,56 L 58,48 Q 58,42 50,42 Q 42,42 42,48 L 42,56 Z" fill="currentColor"/><rect x="34" y="56" width="32" height="6" rx="2" fill="currentColor"/></g>',
    // 16: Shield of Faith — a shield
    16: '<g><path d="M 50,32 L 66,38 Q 66,60 50,70 Q 34,60 34,38 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M 50,40 L 50,62" stroke="currentColor" stroke-width="2"/><path d="M 40,50 L 60,50" stroke="currentColor" stroke-width="2"/></g>',
    // 17: Ensign of Truth — banner raised high
    17: '<g><line x1="38" y1="30" x2="38" y2="70" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M 38,32 L 66,32 L 60,42 L 66,52 L 38,52 Z" fill="currentColor"/><circle cx="38" cy="30" r="3" fill="currentColor"/></g>',
    // 18: Silver Tree of Life — a tree (silver)
    18: '<g><line x1="50" y1="50" x2="50" y2="70" stroke="currentColor" stroke-width="3.5"/><circle cx="50" cy="42" r="14" fill="currentColor"/><circle cx="40" cy="48" r="8" fill="currentColor"/><circle cx="60" cy="48" r="8" fill="currentColor"/></g>',
    // 19: Title of Liberty — banner on a pole
    19: '<g><line x1="40" y1="30" x2="40" y2="70" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M 40,32 L 66,36 L 60,43 L 66,50 L 40,46 Z" fill="currentColor"/></g>',
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
    let fxClass = fx ? ('badge-fx-' + tier) : '';
    // Small badges (lists, lobby, avatar corners) use a lighter "mini" effect
    // set — no animated drop-shadow glow or holographic layers — so many of
    // them can render at once without lag. Big showcase badges keep everything.
    if (fx && size <= 56) fxClass += ' badge-mini';
    // Gold badges (20-25) get CUMULATIVE effects: each level adds a new effect
    // on top of all previous gold levels. Level 25 also gets a holographic sheen.
    if (fx && tier === 'gold' && level >= 20) {
      for (let l = 20; l <= level; l++) fxClass += ' badge-lvl-' + l;
    }

    // Emblem color + small sparkle accents (animated for silver/gold via CSS)
    const sparkles = `
      <g class="badge-sparkles">
        <g class="badge-spark badge-spark-1"><path d="M0,-4 L1,-1 L4,0 L1,1 L0,4 L-1,1 L-4,0 L-1,-1 Z" fill="#ffffff"/></g>
        <g class="badge-spark badge-spark-2"><path d="M0,-3 L0.8,-0.8 L3,0 L0.8,0.8 L0,3 L-0.8,0.8 L-3,0 L-0.8,-0.8 Z" fill="#ffffff"/></g>
        <g class="badge-spark badge-spark-3"><path d="M0,-2.4 L0.7,-0.7 L2.4,0 L0.7,0.7 L0,2.4 L-0.7,0.7 L-2.4,0 L-0.7,-0.7 Z" fill="#ffffff"/></g>
        <g class="badge-spark badge-spark-4"><path d="M0,-3.4 L0.9,-0.9 L3.4,0 L0.9,0.9 L0,3.4 L-0.9,0.9 L-3.4,0 L-0.9,-0.9 Z" fill="#ffffff"/></g>
        <g class="badge-spark badge-spark-5"><path d="M0,-2.6 L0.7,-0.7 L2.6,0 L0.7,0.7 L0,2.6 L-0.7,0.7 L-2.6,0 L-0.7,-0.7 Z" fill="#ffffff"/></g>
        <g class="badge-spark badge-spark-6"><path d="M0,-2 L0.6,-0.6 L2,0 L0.6,0.6 L0,2 L-0.6,0.6 L-2,0 L-0.6,-0.6 Z" fill="#ffffff"/></g>
      </g>`;

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
          <radialGradient id="${uid}_halo" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stop-color="${c.light}" stop-opacity="0"/>
            <stop offset="100%" stop-color="${c.light}" stop-opacity="0.5"/>
          </radialGradient>
          <clipPath id="${uid}_clip">
            <circle cx="50" cy="50" r="42"/>
          </clipPath>
          <linearGradient id="${uid}_holo" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stop-color="#ff7eb3" stop-opacity="0.85"/>
            <stop offset="20%" stop-color="#7afcff" stop-opacity="0.85"/>
            <stop offset="40%" stop-color="#feff9c" stop-opacity="0.85"/>
            <stop offset="60%" stop-color="#a6ff8e" stop-opacity="0.85"/>
            <stop offset="80%" stop-color="#8ec5ff" stop-opacity="0.85"/>
            <stop offset="100%" stop-color="#d98eff" stop-opacity="0.85"/>
          </linearGradient>
          <linearGradient id="${uid}_holo2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%"  stop-color="#fff6a0" stop-opacity="0.7"/>
            <stop offset="33%" stop-color="#a6ffe0" stop-opacity="0.7"/>
            <stop offset="66%" stop-color="#c8a6ff" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#ffb3d9" stop-opacity="0.7"/>
          </linearGradient>
        </defs>

        <!-- Glow halo (animated for gold) -->
        <circle class="badge-halo" cx="50" cy="50" r="48" fill="url(#${uid}_halo)"/>

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

        <!-- Sparkle accents (silver/gold) -->
        ${sparkles}

        <!-- Shine sweep — tall/wide band fully inside the plate clip so no edges show -->
        <g clip-path="url(#${uid}_clip)">
          <rect class="badge-shine" x="-50" y="-40" width="34" height="180" fill="url(#${uid}_shine)" transform="rotate(20 50 50)"/>
          <!-- Holographic sheen (level 25) — oversized so it always covers the full plate as it sweeps -->
          <rect class="badge-holo" x="-40" y="-40" width="180" height="180" fill="url(#${uid}_holo)"/>
          <rect class="badge-holo2" x="-40" y="-40" width="180" height="180" fill="url(#${uid}_holo2)"/>
          <!-- Rotating starburst rays (level 25) -->
          <g class="badge-rays">
            ${Array.from({length: 12}).map((_, i) => {
              const a = (i / 12) * 360;
              return `<rect x="49" y="-6" width="2" height="56" fill="#fff8e0" opacity="0.5" transform="rotate(${a} 50 50)"/>`;
            }).join('')}
          </g>
        </g>
        <!-- Extra rotating ring glint (gold cumulative effect) -->
        <circle class="badge-ring-glint" cx="50" cy="50" r="39" fill="none" stroke="#fff6d8" stroke-width="2" stroke-dasharray="6 200" opacity="0"/>
        <!-- Pulsing outer aura (gold cumulative effect) -->
        <circle class="badge-aura" cx="50" cy="50" r="46" fill="none" stroke="${c.light}" stroke-width="2.5" opacity="0"/>
        <!-- Second, brighter aura ring for level 25 -->
        <circle class="badge-aura2" cx="50" cy="50" r="49" fill="none" stroke="#fff6d8" stroke-width="1.5" opacity="0"/>
      </svg>`;
  }
