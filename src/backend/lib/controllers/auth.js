/* eslint-disable no-throw-literal */
'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const api = require('../api/torre');

const db = require.main.require('./models');
const User = db.User;

module.exports = {
  register: async (req, res) => {
    try {
      const {email, password, torreUser} = req.body;
      const user = await User.findAll({where: {email}});

      if (user.length) {
        throw 'Email already exists!';
      }
      await api.getBioInfo(torreUser);
      const newUser = {email, password, torreUser};
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newUser.password, salt);
      newUser.password = hash;
      const response = await User.create(newUser);
      response.password = undefined;
      return res.status(200).json({data: response});
    } catch (e) {
      console.error(e);
      return res.status(500).json({error: `${e}`});
    }
  },

  login: async (req, res) => {
    try {
      const {email, password} = req.body;
      const user = await User.findAll({where: {email}});
      if (!user.length) {
        throw 'The user account doesn\'t exists!';
      }
      const torreUser = user[0].dataValues.torreUser;
      const originalPassword = user[0].dataValues.password;
      const isMatch = await bcrypt.compare(password, originalPassword);

      if (isMatch) {
        const {id} = user[0].dataValues;
        const payload = {id, email, torreUser};

        const token = jwt.sign(payload, __.JWT.SECRET_KEY, {expiresIn: 36000});
        return res.json({
          success: true,
          token: token,
        });
      }
      throw 'Incorrect password!';
    } catch (e) {
      console.error(e);
      return res.status(401).json({error: `${e}`});
    }
  },
};
