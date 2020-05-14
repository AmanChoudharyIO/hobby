const bcrypt = require('bcrypt');
const Joi = require('joi');
const User = rootRequire('models/user.model');
const adminSchema = rootRequire('requests/admin/admin.schema');

//console_log(adminSchema.users.create);

module.exports = {
  insert
}

async function insert(user) {
  user = await Joi.validate(user, adminSchema.users.create, {abortEarly: false});
  console_die(user);
  console_log('Not Dead.');
  process.exit();
  user.hashedPassword = bcrypt.hashSync(user.password, 10);
  delete user.password;
  return await new User(user).save();
}
