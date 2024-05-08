// routes/health.js
const express = require('express');
const router = express.Router();
const pool = require('../config/db'); // Assuming you have a db configuration file

router.get('/health', async (req, res) => {
    try {
        // Attempt to connect to the database
        await pool.query('SELECT 1');

        // If the query succeeds, the database is connected
        res.status(200).json({ status: 'Database connected' });
    } catch (error) {
        // If there's an error, the database connection has failed
        console.error('Database connection error:', error);
        res.status(500).json({ error: 'Database connection error' });
    }
});

module.exports = router;
