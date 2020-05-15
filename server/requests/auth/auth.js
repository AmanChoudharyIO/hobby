const Joi = require('joi');

const schemas = {
  register: Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().email().required(),
    mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/),
    password: Joi.string().required(),
    repeatPassword: Joi.string().required().valid(Joi.ref('password'))
  }),
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })
};

module.exports = schemas;
