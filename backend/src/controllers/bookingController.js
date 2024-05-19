
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: 5432,
});

// Function to get the role of a user by user ID
const getUserRoleByUserId = async (userId) => {
  try {
    const result = await pool.query('select role_id from "user" u where id =$1;', [userId]);
    console.log('User role query result:', result.rows); // Debugging line
    return result.rows[0]?.role_id;
  } catch (error) {
    console.error('Error fetching user role:', error);
    throw error;
  }
};

// Get booking history by user ID
const getBookingHistoryByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    // Fetch the user's role
    const roleId = await getUserRoleByUserId(userId);

    let query = '';
    let queryParams = [];

    // Check if the user is an admin (role_id = 2)
    if (roleId === 3) {
      // Admin: Fetch all booking history
      query = `
      SELECT bh.*, c.car_name, u.name
      FROM booking_history bh
      INNER JOIN cars c ON bh.car_id = c.id
      INNER JOIN "user" u ON bh.user_id  = u.id 
      `;
    } else {
      // Non-admin: Fetch booking history for the specific user
      query = `
        SELECT bh.*, c.car_name
        FROM booking_history bh
        INNER JOIN cars c ON bh.car_id = c.id
        WHERE bh.user_id = $1
      `;
      queryParams = [userId];
    }

    const result = await pool.query(query, queryParams);
    console.log(result.rows, 'result while fetching booking history');
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
