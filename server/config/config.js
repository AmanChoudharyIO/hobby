const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

//Validate files through requests
const envVarsSchema = rootRequire('requests/config/envVars.schema');

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.SERVER_PORT,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  debug: envVars.NODE_DEBUG,
  jwtSecret: envVars.JWT_SECRET,
  frontend: envVars.MEAN_FRONTEND || 'angular',
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT
  }
};

module.exports = config;
