// ============================================================
// Scripture Scholar — Visual Effects
// ============================================================
// Confetti popper and other celebratory visual effects.
//
// Exports (global):
//   fireConfetti() — burst of colored particles from screen center
// ============================================================

  // ============ CONFETTI ============
  // Vanilla-JS confetti popper. Creates a burst of small colored shapes from
  // the center of the screen that arc outward and fall with gravity.
  function fireConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    const colors = ['#c89b3c', '#f4d77b', '#fce078', '#a37d22', '#e3b855', '#faf6ed'];
    const shapes = ['square', 'circle', 'rect'];
    const PIECE_COUNT = 70;

    for (let i = 0; i < PIECE_COUNT; i++) {
      const piece = document.createElement('div');
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      piece.className = `confetti-piece confetti-${shape}`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];

      // Burst angle: spread over full 360°, slightly biased upward
      const angle = Math.random() * Math.PI * 2;
      const distance = 180 + Math.random() * 260;     // how far each piece flies
      const vx = Math.cos(angle) * distance;
      const vy = Math.sin(angle) * distance - 140;    // bias upward so they arc up first
      const rotation = (Math.random() - 0.5) * 1440;  // 0–720° of spin either way
      const fallDistance = 600 + Math.random() * 300; // gravity carries them down past the burst
      const duration = 2200 + Math.random() * 1200;
      const delay = Math.random() * 120;

      piece.style.setProperty('--vx', vx + 'px');
      piece.style.setProperty('--vy', vy + 'px');
      piece.style.setProperty('--rot', rotation + 'deg');
      piece.style.setProperty('--fall', fallDistance + 'px');
      piece.style.animationDuration = duration + 'ms';
      piece.style.animationDelay = delay + 'ms';

      container.appendChild(piece);
    }

    // Clean up the DOM once the animation has finished
    setTimeout(() => container.remove(), 4000);
  }

