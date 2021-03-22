'use strict';
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user')

router.get('/me', UserController.me);

module.exports = router;
