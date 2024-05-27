import { celebrate, Joi, Segments } from 'celebrate';

const signUpValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    userName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const signInValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

export { signUpValidator, signInValidator };