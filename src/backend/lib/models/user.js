'use strict';

const {DataTypes} = require('sequelize');
const Database = require('../config/database');

const User = Database.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  torre_user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
