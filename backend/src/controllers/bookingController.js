const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: 5432,
});

// Get booking history by user ID
const getBookingHistoryByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(`
      SELECT bh.*, c.car_name
      FROM booking_history bh
      INNER JOIN cars c ON bh.car_id = c.id
      WHERE bh.user_id = $1
    `, [userId]);
    console.log(result, 'result while fetching booking history');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching booking history:', error);
    res.status(500).json({ error: 'An error occurred while fetching booking history' });
  }
};

// Get booking history by car ID
const getBookingHistoryByCarId = async (req, res) => {
  const { carId } = req.params;
  try {
    const result = await pool.query('SELECT * FROM booking_history WHERE car_id = $1', [carId]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching booking history:', error);
    res.status(500).json({ error: 'An error occurred while fetching booking history' });
  }
};

// Add booking to history
const addBookingToHistory = async (req, res) => {
  const { userId, carId, bookingDate, dropDate, pickupLocation, dropLocation } = req.body;
  try {
    await pool.query(`
      INSERT INTO booking_history (user_id, car_id, booking_date, drop_date, pickup_location, drop_location)
      VALUES ($1, $2, $3, $4, $5, $6)
    `, [userId, carId, bookingDate, dropDate, pickupLocation, dropLocation]);
    res.status(201).json({ message: 'Booking added to history successfully' });
  } catch (error) {
    console.error('Error adding booking to history:', error);
    res.status(500).json({ error: 'An error occurred while adding booking to history' });
  }
};

module.exports = { getBookingHistoryByUserId, getBookingHistoryByCarId, addBookingToHistory };
