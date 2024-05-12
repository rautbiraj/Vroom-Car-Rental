// authController.js
const bcrypt = require('bcrypt');
const pool = require('../config/db');

// Function to handle user signup
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await pool.query('SELECT * FROM "user" WHERE email = $1', [email]);

    if (existingUser.rows.length > 0) {
      // User with this email already exists
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database with role_id 2 for regular users
    const query = 'INSERT INTO "user" (name, email, password, role_id) VALUES ($1, $2, $3, $4)';
    console.log(query,[name, email, hashedPassword, 2])
    await pool.query(query, [name, email, hashedPassword, 2]); // Assuming role_id 2 is for regular users

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    if (error.code === '23505') { // PostgreSQL unique constraint violation error code
      return res.status(400).json({ error: 'Email is already registered' });
    } else {
      return res.status(500).json({ error: 'An error occurred during signup' });
    }
  }
};
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

module.exports = { login, signup };
