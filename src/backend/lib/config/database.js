'use strict';
const Sequelize = require('sequelize');
const { environment } = require('./config');

console.log(environment);

const config = {
	username: environment.DB.USERNAME,
	password: environment.DB.PASSWORD,
	database: environment.DB.DATABASE,
	host: environment.DB.HOST,
	port: environment.DB.PORT,
	dialect: environment.DB.DIALECT,
	logging: true,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};

const database = new Sequelize(
	config.database,
	config.username,
	config.password,
	config,
);

module.exports = database;
