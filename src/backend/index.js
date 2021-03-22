'use strict';

const admin = require('firebase-admin');
admin.initializeApp();

const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(
    () => {
      const express = require('express');
      const bodyParser = require('body-parser');
      const passport = require('passport');

      const models = require('./lib/models');

      const authRoutes = require('./lib/routes/auth');
      const userRoutes = require('./lib/routes/user');
      const jobRoutes = require('./lib/routes/job');

      const cors = require('cors');
      const app = express();

      app.use(cors());
      app.use(bodyParser.json());


      app.use(passport.initialize());

      require('./lib/config/passport')(passport);

      app.get('/', (_, response) => {
        response.json({
          hello: 'world',
        });
      });

      app.use('/v1/auth', authRoutes);
      app.use('/v1/user', passport.authenticate('jwt', {
        session: false,
      }), userRoutes);
      app.use('/v1/job', passport.authenticate('jwt', {
        session: false,
      }), jobRoutes);
      models.database.sync();
      module.exports = app;
    },
);
