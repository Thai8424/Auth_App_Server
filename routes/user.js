import express from 'express';

import {
    isUser,
} from '../middleware/permission.js';

const userRouter = express.Router();

userRouter.use(isUser);

userRouter.get('/auth', async (req, res) => {
    res.json(req.user);
});

export default userRouter;