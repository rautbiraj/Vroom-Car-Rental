const express = require('express');
const router = express.Router();

const bookingHistoryController = require('../controllers/bookingController');

// Get booking history by user ID
router.get('/booking-history/user/:userId', bookingHistoryController.getBookingHistoryByUserId);

// Get booking history by car ID
router.get('/booking-history/car/:carId', bookingHistoryController.getBookingHistoryByCarId);

// Add booking to history
router.post('/booking-history', bookingHistoryController.addBookingToHistory);

module.exports = router;
