'use strict'
require('dotenv').config();
const packages = require.main.require('./../package.json');

global.__ = {
    NAME : packages.name,
    PORT : parseInt(process.env.PORT),
    VERSION : packages.version,
    DEBUG : process.env.DEBUG == "TRUE" ? true: false,

    PORT: parseInt(process.env.PORT),
    DB : {
        USERNAME: process.env.DB_USERNAME,
        PASSWORD : process.env.PASSWORD,
        DATABASE : process.env.DATABASE,
        HOST : process.env.HOST,
        PORT : process.env.PORT,
        DIALECT : process.env.DB_DIALECT,
    },

    JWT: {
        SECRET_KEY: process.env.SECRET_KEY,
    },
    
};