// search.test.js – unit tests for search filter logic
// Run with:  node tests/search.test.js

const assert = require('assert');

function filterProducts(products, query) {
  return products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
}

const products = [
  { name: 'Wireless Headphones' },
  { name: 'Mechanical Keyboard' },
  { name: 'USB-C Hub' },
];

assert.strictEqual(filterProducts(products, 'key').length, 1, 'should match Keyboard');
assert.strictEqual(filterProducts(products, '').length, 3,   'empty query returns all');
assert.strictEqual(filterProducts(products, 'xyz').length, 0, 'no match returns empty');

console.log('All search tests passed ✓');
