// ============================================================
// Scripture Scholar — Leaderboard UI (Phase 4)
// ============================================================
// Global, all-time district leaderboard ranked by total XP. Opens from
// the nav menu. On open: ensure anonymous auth, publish my current
// stats, fetch the board, and render it (name, chapters, level +
// badge, total XP). Falls back to a friendly offline state.
// ============================================================

  // Holds the most recently rendered rows so the profile overlay can look up
  // a tapped user by their index.
  let lbCurrentRows = [];

  // Count completed chapters for the current user.
  function lbMyChapters() {
    if (typeof state === 'undefined' || !Array.isArray(state.completedLessons)) return 0;
    return state.completedLessons.length;
  }

  // Gather my public stats from local state.
  function lbMyStats() {
    const xp = (typeof state !== 'undefined') ? (state.xp || 0) : 0;
    const level = (typeof getLevel === 'function') ? getLevel(xp) : 1;
    const badgeName = (typeof getBadgeName === 'function') ? getBadgeName(level) : '';
    const title = (typeof getLevelTitle === 'function') ? getLevelTitle(level) : '';
    return {
      name: (typeof state !== 'undefined' && state.username) ? state.username : 'Anonymous',
      xp: xp,
      level: level,
      badgeName: badgeName,
      title: title,
      streak: (typeof state !== 'undefined') ? (state.streak || 0) : 0,
      chapters: lbMyChapters(),
      avatar: (typeof avatarThumbForLeaderboard === 'function') ? avatarThumbForLeaderboard() : null
    };
  }

  function openLeaderboard() {
    if (typeof showScreen === 'function') showScreen('screen-leaderboard');
    renderLeaderboardLoading();
    lbLoadAndRender();
  }

  function renderLeaderboardLoading() {
    const c = document.getElementById('leaderboardContainer');
    if (!c) return;
    c.innerHTML = `
      <div class="lb-loading">
        <div class="lb-spinner"></div>
        <p>Loading the district leaderboard…</p>
      </div>
    `;
  }

  async function lbLoadAndRender() {
    let ok = false;
    if (typeof lbInit === 'function') {
      ok = await lbInit();
    } else if (typeof LB !== 'undefined') {
      LB.lastError = 'leaderboard module not loaded';
    }
    if (!ok) {
      renderLeaderboardOffline();
      return;
    }
    // Publish my latest stats, then fetch the board.
    if (typeof lbPublishMyStats === 'function') {
      await lbPublishMyStats(lbMyStats());
    }
    let rows = null;
    if (typeof lbFetchGlobal === 'function') {
      rows = await lbFetchGlobal(100);
    }
    if (!rows) {
      renderLeaderboardOffline();
      return;
    }
    renderLeaderboard(rows);
  }

  function renderLeaderboardOffline() {
    const c = document.getElementById('leaderboardContainer');
    if (!c) return;
    const reason = (typeof LB !== 'undefined' && LB.lastError) ? LB.lastError : 'offline';
    c.innerHTML = `
      <div class="lb-offline">
        <div class="lb-offline-icon">📡</div>
        <h3 class="serif">Leaderboard unavailable</h3>
        <p>We couldn't connect right now. Check your internet connection and try again.</p>
        <p class="lb-offline-reason">(${escapeHtmlLb(reason)})</p>
        <button class="btn btn-gold" onclick="openLeaderboard()">Try Again</button>
      </div>
    `;
  }

  function escapeHtmlLb(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function renderLeaderboard(rows) {
    const c = document.getElementById('leaderboardContainer');
    if (!c) return;
    // Stash the rows so the profile overlay can look up a tapped user by index.
    lbCurrentRows = rows || [];

    if (!rows.length) {
      c.innerHTML = `
        <div class="lb-offline">
          <div class="lb-offline-icon">🏅</div>
          <h3 class="serif">No rankings yet</h3>
          <p>Be the first! Earn XP from lessons and games and you'll appear here.</p>
        </div>
      `;
      return;
    }

    // Find my rank for the summary line.
    const myIdx = rows.findIndex(r => r.isMe);
    const myRank = myIdx >= 0 ? myIdx + 1 : null;

    const badge = (level, size) => (typeof renderBadgeSVG === 'function')
      ? renderBadgeSVG(level, size || 38, true) : '';

    // Builds a standard leaderboard row for a given rank (1-indexed).
    const buildRow = (r, rankNum) => {
      const rankClass = rankNum === 1 ? 'gold' : (rankNum === 2 ? 'silver' : (rankNum === 3 ? 'bronze' : ''));
      const rankIcon = (typeof rankTrophy === 'function')
        ? rankTrophy(rankNum, 38)
        : `<span>${rankNum}</span>`;
      let avatarHtml;
      if (typeof renderAvatar === 'function') {
        const av = r.avatar || { type: 'preset', preset: 'scroll' };
        avatarHtml = renderAvatar({
          avatar: av, level: r.level, size: 46, showBadge: true, badgeSize: 22,
          badgeOnclick: `revealBadgeName('list', ${r.level}, event)`
        });
      } else {
        avatarHtml = `<button class="lb-badge" onclick="revealBadgeName('list', ${r.level}, event)">${badge(r.level, 40)}</button>`;
      }
      // rankNum-1 is the index into the full rows array.
      return `
        <div class="lb-row lb-row-tappable${r.isMe ? ' me' : ''}" onclick="lbOpenProfile(${rankNum - 1})">
          <div class="lb-rank ${rankClass}">${rankIcon}</div>
          <div class="lb-avatar">${avatarHtml}</div>
          <div class="lb-info">
            <div class="lb-name">${escapeHtmlLb(r.name)}${r.isMe ? ' <span class="lb-you">you</span>' : ''}</div>
            <div class="lb-sub">Lv ${r.level} · ${escapeHtmlLb(r.badgeName)} · ${r.chapters} chapter${r.chapters === 1 ? '' : 's'}</div>
          </div>
          <div class="lb-xp"><strong>${r.xp.toLocaleString()}</strong><span>XP</span></div>
        </div>
      `;
    };

    // Champion card for rank 1 — big, crowned, gold.
    const champ = rows[0];
    let championHtml = '';
    if (champ) {
      let champAvatar;
      if (typeof renderAvatar === 'function') {
        const av = champ.avatar || { type: 'preset', preset: 'scroll' };
        champAvatar = renderAvatar({
          avatar: av, level: champ.level, size: 84, showBadge: true, badgeSize: 34,
          badgeOnclick: `revealBadgeName('champ', ${champ.level}, event)`
        });
      } else {
        champAvatar = badge(champ.level, 72);
      }
      championHtml = `
        <div class="lb-champion lb-row-tappable${champ.isMe ? ' me' : ''}" onclick="lbOpenProfile(0)">
          <div class="lb-champion-crown">👑</div>
          <div class="lb-champion-label">Top Scholar</div>
          <div class="lb-champion-avatar">${champAvatar}</div>
          <div class="lb-champion-name serif">${escapeHtmlLb(champ.name)}${champ.isMe ? ' <span class="lb-you">you</span>' : ''}</div>
          <div class="lb-champion-sub">Lv ${champ.level} · ${escapeHtmlLb(champ.badgeName)}</div>
          <div class="lb-champion-xp">${champ.xp.toLocaleString()} <span>XP</span></div>
        </div>
      `;
    }

    // Ranks 2+ go in the list (where rank 1 used to be).
    const restHtml = rows.slice(1).map((r, i) => buildRow(r, i + 2)).join('');

    c.innerHTML = `
      <div class="lb-header-card">
        <div class="lb-title serif">🏆 District Leaderboard</div>
        <div class="lb-subtitle">All-time rankings by total XP</div>
        ${myRank ? `<div class="lb-myrank">You're <strong>#${myRank}</strong> of ${rows.length}</div>` : ''}
      </div>
      ${championHtml}
      ${restHtml ? `<div class="lb-list">${restHtml}</div>` : ''}
      <button class="lb-refresh" onclick="openLeaderboard()">↻ Refresh</button>
      <p class="lb-note">Rankings update when players open this screen. Keep learning to climb! 📖</p>
    `;
  }

  // ============================================================
  // Profile overlay — tap a leaderboard row to view that user's profile
  // ============================================================
  function lbOpenProfile(index) {
    const r = lbCurrentRows[index];
    if (!r) return;
    if (typeof playTapSfx === 'function') playTapSfx();

    // Record a visit on the tapped user's profile (not for your own).
    if (!r.isMe && r.uid && typeof lbRecordVisit === 'function') {
      lbRecordVisit(r.uid);
    }

    lbRenderProfileOverlay(r);

    // If viewing your OWN profile, load and show who visited you.
    if (r.isMe && r.uid && typeof lbFetchVisitors === 'function') {
      lbFetchVisitors(r.uid).then(visitors => {
        lbRenderVisitorsSection(visitors);
      }).catch(() => {});
    }
  }

  function lbProfileBadge(level, size) {
    return (typeof renderBadgeSVG === 'function') ? renderBadgeSVG(level, size || 96, true) : '';
  }

  function lbRenderProfileOverlay(r) {
    let overlay = document.getElementById('lbProfileOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'lbProfileOverlay';
      overlay.className = 'lb-profile-overlay';
      overlay.setAttribute('onclick', 'lbCloseProfile()');
      document.body.appendChild(overlay);
    }

    let avatarHtml;
    if (typeof renderAvatar === 'function') {
      const av = r.avatar || { type: 'preset', preset: 'scroll' };
      avatarHtml = renderAvatar({ avatar: av, level: r.level, size: 96, showBadge: false, badgeSize: 38 });
    } else {
      avatarHtml = '';
    }

    const title = r.title || ((typeof getLevelTitle === 'function') ? getLevelTitle(r.level) : '');
    const badgeName = r.badgeName || ((typeof getBadgeName === 'function') ? getBadgeName(r.level) : '');
    const tier = (typeof getBadgeTier === 'function') ? getBadgeTier(r.level) : '';
    const tierLabel = tier ? (tier.charAt(0).toUpperCase() + tier.slice(1) + ' Badge') : '';
    // Big, proud badge display (with animation) — same style as your own profile.
    const bigBadge = (typeof renderBadgeSVG === 'function') ? renderBadgeSVG(r.level, 104, true) : '';

    overlay.innerHTML = `
      <div class="lb-profile-card" onclick="event.stopPropagation()">
        <button class="lb-profile-close" onclick="lbCloseProfile()" aria-label="Close">×</button>
        <div class="lb-profile-avatar">${avatarHtml}</div>
        <div class="lb-profile-name serif">${escapeHtmlLb(r.name)}${r.isMe ? ' <span class="lb-you">you</span>' : ''}</div>
        <div class="lb-profile-level">Level ${r.level}</div>
        ${title ? `<div class="lb-profile-title">${escapeHtmlLb(title)}</div>` : ''}

        <div class="lb-profile-badge-showcase">
          <div class="lb-profile-badge">${bigBadge}</div>
          <div class="lb-profile-badge-name serif">${escapeHtmlLb(badgeName)}</div>
          <div class="lb-profile-badge-tier">${tierLabel}</div>
        </div>

        <div class="lb-profile-stats">
          <div class="lb-profile-stat">
            <div class="lb-profile-stat-num">${(r.xp || 0).toLocaleString()}</div>
            <div class="lb-profile-stat-lbl">Total XP</div>
          </div>
          <div class="lb-profile-stat">
            <div class="lb-profile-stat-num">${r.chapters || 0}</div>
            <div class="lb-profile-stat-lbl">Chapters</div>
          </div>
          <div class="lb-profile-stat">
            <div class="lb-profile-stat-num">${r.streak || 0}</div>
            <div class="lb-profile-stat-lbl">Day Streak</div>
          </div>
        </div>
        ${r.isMe ? `
          <div class="lb-visitors" id="lbVisitors">
            <div class="lb-visitors-head">👀 Profile visitors</div>
            <div class="lb-visitors-body" id="lbVisitorsBody">
              <div class="lb-visitors-loading">Loading…</div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
    overlay.classList.remove('hidden');
    // history entry so the back button closes the overlay
    try { history.pushState({ lbProfile: true }, '', location.href); } catch (e) {}
  }

  function lbCloseProfile() {
    const overlay = document.getElementById('lbProfileOverlay');
    if (overlay) overlay.classList.add('hidden');
  }

  // Renders the "who visited" section (3 most recent + total count).
  function lbRenderVisitorsSection(visitors) {
    const body = document.getElementById('lbVisitorsBody');
    if (!body) return;
    if (!visitors || !visitors.length) {
      body.innerHTML = `<div class="lb-visitors-empty">No visitors yet. Climb the ranks and they'll come! 📈</div>`;
      return;
    }
    const total = visitors.length;
    // Most recent first; show 3.
    const recent = visitors.slice().sort((a, b) => (b.at || 0) - (a.at || 0)).slice(0, 3);
    const chips = recent.map(v => {
      let av;
      if (typeof renderAvatar === 'function') {
        av = renderAvatar({ avatar: v.avatar || { type: 'preset', preset: 'scroll' }, level: v.level || 1, size: 40, showBadge: false });
      } else {
        av = '';
      }
      return `
        <div class="lb-visitor">
          <div class="lb-visitor-av">${av}</div>
          <div class="lb-visitor-name">${escapeHtmlLb(v.name || 'Someone')}</div>
        </div>
      `;
    }).join('');
    body.innerHTML = `
      <div class="lb-visitors-count">${total} ${total === 1 ? 'person has' : 'people have'} viewed your profile</div>
      <div class="lb-visitors-list">${chips}</div>
    `;
  }
