// Client-side product search
document.addEventListener('DOMContentLoaded', () => {
  const box   = document.getElementById('search-box');
  const items = document.querySelectorAll('#product-list li');

  box.addEventListener('input', () => {
    const query = box.value.toLowerCase();
    items.forEach(li => {
      const name = li.dataset.name.toLowerCase();
      li.style.display = name.includes(query) ? '' : 'none';
    });
  });
});

// debounce helper (added after code review feedback)
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
