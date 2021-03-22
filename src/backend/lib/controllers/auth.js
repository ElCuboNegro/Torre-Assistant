'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const api = require('../api/torre');
const {environment} = require('../config/config');

const db = require('../models');
const {User} = db;

module.exports = {
  async register(req, res) {
    try {
      const {email, password, torre_user: torreUser} = req.body;
      const user = await User.findAll({where: {email}});

      if (user.length > 0) {
        throw new Error('Email already exists!');
      }
      await api.getBioInfo(torreUser);
      const newUser = {email, password, torre_user: torreUser};
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newUser.password, salt);

      newUser.password = hash;
      const response = await User.create(newUser);

      response.password = undefined;

      return res.status(200).json({data: response});
    } catch (ex) {
      console.error(ex);

      return res.status(500).json({error: `${ex}`});
    }
  },

  async login(req, res) {
    try {
      const {email, password} = req.body;
      const user = await User.findAll({where: {email}});

      if (user.length === 0) {
        throw new Error('The user account doesn\'t exists!');
      }
      const {torre_user: torreUser} = user[0].dataValues;
      const originalPassword = user[0].dataValues.password;
      const isMatch = await bcrypt.compare(password, originalPassword);

      if (isMatch) {
        const {id} = user[0].dataValues;
        const payload = {id, email, torre_user: torreUser};

        const token = jwt.sign(payload, environment.JWT.SECRET_KEY,
            {expiresIn: 36_000});

        return res.json({
          success: true,
          token,
        });
      }
      throw new Error('Incorrect password!');
    } catch (ex) {
      console.error(ex);

      return res.status(401).json({error: `${ex}`});
    }
  },
};
