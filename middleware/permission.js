import StatusCodes from 'http-status-codes';
import jwt from 'jsonwebtoken';

const isUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .send({ error: 'A token is required for authorization' });
        }

        const userData = jwt.verify(token, process.env.JWT_KEY);

        const user = await User.findOne({
            where: { id: userData.id, email: userData.email },
        });

        req.user = await UserServices.getProfile(user.id);

        return next();
    } catch (error) {
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ error: 'Invalid Credentials!' });
    }
};

export {
    isUser,
};
