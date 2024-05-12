// authRoutes.js
const express = require('express');
const { login, signup } = require('../controllers/authController');
const { bookings } = require('../controllers/bookingController');

const router = express.Router();
// POST /v1/auth/register - User signup
router.post('/register', signup);
// Login route
router.post('/login', login);


module.exports = router;
