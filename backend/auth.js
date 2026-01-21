// backend/auth.js – authentication route handlers (Express-style pseudocode)
// Passwords are hashed with bcrypt; JWT is signed with env-provided secret.

const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');
// const db  = require('./db');   // database connection

const SALT_ROUNDS = 12;

async function signup(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'All fields required.' });
  if (password.length < 8)          return res.status(400).json({ error: 'Password too short.' });

  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  // await db.query('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)', [name, email, hash]);
  return res.status(201).json({ message: 'Account created.' });
}

async function login(req, res) {
  const { email, password } = req.body;
  // const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  // if (!user || !(await bcrypt.compare(password, user.password_hash)))
  //   return res.status(401).json({ error: 'Invalid credentials.' });

  const token = jwt.sign({ sub: 'user_id_here', role: 'customer' },
                          process.env.JWT_SECRET,
                          { expiresIn: '7d' });
  return res.json({ token });
}

module.exports = { signup, login };
