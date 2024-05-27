// const express = require('express');
// const cors = require('cors');
// const { sequelize } = require('./models');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const authRoutes = require('./routes/authRoutes');
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, async () => {
//   console.log(`Server is running on port ${PORT}`);
// });

/* eslint-disable no-console */
import app from './app.js';

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
