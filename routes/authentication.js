import express from 'express';
import {
  signUpValidator,
  signInValidator
} from '../middleware/auth.js';

import AuthServices from '../services/authentication.js';

const authRouter = express.Router();

authRouter.post(
  '/signUp',
  signUpValidator,
  async (req, res, next) => {
    try {
      const userData = req.body;
      const user = await AuthServices.signUp(userData);

      res.json({
        message: 'Sign up successfully',
        user,
      });
    } catch (error) {
      next(error);
    }
  },
);

authRouter.post(
  '/signIn',
  signInValidator,
  async (req, res, next) => {
    try {
      const userData = req.body;
      const { user, token } = await AuthServices.signIn(userData);

      res.json({
        message: 'Sign in successfully',
        token,
        user,
      });
    } catch (error) {
      next(error);
    }
  },
);

export default authRouter;