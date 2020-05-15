const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const validate = rootRequire('middlewares/validate.middleware');
const userController = rootRequire('controllers/user.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/users')
  .post(asyncHandler(insert));


async function insert(req, res) {
  let user = await userController.insert(req.body);
  res.json(user);
}
