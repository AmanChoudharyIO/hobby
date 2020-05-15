const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler')
const validateMiddleware = rootRequire('middlewares/validate.middleware');
const userController = rootRequire('controllers/user.controller');
const authController = rootRequire('controllers/auth.controller');
const authSchema = rootRequire('requests/auth/auth');

const router = express.Router();
module.exports = router;

router.post('/register', validateMiddleware(authSchema.register, 'body'), asyncHandler(register), login);
router.post('/login', validateMiddleware(authSchema.login, 'body'), passport.authenticate('local', { session: false }), login);
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
