'use strict';
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const UserController = require.main.require('./controllers/user');

router.get('/me', UserController.me);

module.exports = router;
