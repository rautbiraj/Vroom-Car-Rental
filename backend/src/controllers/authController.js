// authController.js
const bcrypt = require('bcrypt');
const pool = require('../config/db');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Retrieve user from the database based on email
    const user = await pool.query('SELECT * FROM "user" WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      // User not found
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare provided password with hashed password from the database
    const match = await bcrypt.compare(password, user.rows[0].password);

    if (!match) {
      // Passwords do not match
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Successful login
    return res.status(200).json({ message: 'Login successful', user: user.rows[0] });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'An error occurred during login' });
  }
};

module.exports = { login };
