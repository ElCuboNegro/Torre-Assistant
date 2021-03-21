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

app.use('/api/v1/user', passport.authenticate('jwt', { session: false }), userRoutes);

app.use('/api/v1/job', passport.authenticate('jwt', { session: false }), jobRoutes);

models.database.sync();

module.export = app;
