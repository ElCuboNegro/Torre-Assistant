'use strict';
const db = require('../models');
const jwt = require('jsonwebtoken');
const api = require('../api/torre');

let controller = {
    activeUser: async (req, res) => {
        try {
            //TODO
        } catch (e) {
            return res.status(500).json({ error: `${e}}` });
        }
    } 

}