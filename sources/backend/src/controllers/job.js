'use strict';
const db = require('../models');
const jwt = require('jsonwebtoken');
const api = require('../api/torre')
const Job = db.Job;
const prefferences = db.Prefferences;

let controller = {
    getOffers: async (req, res) => {
            //TODO
    },
    getOfferDetails: async(req, res) => {
            //TODO
    },
    postApplication: async(req, res) => {
            //TODO
    }
}
module.exports = controller;