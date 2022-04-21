const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const emailValidator = require('../middleware/emailValidator');
const passwordValidator = require('../middleware/passwordValidator');
const rateLimit = require('../middleware/rateLimit')

router.post('/signup', emailValidator, passwordValidator, userCtrl.signup);
router.post('/login', rateLimit, userCtrl.login);


module.exports = router;