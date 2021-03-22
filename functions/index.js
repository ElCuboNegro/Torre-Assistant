const functions = require('firebase-functions');
const app = require('../src/backend/server');

exports.api = functions.https.onRequest(app);
