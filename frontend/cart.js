// cart.js – cart state management using localStorage
const CART_KEY = 'shopeasy_cart';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(name, price) {
  const cart = getCart();
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  saveCart(cart);
}

function removeFromCart(name) {
  saveCart(getCart().filter(i => i.name !== name));
}

function renderCart() {
  const cart  = getCart();
  const tbody = document.getElementById('cart-body');
  const total = document.getElementById('cart-total');
  if (!tbody) return;

  tbody.innerHTML = cart.map(item => `
    <tr>
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>₹${(item.price * item.qty).toLocaleString()}</td>
      <td><button onclick="removeFromCart('${item.name}'); renderCart();">Remove</button></td>
    </tr>
  `).join('');

  const sum = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  total.textContent = '₹' + sum.toLocaleString();
}

document.addEventListener('DOMContentLoaded', renderCart);
