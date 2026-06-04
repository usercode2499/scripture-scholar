// ============================================================
// Scripture Scholar — Auth + Global Leaderboard (Phase 4)
// ============================================================
// Anonymous Firebase Authentication gives every device a stable,
// permanent user id with no passwords. We use that id to publish
// the player's public stats to a global `leaderboards/` node so a
// ward-wide, all-time leaderboard (ranked by total XP) persists
// across games and sessions.
//
// Reuses the same Firebase app/config as multiplayer (compat SDK).
// If auth/db is unavailable, LB.ready stays false and the UI shows
// a friendly offline state instead of breaking.
//
// Data model:
//   leaderboards/<uid>/ {
//     name, xp, level, badgeName, chapters, updatedAt
//   }
// ============================================================

  const LB = {
    ready: false,
    uid: null,
    db: null,
    auth: null,
    lastError: null
  };

  // Load the auth compat SDK lazily only if needed (script tag added in HTML).
  async function lbInit() {
    if (LB.ready) return true;
    try {
      if (typeof firebase === 'undefined' || !firebase.auth) {
        LB.lastError = 'Auth SDK not loaded';
        return false;
      }
      // Reuse the app initialized by the multiplayer backend if present;
      // otherwise initialize from the shared config.
      if (!firebase.apps || !firebase.apps.length) {
        if (typeof MP_FB_CONFIG !== 'undefined') {
          firebase.initializeApp(MP_FB_CONFIG);
        } else {
          LB.lastError = 'No Firebase config';
          return false;
        }
      }
      LB.auth = firebase.auth();
      LB.db = firebase.database();

      // Sign in anonymously and wait for the uid.
      const cred = await LB.auth.signInAnonymously();
      LB.uid = (cred && cred.user && cred.user.uid) ? cred.user.uid
             : (LB.auth.currentUser ? LB.auth.currentUser.uid : null);
      if (!LB.uid) { LB.lastError = 'no uid after sign-in'; return false; }
      LB.ready = true;
      return true;
    } catch (e) {
      // Prefer the Firebase error code (e.g. auth/configuration-not-found),
      // fall back to the message — this is what shows on the offline screen.
      LB.lastError = (e && e.code) ? e.code : ((e && e.message) ? e.message : 'auth failed');
      LB.ready = false;
      return false;
    }
  }

  // Publish/refresh my public stats to the global leaderboard.
  async function lbPublishMyStats(stats) {
    if (!LB.ready || !LB.uid) return false;
    try {
      await LB.db.ref('leaderboards/' + LB.uid).set({
        name: stats.name || 'Anonymous',
        xp: stats.xp || 0,
        level: stats.level || 1,
        badgeName: stats.badgeName || '',
        title: stats.title || '',
        streak: stats.streak || 0,
        chapters: stats.chapters || 0,
        avatar: stats.avatar || null,
        updatedAt: firebase.database.ServerValue.TIMESTAMP
      });
      return true;
    } catch (e) {
      LB.lastError = (e && e.message) ? e.message : 'publish failed';
      return false;
    }
  }

  // Fetch the global leaderboard, sorted by XP desc. Returns an array of
  // { uid, name, xp, level, badgeName, chapters, isMe }.
  async function lbFetchGlobal(limit) {
    if (!LB.ready) return null;
    try {
      const snap = await LB.db.ref('leaderboards').get();
      if (!snap.exists()) return [];
      const rows = [];
      snap.forEach(child => {
        const v = child.val() || {};
        rows.push({
          uid: child.key,
          name: v.name || 'Anonymous',
          xp: v.xp || 0,
          level: v.level || 1,
          badgeName: v.badgeName || '',
          title: v.title || '',
          streak: v.streak || 0,
          chapters: v.chapters || 0,
          avatar: v.avatar || null,
          isMe: child.key === LB.uid
        });
      });
      rows.sort((a, b) => b.xp - a.xp || b.chapters - a.chapters);
      return (limit && limit > 0) ? rows.slice(0, limit) : rows;
    } catch (e) {
      LB.lastError = (e && e.message) ? e.message : 'fetch failed';
      return null;
    }
  }

  // ============================================================
  // Profile visitors
  // ============================================================
  // Stored under visits/<profileUid>/<visitorUid> = { name, avatar, level, at }.
  // Keyed by visitor uid so repeat visits update one entry (not spam).
  // Records a visit by the current user onto another user's profile.
  async function lbRecordVisit(profileUid) {
    if (!LB.ready || !LB.uid || !profileUid || profileUid === LB.uid) return false;
    try {
      const me = (typeof lbMyStats === 'function') ? lbMyStats() : {};
      await LB.db.ref('visits/' + profileUid + '/' + LB.uid).set({
        name: me.name || 'Someone',
        avatar: me.avatar || null,
        level: me.level || 1,
        at: firebase.database.ServerValue.TIMESTAMP
      });
      return true;
    } catch (e) {
      LB.lastError = (e && e.message) ? e.message : 'visit failed';
      return false;
    }
  }

  // Fetches the list of visitors for a profile uid.
  async function lbFetchVisitors(profileUid) {
    if (!LB.ready || !profileUid) return [];
    try {
      const snap = await LB.db.ref('visits/' + profileUid).get();
      if (!snap.exists()) return [];
      const out = [];
      snap.forEach(child => {
        const v = child.val() || {};
        out.push({ uid: child.key, name: v.name || 'Someone', avatar: v.avatar || null, level: v.level || 1, at: v.at || 0 });
      });
      return out;
    } catch (e) {
      LB.lastError = (e && e.message) ? e.message : 'fetch visitors failed';
      return [];
    }
  }
