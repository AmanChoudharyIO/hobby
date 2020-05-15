const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const validateMiddleware = rootRequire('middlewares/validate.middleware');
const userController = rootRequire('controllers/user.controller');
const adminSchema = rootRequire('requests/admin/admin');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }));

router.route('/admin/users').post(validateMiddleware(adminSchema.register, 'body'), asyncHandler(insert));

async function insert(req, res) {
  console_die(req.body);
  let user = await userController.insert(req.body);
  res.json(user);
}
