const express = require('express');
const asyncHandler = require('express-async-handler')
const passport = require('passport');
const userController = rootRequire('controllers/user.controller');
const authController = rootRequire('controllers/auth.controller');

const router = express.Router();
module.exports = router;

router.post('/register', asyncHandler(register), login);
router.post('/login', passport.authenticate('local', { session: false }), login);
router.get('/me', passport.authenticate('jwt', { session: false }), login);


async function register(req, res, next) {
  let user = await userController.insert(req.body);
  user = user.toObject();
  delete user.hashedPassword;
  req.user = user;
  next()
}

function login(req, res) {
  let user = req.user;
  let token = authController.generateToken(user);
  res.json({ user, token });
}
