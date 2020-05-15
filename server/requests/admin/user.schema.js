const Joi = require('joi');

const schemas = {
  create: Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().email(),
    mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/),
    password: Joi.string().required(),
    repeatPassword: Joi.string().required().valid(Joi.ref('password'))
  }),
  list: {
    page: Joi.number().required(),
    pageSize: Joi.number().required()
  },
  details: {
    id: Joi.number().required(),
  }
};

module.exports = schemas;
