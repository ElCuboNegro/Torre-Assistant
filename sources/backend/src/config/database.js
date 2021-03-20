'use strict';
const Sequelize = require('Sequelize')
const config = {
    username: __.DB.username,
    password: __.DB.password,
    database: __.DB.database,
    host: __.DB.host,
    port: __.DB.port,
    dialect: __DB.dialect,
    logging: true,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

const database =  new sequelize(
    config.database,
    config.username,
    config.password,
    config,
);

module.exports = database;