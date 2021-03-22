const {environment} = require('../config/config');

const JwtStrategy = require('passport-jwt').Strategy;
const {ExtractJwt} = require('passport-jwt');

const db = require('../models');
const {User} = db;

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = environment.JWT.SECRET_KEY;

module.exports = (passport) => {
  passport.use(
      new JwtStrategy(opts, async (jwt, done) => {
        try {
          const user = await User.findAll({where: {email: jwt.email}});

          if (user.length > 0) {
            return done(null, user);
          }

          return done(null, false);
        } catch (ex) {
          console.error(ex);
        }
      }),
  );
};
