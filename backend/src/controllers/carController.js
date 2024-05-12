// carController.js

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',portpostgres :5,
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432, 
});

// Get all cars
const getAllCars = async (req, res) => {
  try {
    console.log('fetching all cars')
    const result = await pool.query('SELECT * FROM cars');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ error: 'An error occurred while fetching cars' });
  }
};

// Get car by ID
const getCarById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM cars WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching car:', error);
    res.status(500).json({ error: 'An error occurred while fetching car' });
  }
};
const rentCar = async (req, res) => {
    console.log('renting a cars')

    const { userId, carId, bookingDate, dropDate } = req.body;
    if (!userId) {
        return res.status(400).json({ error: 'Please make sure you are logged in' });
      }
    
    
    
    try {
      // Update car availability
      await pool.query('UPDATE cars SET is_currently_booked = true WHERE id = $1', [carId]);
  
      // Add booking to history
      await pool.query('INSERT INTO booking_history (user_id, car_id, booking_date, drop_date) VALUES ($1, $2, $3, $4)', [userId, carId, bookingDate, dropDate]);
  
      res.status(200).json({ message: 'Car rented successfully and added to booking history' });
    } catch (error) {
      console.error('Error renting car:', error);
      res.status(500).json({ error: 'An error occurred while renting car' });
    }
  };

module.exports = { getAllCars, getCarById, rentCar };
