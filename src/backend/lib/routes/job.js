'use strict';

const {Router} = require('express');
const JobController = require('../controllers/job');

const router = new Router();

router.get('/offers/:offset', JobController.getOffers);
router.get('/all/offers/', JobController.getAllOffers);
router.post('/save/offers/', JobController.saveOffers);

module.exports = router;
