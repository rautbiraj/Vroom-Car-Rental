import router from './routes/authRoutes';
const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use('/v1/auth', authRoutes);
// Mount carRoutes


module.exports = app;
