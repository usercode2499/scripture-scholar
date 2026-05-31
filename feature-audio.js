// ============================================================
// Scripture Scholar — Audio System
// ============================================================
// Background music plays through the Web Audio API to keep it OUT
// of the phone's OS media controls / notification shade. SFX use
// short <audio> elements (too brief for OS to latch onto).
//
// Exports (global):
//   audio                  — the audio state object
//   initAudio()            — set up music + SFX. Call after user gesture.
//   playBgMusic()          — start/resume looped background music
//   pauseBgMusic()         — pause background music
//   stopBgMusic()          — alias for pauseBgMusic
//   playSfx('correct'|'wrong')
//   playLevelUpSfx()
//   onToggleBgMusic(bool)  — settings toggle handler
//   onToggleSfx(bool)
//   onBgVolumeChange(0-100)
//   pauseBgForLifecycle(), resumeBgFromLifecycle()
//
// Reads:  state.audioBg, state.audioSfx, state.audioBgVol (from main script)
// Calls:  saveState() (from main script)
// ============================================================

  // ============ AUDIO MANAGER ============
  // Background music plays through the Web Audio API rather than <audio>
  // elements, which keeps it OUT of the phone's OS media controls and
  // notification shade. Short SFX (correct, wrong, levelup) still use
  // <audio> for simplicity — they're too brief for the OS to latch onto.
  const audio = {
    ctx: null,            // AudioContext (created on first user gesture)
    bgBuffer: null,       // Decoded AudioBuffer for the loop
    bgSource: null,       // Currently playing BufferSource (if any)
    bgGain: null,         // Gain node for volume control
    bgIsPlaying: false,
    bgPausedByLifecycle: false,
    correct: null,
    wrong: null,
    levelup: null,
    initialized: false
  };

  function initAudio() {
    if (audio.initialized) return;
    audio.initialized = true;
    try {
      // 1. Background music — Web Audio API (silent to OS media controls)
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audio.ctx = new AudioCtx();
        audio.bgGain = audio.ctx.createGain();
        audio.bgGain.gain.value = (typeof state.audioBgVol === 'number' ? state.audioBgVol : 0.6);
        audio.bgGain.connect(audio.ctx.destination);

        // Fetch + decode the loop. Once ready, we can start it.
        fetch('background-music.mp3')
          .then((res) => res.arrayBuffer())
          .then((buf) => audio.ctx.decodeAudioData(buf))
          .then((decoded) => {
            audio.bgBuffer = decoded;
            // If playBgMusic was requested before the decode finished, start now
            if (audio.bgPendingPlay) {
              audio.bgPendingPlay = false;
              startBgSource();
            }
          })
          .catch((e) => console.warn('Background music load failed:', e));
      }

      // 2. Short SFX — stay as <audio> elements
      audio.correct = new Audio('correct-music.mp3');
      audio.correct.volume = 0.7;
      audio.correct.preload = 'auto';

      audio.wrong = new Audio('wrong-music.mp3');
      audio.wrong.volume = 0.7;
      audio.wrong.preload = 'auto';

      audio.levelup = new Audio('levelup-music.mp3');
      audio.levelup.volume = 0.75;
      audio.levelup.preload = 'auto';

      [audio.correct, audio.wrong, audio.levelup].forEach((a) => {
        a.addEventListener('error', () => {
          console.warn('Audio file failed to load:', a.src);
        });
      });

      // "Unlock" the SFX <audio> elements while we have a user gesture.
      // Mobile browsers block .play() unless triggered by a gesture — but if we
      // call play() then immediately pause() during the gesture, future programmatic
      // play() calls will succeed (no gesture required afterward).
      [audio.correct, audio.wrong, audio.levelup].forEach((a) => {
        const wasMuted = a.muted;
        a.muted = true;
        const p = a.play();
        if (p && typeof p.then === 'function') {
          p.then(() => {
            a.pause();
            a.currentTime = 0;
            a.muted = wasMuted;
          }).catch(() => {
            // Some browsers may still block — fall back gracefully
            a.muted = wasMuted;
          });
        }
      });
    } catch (e) {
      console.warn('Audio init failed:', e);
    }
  }

  // Internal: create and start a new BufferSource for the bg loop.
  // BufferSources can only play once, so each pause/resume creates a fresh one.
  function startBgSource() {
    if (!audio.ctx || !audio.bgBuffer) return;
    // Resume the context if it was suspended (mobile policies often suspend on background)
    if (audio.ctx.state === 'suspended') {
      audio.ctx.resume().catch(() => {});
    }
    // Stop any previous source first
    if (audio.bgSource) {
      try { audio.bgSource.stop(); } catch (e) {}
      audio.bgSource = null;
    }
    const src = audio.ctx.createBufferSource();
    src.buffer = audio.bgBuffer;
    src.loop = true;
    src.connect(audio.bgGain);
    src.start(0);
    audio.bgSource = src;
    audio.bgIsPlaying = true;
  }

  function stopBgSource() {
    if (audio.bgSource) {
      try { audio.bgSource.stop(); } catch (e) {}
      audio.bgSource = null;
    }
    audio.bgIsPlaying = false;
  }

  function playBgMusic() {
    if (!state.audioBg) return;
    if (!audio.ctx) return;
    if (!audio.bgBuffer) {
      // Decode still in flight — queue a play request
      audio.bgPendingPlay = true;
      return;
    }
    if (audio.bgIsPlaying) return; // already playing
    startBgSource();
  }

  function pauseBgMusic() {
    audio.bgPendingPlay = false;
    stopBgSource();
  }

  function stopBgMusic() {
    pauseBgMusic();
  }

  function playSfx(type) {
    if (!state.audioSfx) return;
    const sfx = type === 'correct' ? audio.correct : audio.wrong;
    if (!sfx) return;
    try {
      // Pause + reset first; some browsers reject overlapping play() calls
      sfx.pause();
      sfx.currentTime = 0;
      const p = sfx.play();
      if (p && typeof p.then === 'function') {
        p.catch((e) => console.warn('SFX play rejected:', e.message));
      }
    } catch (e) {
      console.warn('SFX play failed:', e);
    }
  }

  function playLevelUpSfx() {
    if (!state.audioSfx) return;
    if (!audio.levelup) return;
    try {
      audio.levelup.pause();
      audio.levelup.currentTime = 0;
      const p = audio.levelup.play();
      if (p && typeof p.then === 'function') {
        p.catch((e) => console.warn('Level-up SFX rejected:', e.message));
      }
    } catch (e) {
      console.warn('Level-up SFX failed:', e);
    }
  }


  // ============ AUDIO LIFECYCLE ============
  // Stops the background music when the app is closed, backgrounded,
  // or the phone is locked. Resumes when the user returns (if they had it on).
  function pauseBgForLifecycle() {
    if (audio.bgIsPlaying) {
      pauseBgMusic();
      audio.bgPausedByLifecycle = true;
    }
  }

  function resumeBgFromLifecycle() {
    if (audio.bgPausedByLifecycle && state.audioBg) {
      playBgMusic();
      audio.bgPausedByLifecycle = false;
    }
  }

  // visibilitychange: fires when tab/app is hidden or shown.
  // On Android, this fires when the user switches apps OR locks the phone.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      pauseBgForLifecycle();
    } else if (document.visibilityState === 'visible') {
      resumeBgFromLifecycle();
    }
  });

  // pagehide: fires when navigating away or the page is being unloaded.
  window.addEventListener('pagehide', () => {
    pauseBgMusic();
    if (audio.correct) audio.correct.pause();
    if (audio.wrong) audio.wrong.pause();
    if (audio.levelup) audio.levelup.pause();
  });

  // freeze: newer event for when page is put into back-forward cache.
  if ('onfreeze' in document) {
    document.addEventListener('freeze', () => {
      pauseBgMusic();
    });
  }

  // Settings toggle handlers
  function onToggleBgMusic(enabled) {
    state.audioBg = enabled;
    saveState();
    if (enabled) {
      playBgMusic();
    } else {
      stopBgMusic();
    }
  }

  function onToggleSfx(enabled) {
    state.audioSfx = enabled;
    saveState();
  }

  function onBgVolumeChange(val) {
    // val is 0-100, convert to 0-1
    const v = Math.max(0, Math.min(1, parseInt(val, 10) / 100));
    state.audioBgVol = v;
    if (audio.bgGain) audio.bgGain.gain.value = v;
    saveState();
  }
