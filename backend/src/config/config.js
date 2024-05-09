module.exports = {
    PORT: process.env.PORT || 3000, // Default port is 3000
    JWT_SECRET: 'your_jwt_secret', // Replace with your JWT secret key
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://your_database_user:your_database_password@localhost:5432/your_database_name'
  };
  