const functions = require('firebase-functions');
const app = require('./src/server');

export.app = functions.https.onRequest(app);
