'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const api = require('../api/torre');

const db = require.main.require('./models');
const user = db.user;

module.exports = {
    
    accountSync: async(req, res) => {
        try {
            //TODO
        } catch(e) {
            console.error(e);
            return res.status(500).json({error: `${e}`})
        }
    },
    login: async(req, res) => {
        try {
            //TODO
        } catch(e) {
            console.error(e);
            return res.status(401).json({error: `${e}`})
        }
    },
    accountDeletion: async(req, res) => {
        try {
            //TODO
        } catch(e) {
            console.error(e);
            return res.status(403).json({error: `${e}`})
        }
    }
}