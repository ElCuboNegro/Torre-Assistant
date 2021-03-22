'use strict';

const app = require('./server');
const functions = require('firebase-functions');

exports.api = functions.https.onRequest(app);
