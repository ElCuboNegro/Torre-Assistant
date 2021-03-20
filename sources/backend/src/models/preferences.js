'use strict';
const DataTypes = require('sequelize').DataTypes;
const Database = require.main.require('./config/database');

const Job = Database.define('Preferences', {
	torre_user: {
		type: DataTypes.STRING,
	},
	only_active: {
		type: DataTypes.BOOLEAN,
	},
	number_of_listings: {
		type: DataTypes.INTEGER,
	},
	skills: {
		type: DataTypes.TEXT,
	},
	onlyfreelance: {
		type: DataTypes.BOOLEAN,
	},
	compensation_min: {
		type: DataTypes.DOUBLE,
	},
	compensation_max: {
		type: DataTypes.DOUBLE,
	},
    as_routine: {
        type: DataTypes.BOOLEAN,
    }

});

module.exports = Job;