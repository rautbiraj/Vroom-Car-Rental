// server.js
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const express = require('express');
const corsMiddleware = require('./middleware/cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Apply CORS middleware
app.use(corsMiddleware);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount auth routes
app.use('/v1/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
