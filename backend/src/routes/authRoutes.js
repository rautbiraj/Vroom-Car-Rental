// authRoutes.js
const express = require('express');
const { login } = require('../controllers/authController');

const router = express.Router();
// POST /v1/auth/register - User signup
router.post('/register', signup);
// Login route
router.post('/login', login);

module.exports = router;
