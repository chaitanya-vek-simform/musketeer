// auth.js – client-side form handling (no sensitive logic here)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form') || document.getElementById('signup-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        window.location.href = 'index.html';
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (err) {
      console.error('Network error:', err);
    }
  });
});
