// ---------- Album mosaic (abstract, generated — no real artwork) ----------
(function buildMosaic() {
  const mosaic = document.getElementById('mosaic');
  if (!mosaic) return;

  // A restrained palette drawn from the brand accent plus neutrals,
  // so the mosaic reads as "album grid" without depicting real covers.
  const palette = [
    '#4d63ff', '#2f3a66', '#1b1c26', '#f5f6fa',
    '#8892e8', '#0c0d13', '#3d5afe', '#20212c',
    '#c7ccff', '#14151d'
  ];

  const cols = window.innerWidth <= 880 ? 10 : 12;
  const rows = 9;
  const total = cols * rows;

  for (let i = 0; i < total; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    const color = palette[Math.floor(Math.random() * palette.length)];
    tile.style.background = color;

    // Occasionally add a subtle pulse to suggest "live" library data
    if (Math.random() < 0.08) {
      tile.classList.add('pulse');
      tile.style.animationDelay = (Math.random() * 3).toFixed(2) + 's';
    }
    mosaic.appendChild(tile);
  }
})();

// ---------- Beta signup form ----------
// NOTE: This currently just confirms client-side. To actually collect
// emails, wire the fetch() call below to your provider (Mailchimp,
// ConvertKit, Buttondown, or your own backend endpoint).
(function wireSignupForm() {
  const form = document.getElementById('signup-form');
  const note = document.getElementById('form-note');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();

    if (!email || !email.includes('@')) {
      note.textContent = 'Please enter a valid email address.';
      note.style.color = '#ff6b6b';
      return;
    }

    // ---- Replace this block with a real API call, e.g.: ----
    // await fetch('https://your-api.example.com/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email })
    // });

    note.textContent = "You're on the list. We'll be in touch.";
    note.style.color = '#4d63ff';
    form.reset();
  });
})();

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();
