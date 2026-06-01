// ============================================================
// Scripture Scholar — Profile Avatars (Phase 5)
// ============================================================
// Two kinds of profile picture:
//   1. Preset avatars — simple scripture-themed SVG icons on a
//      colored disc (scroll, temple, star, etc.). Safe default.
//   2. Personal photo — user picks/takes a photo; it's cropped to
//      a small circle and compressed to a tiny base64 JPEG thumbnail
//      stored in local state (and published to the leaderboard).
//
// The chosen avatar renders with the level BADGE overlaid on the
// corner. The avatar is tappable (opens the profile / reveals badge).
//
// state.avatar = { type: 'preset'|'photo', preset: '<id>', photo: '<dataURL>' }
//
// Exports (global):
//   PRESET_AVATARS                       -> array of {id, label, color, emblem}
//   renderAvatar(opts)                   -> HTML string (disc + emblem/photo + badge)
//   getMyAvatar()                        -> the current user's avatar object
//   openAvatarPicker()                   -> shows the picker modal
//   avatarThumbForLeaderboard()          -> small string to publish (preset id or tiny dataURL)
// ============================================================

  // Soft, warm disc colors for preset avatars
  const PRESET_AVATARS = [
    { id: 'scroll',  label: 'Scroll',   color: '#c89b4a', emblem: '<rect x="34" y="30" width="32" height="40" rx="3" fill="none" stroke="#fff" stroke-width="4"/><line x1="41" y1="40" x2="59" y2="40" stroke="#fff" stroke-width="3.5"/><line x1="41" y1="48" x2="59" y2="48" stroke="#fff" stroke-width="3.5"/><line x1="41" y1="56" x2="53" y2="56" stroke="#fff" stroke-width="3.5"/>' },
    { id: 'temple',  label: 'Temple',   color: '#6b8eae', emblem: '<path d="M50 26 L70 40 L30 40 Z" fill="#fff"/><rect x="34" y="40" width="32" height="30" fill="#fff"/><rect x="45" y="50" width="10" height="20" fill="#6b8eae"/><line x1="50" y1="20" x2="50" y2="26" stroke="#fff" stroke-width="3"/>' },
    { id: 'star',    label: 'Star',     color: '#d4a32c', emblem: '<path d="M50 28 L57 45 L75 46 L61 58 L66 75 L50 65 L34 75 L39 58 L25 46 L43 45 Z" fill="#fff"/>' },
    { id: 'flame',   label: 'Flame',    color: '#c4663c', emblem: '<path d="M50 26 C42 40 32 44 32 56 C32 67 40 74 50 74 C60 74 68 67 68 56 C68 48 62 44 59 38 C57 47 52 49 52 49 C54 40 51 33 50 26 Z" fill="#fff"/>' },
    { id: 'tree',    label: 'Tree',     color: '#6b8e4d', emblem: '<line x1="50" y1="50" x2="50" y2="74" stroke="#fff" stroke-width="5"/><circle cx="50" cy="42" r="17" fill="#fff"/><circle cx="37" cy="50" r="10" fill="#fff"/><circle cx="63" cy="50" r="10" fill="#fff"/>' },
    { id: 'dove',    label: 'Dove',     color: '#7ba6c4', emblem: '<path d="M30 52 Q40 38 56 42 Q66 44 72 34 Q70 50 58 54 L64 64 L52 58 Q40 62 30 52 Z" fill="#fff"/><circle cx="68" cy="37" r="2" fill="#7ba6c4"/>' },
    { id: 'crown',   label: 'Crown',    color: '#b8893c', emblem: '<path d="M28 62 L33 38 L42 52 L50 32 L58 52 L67 38 L72 62 Z" fill="#fff"/><rect x="28" y="62" width="44" height="8" rx="2" fill="#fff"/>' },
    { id: 'lamp',    label: 'Lamp',     color: '#c9a13c', emblem: '<path d="M32 56 Q32 46 50 46 L66 46 Q72 46 69 54 Q62 62 44 62 Q32 62 32 56 Z" fill="#fff"/><path d="M66 46 Q74 40 71 34" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><circle cx="71" cy="32" r="3.5" fill="#fff"/>' },
    { id: 'fish',    label: 'Fish',     color: '#5fa3a0', emblem: '<path d="M28 50 Q44 34 62 50 Q44 66 28 50 Z" fill="#fff"/><path d="M62 50 L74 40 L74 60 Z" fill="#fff"/><circle cx="40" cy="48" r="2.5" fill="#5fa3a0"/>' },
    { id: 'sun',     label: 'Sunrise',  color: '#d99a3c', emblem: '<path d="M30 62 A20 20 0 0 1 70 62 Z" fill="#fff"/><line x1="50" y1="30" x2="50" y2="22" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><line x1="68" y1="40" x2="74" y2="34" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><line x1="32" y1="40" x2="26" y2="34" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><line x1="26" y1="62" x2="74" y2="62" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>' },
    { id: 'heart',   label: 'Heart',    color: '#c4607a', emblem: '<path d="M50 70 C30 56 30 40 42 38 Q50 38 50 46 Q50 38 58 38 C70 40 70 56 50 70 Z" fill="#fff"/>' },
    { id: 'book',    label: 'Scriptures', color: '#9a6f3c', emblem: '<path d="M30 36 Q40 32 50 36 L50 68 Q40 64 30 68 Z" fill="#fff"/><path d="M70 36 Q60 32 50 36 L50 68 Q60 64 70 68 Z" fill="#fff" opacity="0.85"/>' }
  ];

  function getPresetAvatar(id) {
    return PRESET_AVATARS.find(a => a.id === id) || PRESET_AVATARS[0];
  }

  // Current user's avatar object (with sensible default).
  function getMyAvatar() {
    if (typeof state !== 'undefined' && state.avatar && state.avatar.type) return state.avatar;
    return { type: 'preset', preset: 'scroll', photo: '' };
  }

  // Render an avatar disc with an optional badge overlay.
  // opts: { avatar, level, size, showBadge, badgeSize, onclick, badgeOnclick, id }
  function renderAvatar(opts) {
    opts = opts || {};
    const av = opts.avatar || getMyAvatar();
    const size = opts.size || 72;
    const level = opts.level || (typeof getLevel === 'function' && typeof state !== 'undefined' ? getLevel(state.xp) : 1);
    const showBadge = opts.showBadge !== false;
    const badgeSize = opts.badgeSize || Math.round(size * 0.42);
    const idAttr = opts.id ? ` id="${opts.id}"` : '';

    let inner = '';
    if (av.type === 'photo' && av.photo) {
      inner = `<img class="avatar-photo" src="${av.photo}" alt="Profile photo" draggable="false"/>`;
    } else {
      const preset = getPresetAvatar(av.preset);
      inner = `
        <svg class="avatar-preset-svg" viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="${preset.color}"/>
          <g>${preset.emblem}</g>
        </svg>`;
    }

    const clickAttr = opts.onclick ? ` onclick="${opts.onclick}"` : '';
    const badgeClickAttr = opts.badgeOnclick ? ` onclick="${opts.badgeOnclick}"` : '';
    const badgeHtml = showBadge && typeof renderBadgeSVG === 'function'
      ? `<span class="avatar-badge"${badgeClickAttr}>${renderBadgeSVG(level, badgeSize, false)}</span>`
      : '';

    return `
      <span class="avatar-wrap"${idAttr} style="width:${size}px;height:${size}px;"${clickAttr}>
        <span class="avatar-disc">${inner}</span>
        ${badgeHtml}
      </span>`;
  }

  // What to publish to the leaderboard: preset id, or a tiny photo dataURL.
  // Photos are already compressed small when saved, so this is safe to store.
  function avatarThumbForLeaderboard() {
    const av = getMyAvatar();
    if (av.type === 'photo' && av.photo) return { type: 'photo', photo: av.photo };
    return { type: 'preset', preset: av.preset || 'scroll' };
  }

  // ============ AVATAR PICKER MODAL ============
  function openAvatarPicker() {
    const modal = document.getElementById('avatarPickerModal');
    if (!modal) return;
    renderAvatarPicker();
    modal.classList.remove('hidden');
  }

  function closeAvatarPicker(evt) {
    if (evt && evt.target && evt.target.id !== 'avatarPickerModal' && evt.type === 'click') {
      // only close on backdrop click for the overlay itself
      if (evt.currentTarget !== evt.target) return;
    }
    const modal = document.getElementById('avatarPickerModal');
    if (modal) modal.classList.add('hidden');
  }

  function renderAvatarPicker() {
    const body = document.getElementById('avatarPickerBody');
    if (!body) return;
    const current = getMyAvatar();
    const level = (typeof getLevel === 'function' && typeof state !== 'undefined') ? getLevel(state.xp) : 1;

    const presetGrid = PRESET_AVATARS.map(p => {
      const selected = (current.type === 'preset' && current.preset === p.id) ? ' selected' : '';
      return `
        <button class="avatar-choice${selected}" onclick="selectPresetAvatar('${p.id}')" aria-label="${p.label}">
          <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="${p.color}"/>
            <g>${p.emblem}</g>
          </svg>
        </button>`;
    }).join('');

    const photoSelected = current.type === 'photo' && current.photo;

    body.innerHTML = `
      <div class="avatar-preview-row">
        <div id="avatarLivePreview">${renderAvatar({ avatar: current, level: level, size: 96, showBadge: true })}</div>
        <div class="avatar-preview-hint">Your badge sits in the corner and shows your level.</div>
      </div>

      <div class="avatar-section-label">📷 Your Photo</div>
      <div class="avatar-photo-row">
        ${photoSelected
          ? `<div class="avatar-photo-current">${renderAvatar({ avatar: current, level: level, size: 64, showBadge: false })}</div>`
          : ''}
        <button class="btn btn-ghost avatar-photo-btn" onclick="document.getElementById('avatarFileInput').click()">
          ${photoSelected ? 'Change photo' : 'Upload a photo'}
        </button>
        ${photoSelected ? `<button class="avatar-photo-remove" onclick="removeAvatarPhoto()">Remove</button>` : ''}
      </div>
      <input type="file" id="avatarFileInput" accept="image/*" style="display:none" onchange="handleAvatarPhotoPick(event)"/>
      <div class="avatar-photo-note">Photos stay small and are shown on the leaderboard. Choose something appropriate for your ward. 🙏</div>

      <div class="avatar-section-label">✨ Or pick an icon</div>
      <div class="avatar-grid">${presetGrid}</div>
    `;
  }

  function selectPresetAvatar(id) {
    if (typeof state === 'undefined') return;
    state.avatar = { type: 'preset', preset: id, photo: '' };
    if (typeof saveState === 'function') saveState();
    if (typeof playTapSfx === 'function') playTapSfx();
    refreshAvatarsEverywhere();
    renderAvatarPicker();
  }

  function removeAvatarPhoto() {
    if (typeof state === 'undefined') return;
    const preset = (state.avatar && state.avatar.preset) ? state.avatar.preset : 'scroll';
    state.avatar = { type: 'preset', preset: preset, photo: '' };
    if (typeof saveState === 'function') saveState();
    refreshAvatarsEverywhere();
    renderAvatarPicker();
  }

  // Read the chosen file, crop to a centered square, downscale, compress to JPEG.
  function handleAvatarPhotoPick(evt) {
    const file = evt.target.files && evt.target.files[0];
    if (!file) return;
    if (!file.type || file.type.indexOf('image/') !== 0) {
      if (typeof showToast === 'function') showToast('Please choose an image file');
      return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        try {
          const dataUrl = cropAndCompress(img, 128); // 128px square thumbnail
          state.avatar = { type: 'photo', preset: (state.avatar && state.avatar.preset) || 'scroll', photo: dataUrl };
          if (typeof saveState === 'function') saveState();
          if (typeof playTapSfx === 'function') playTapSfx();
          refreshAvatarsEverywhere();
          renderAvatarPicker();
        } catch (err) {
          if (typeof showToast === 'function') showToast('Could not process that image');
          console.warn(err);
        }
      };
      img.onerror = function () { if (typeof showToast === 'function') showToast('Could not load that image'); };
      img.src = e.target.result;
    };
    reader.onerror = function () { if (typeof showToast === 'function') showToast('Could not read that file'); };
    reader.readAsDataURL(file);
  }

  // Crop to centered square + scale to `out` px + JPEG compress.
  function cropAndCompress(img, out) {
    const side = Math.min(img.width, img.height);
    const sx = (img.width - side) / 2;
    const sy = (img.height - side) / 2;
    const canvas = document.createElement('canvas');
    canvas.width = out; canvas.height = out;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, sx, sy, side, side, 0, 0, out, out);
    // 0.7 quality JPEG keeps the string small (typically ~4-8KB)
    return canvas.toDataURL('image/jpeg', 0.7);
  }

  // Re-render avatars wherever they appear after a change.
  function refreshAvatarsEverywhere() {
    if (typeof updateTopbar === 'function') updateTopbar();
    // Level modal hero avatar, if open
    if (typeof renderLevelModal === 'function') {
      const lm = document.getElementById('levelModal');
      if (lm && !lm.classList.contains('hidden')) renderLevelModal();
    }
  }
