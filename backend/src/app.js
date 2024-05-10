import router from './routes/authRoutes';
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use('/v1/auth', authRoutes);

// Other middleware and routes...

module.exports = app;
