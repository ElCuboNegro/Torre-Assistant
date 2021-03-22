const functions = require('firebase-functions');
const app = require('../src/backend/server');

exports.app = functions.https.onRequest(app);
