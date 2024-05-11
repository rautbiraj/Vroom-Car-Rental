const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',portpostgres :5,
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: 5432, // Default PostgreSQL 
});

// Example query
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Current date and time:', res.rows[0].now);
  }
  pool.end(); // Close the pool
});

