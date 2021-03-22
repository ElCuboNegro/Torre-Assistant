'use strict';

const {Router} = require('express');
const UserController = require('../controllers/user');

const router = new Router();

router.get('/me', UserController.me);

module.exports = router;
