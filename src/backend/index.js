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
      'use strict';
      require('./config/config');
      const express = require('express');
      const bodyParser = require('body-parser');
      const models = require('./models');
      const passport = require('passport');
      const authRoutes = require('./routes/auth');
      const userRoutes = require('./routes/user');
      const jobRoutes = require('./routes/job');
      const cors = require('cors');
      const app = express();

      app.use(cors());
      app.use(bodyParser.json());

      app.use(passport.initialize());

      require('./config/passport')(passport);

      app.use('/api/v1/auth', authRoutes);

      app.use('/api/v1/user',
          passport.authenticate('jwt', {session: false}), userRoutes);

      app.use('/api/v1/job',
          passport.authenticate('jwt', {session: false}), jobRoutes);

      models.database.sync().then((resp) => {
        app.listen(__.PORT, () => {
          if (__.DEBUG) console.log(__);
        });
      }).catch((error) => {
        console.error(error);
      });
    },
);
