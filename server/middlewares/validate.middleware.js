const Joi = require('joi');
const validate = (schema, property) => {
  return (req, res, next) => {
    const {error} = Joi.validate(req[property], schema, {abortEarly: false});
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const {details} = error;
      const message = details.map(i => i.message).join(',');

      console_log(message, 2);
      res.status(422).json({error: message})
    }
  }
}
module.exports = validate;
