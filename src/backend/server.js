const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const { default: chalk } = require('chalk');

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
    hello: 'world'
  });
});

app.use('/v1/auth', authRoutes);
app.use('/v1/user', passport.authenticate('jwt', { session: false }), userRoutes);
app.use('/v1/job', passport.authenticate('jwt', { session: false }), jobRoutes);

models.database.sync();

module.exports = app;
