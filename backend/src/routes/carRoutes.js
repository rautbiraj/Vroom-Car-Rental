const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Get all cars
router.get('/cars', carController.getAllCars);

// Get car by ID
router.get('/cars/:id', carController.getCarById);

// Rent a car
router.post('/rent/:carId', carController.rentCar);

module.exports = router;
