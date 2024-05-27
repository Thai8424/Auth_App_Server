import bcrypt from 'bcrypt';

import User from '../models/user.js';
import ErrorWithStatusCode from '../utils/errors.js';

const signUp = async (userData) => {
    const exitedUser = await User.findOne({
        where: { email: userData.email },
    });

    if (exitedUser !== null) {
        throw new ErrorWithStatusCode('Email is already exists', 401);
    }
    const user = await User.create(userData);

    return user;
};

const signIn = async (account) => {
    try {
        // Find the user by email
        const user = await User.findOne({
            where: { email: account.email },
        });

        // Check if the user exists
        if (!user) {
            throw new ErrorWithStatusCode('Incorrect email or password', 400);
        }

        // Check if the user has a password
        if (!user.password) {
            throw new ErrorWithStatusCode('User has no password set', 400);
        }

        // Compare the provided password with the stored hashed password
        const isCorrectPassword = await bcrypt.compare(account.password, user.password);

        // If the password does not match, throw an error
        if (!isCorrectPassword) {
            throw new ErrorWithStatusCode('Incorrect email or password', 400);
        }

        // Generate a token for the user
        const token = user.generateToken();

        // Return the token and user profile
        return { token, user };
    } catch (error) {
        console.error('Error during sign in:', error);
        throw new ErrorWithStatusCode(`Authentication error: ${error.message}`, 500);
    }
};

const AuthServices = { signIn, signUp };

export default AuthServices;
