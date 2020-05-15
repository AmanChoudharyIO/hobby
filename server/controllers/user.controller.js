const bcrypt = require('bcrypt');
const User = rootRequire('models/user.model');

module.exports = {
  insert
}

async function insert(user) {
  user.hashedPassword = bcrypt.hashSync(user.password, 10);
  delete user.password;
  return await new User(user).save();
}
