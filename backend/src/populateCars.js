// populateCars.js

const { Pool } = require('pg');
const carsData = require('./carsData');

const pool = new Pool({
  user: 'postgres',portpostgres :5,
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: 5432, 
});

const insertCarQuery = `
  INSERT INTO cars (car_name, car_type, brand, seat_count, is_currently_booked) 
  VALUES ($1, $2, $3, $4, $5 )
`;

(async () => {
  try {
    for (const category in carsData) {
      for (const car of carsData[category]) {
        await pool.query(insertCarQuery, [
          car.car_name,
          car.car_type,
          car.brand,
          car.seat_count,
          car.is_currently_booked,
          // car.image
        ]);
      }
    }
    console.log('Cars data inserted successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error inserting cars data:', error);
    process.exit(1);
  }
})();
