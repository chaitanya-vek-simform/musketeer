// Client-side product search
document.addEventListener('DOMContentLoaded', () => {
  const box   = document.getElementById('search-box');
  const items = document.querySelectorAll('#product-list li');

  box.addEventListener('input', () => {
    const query = box.value.toLowerCase().trim();
    items.forEach(li => {
      const name = li.dataset.name.toLowerCase();
      li.style.display = name.includes(query) ? '' : 'none';
    });
  });
});
