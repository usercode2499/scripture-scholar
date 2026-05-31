// ============================================================
// Scripture Scholar — Audio System
// ============================================================
// Background music AND short SFX all play through a single Web Audio
// context. This keeps everything OUT of the phone's OS media controls
// (no notification shade music app) and avoids the autoplay-unlock
// issues that plague HTML <audio> elements on mobile.
//
// Exports (global):
//   audio                  — the audio state object
//   initAudio()            — set up music + SFX. Call after user gesture.
//   playBgMusic()          — start/resume looped background music
//   pauseBgMusic()         — pause background music
//   stopBgMusic()          — alias for pauseBgMusic
//   playSfx('correct'|'wrong')
//   playLevelUpSfx()
//   playCompleteSfx()
//   onToggleBgMusic(bool)  — settings toggle handler
//   onToggleSfx(bool)
//   onBgVolumeChange(0-100)
//   pauseBgForLifecycle(), resumeBgFromLifecycle()
//
// Reads:  state.audioBg, state.audioSfx, state.audioBgVol (from main script)
// Calls:  saveState() (from main script)
// ============================================================

  const audio = {
    ctx: null,            // Single shared AudioContext
    bgBuffer: null,       // Decoded AudioBuffer for the music loop
    bgSource: null,       // Currently playing BufferSource (if any)
    bgGain: null,         // Gain node for music volume control
    bgIsPlaying: false,
    bgPausedByLifecycle: false,
    bgPendingPlay: false,
    sfxBuffers: {},       // { correct, wrong, levelup, complete } decoded AudioBuffers
    sfxGain: null,        // Shared gain node for SFX volume
    initialized: false
  };

  // Helper: fetch + decode an audio file into an AudioBuffer.
  // Returns a promise. Logs errors but doesn't throw.
  function loadAudioBuffer(url) {
    return fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.arrayBuffer();
      })
      .then((buf) => audio.ctx.decodeAudioData(buf))
      .catch((e) => {
        console.warn('Failed to load audio:', url, e.message || e);
        return null;
      });
  }

  function initAudio() {
    if (audio.initialized) return;
    audio.initialized = true;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) {
        console.warn('Web Audio API not supported');
        return;
      }
      audio.ctx = new AudioCtx();

      // Gain node for background music
      audio.bgGain = audio.ctx.createGain();
      audio.bgGain.gain.value = (typeof state.audioBgVol === 'number' ? state.audioBgVol : 0.6);
      audio.bgGain.connect(audio.ctx.destination);

      // Gain node for SFX (separate so volume can be controlled independently)
      audio.sfxGain = audio.ctx.createGain();
      audio.sfxGain.gain.value = 0.85; // a touch louder than music ceiling
      audio.sfxGain.connect(audio.ctx.destination);

      // Load background music
      loadAudioBuffer('background-music.mp3').then((buf) => {
        audio.bgBuffer = buf;
        if (audio.bgPendingPlay && buf) {
          audio.bgPendingPlay = false;
          startBgSource();
        }
      });

      // Load SFX in parallel
      loadAudioBuffer('correct-music.wav').then((buf) => { audio.sfxBuffers.correct = buf; });
      loadAudioBuffer('wrong-music.wav').then((buf) => { audio.sfxBuffers.wrong = buf; });
      loadAudioBuffer('levelup-music.mp3').then((buf) => { audio.sfxBuffers.levelup = buf; });
      loadAudioBuffer('complete-lesson.mp3').then((buf) => { audio.sfxBuffers.complete = buf; });
    } catch (e) {
      console.warn('Audio init failed:', e);
    }
  }

  // Internal: create and start a new BufferSource for the bg loop.
  // BufferSources can only play once, so each pause/resume creates a fresh one.
  function startBgSource() {
    if (!audio.ctx || !audio.bgBuffer) return;
    if (audio.ctx.state === 'suspended') {
      audio.ctx.resume().catch(() => {});
    }
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
      audio.bgPendingPlay = true;
      return;
    }
    if (audio.bgIsPlaying) return;
    startBgSource();
  }

  function pauseBgMusic() {
    audio.bgPendingPlay = false;
    stopBgSource();
  }

  function stopBgMusic() {
    pauseBgMusic();
  }

  // Generic SFX player — plays any loaded buffer through the SFX gain node.
  // Creates a fresh BufferSource each call (sources can only fire once).
  function playSfxBuffer(buffer) {
    if (!audio.ctx || !buffer) return;
    if (audio.ctx.state === 'suspended') {
      audio.ctx.resume().catch(() => {});
    }
    try {
      const src = audio.ctx.createBufferSource();
      src.buffer = buffer;
      src.connect(audio.sfxGain);
      src.start(0);
    } catch (e) {
      console.warn('SFX play failed:', e);
    }
  }

  function playSfx(type) {
    if (!state.audioSfx) return;
    const buffer = type === 'correct' ? audio.sfxBuffers.correct : audio.sfxBuffers.wrong;
    playSfxBuffer(buffer);
  }

  function playLevelUpSfx() {
    if (!state.audioSfx) return;
    playSfxBuffer(audio.sfxBuffers.levelup);
  }

  function playCompleteSfx() {
    if (!state.audioSfx) return;
    playSfxBuffer(audio.sfxBuffers.complete);
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

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      pauseBgForLifecycle();
    } else if (document.visibilityState === 'visible') {
      resumeBgFromLifecycle();
    }
  });

  window.addEventListener('pagehide', () => {
    pauseBgMusic();
  });

  if ('onfreeze' in document) {
    document.addEventListener('freeze', () => {
      pauseBgMusic();
    });
  }

  // ============ SETTINGS HANDLERS ============
  function onToggleBgMusic(enabled) {
    state.audioBg = enabled;
    if (enabled) playBgMusic();
    else pauseBgMusic();
    saveState();
  }

  function onToggleSfx(enabled) {
    state.audioSfx = enabled;
    saveState();
  }

  function onBgVolumeChange(val) {
    const v = Math.max(0, Math.min(1, parseInt(val, 10) / 100));
    state.audioBgVol = v;
    if (audio.bgGain) audio.bgGain.gain.value = v;
    saveState();
  }
