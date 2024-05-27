import cors from 'cors';
import express from 'express';

import authRouter from './routes/authentication.js';
import userRouter from './routes/user.js';

const app = express();

// Enable CORS
app.use(cors());

// Parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Mount authentication routes
app.use('/api/authentication', authRouter);
app.use('/api/users', userRouter);

// Default route
app.use('/', (req, res) => {
  res.send('Login App API');
});

export default app;