// cart.test.js – unit tests for cart logic
const assert = require('assert');

// Mock localStorage
const store = {};
global.localStorage = {
  getItem: k => store[k] || null,
  setItem: (k, v) => { store[k] = v; },
};

// Inline cart functions (same as cart.js)
const CART_KEY = 'shopeasy_cart';
const getCart  = () => JSON.parse(localStorage.getItem(CART_KEY) || '[]');
const saveCart = c  => localStorage.setItem(CART_KEY, JSON.stringify(c));

function addToCart(name, price) {
  const cart = getCart();
  const ex   = cart.find(i => i.name === name);
  ex ? ex.qty++ : cart.push({ name, price, qty: 1 });
  saveCart(cart);
}

function removeFromCart(name) {
  saveCart(getCart().filter(i => i.name !== name));
}

// Tests
addToCart('Headphones', 1499);
assert.strictEqual(getCart().length, 1, 'cart should have 1 item');

addToCart('Headphones', 1499);
assert.strictEqual(getCart()[0].qty, 2, 'qty should increment');

addToCart('Keyboard', 3299);
removeFromCart('Headphones');
assert.strictEqual(getCart().length, 1, 'remove should work');

console.log('All cart tests passed ✓');
