require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

const loginLimiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 5, 
  message: { error: 'Terlalu banyak percobaan login, coba lagi nanti.' }
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1h' });
}

async function authenticate(req, res, next) {
  try {
    const token = req.cookies[process.env.COOKIE_NAME || 'token'];
    if (!token) return res.status(401).json({ error: 'Not authenticated' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}


app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).json({ error: 'All fields required' });
  const hashed = await bcrypt.hash(password, 10);
  try {
    const [result] = await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashed]);
    res.json({ success: true, id: result.insertId });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') return res.status(400).json({ error: 'Username or email already exists' });
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/api/login', loginLimiter, async (req, res) => {
  const { username, password } = req.body; 
  if (!username || !password) return res.status(400).json({ error: 'Username dan password harus diisi' });

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ? OR username = ? LIMIT 1', [username, username]);
    if (rows.length === 0) return res.status(401).json({ error: 'Username salah' }); 

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Password salah' }); 

    const token = generateToken({ id: user.id, username: user.username, email: user.email });

    res.cookie(process.env.COOKIE_NAME || 'token', token, {
      httpOnly: true,
      secure: false, 
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/dashboard', authenticate, async (req, res) => {
  res.json({ message: `Selamat datang ${req.user.username}`, user: req.user });
});

app.post('/api/logout', (req, res) => {
  res.clearCookie(process.env.COOKIE_NAME || 'token', {
    httpOnly: true,
    sameSite: 'lax',
    secure: false
  });
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});