'use strict';
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require.main.require('./models');
const user = db.User;

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = __.JWT.SECRET_KEY;

module.exports = passport => {
    passport.use(
        new JWTStrategy(
            options,
            async(jwt_payload, done) => {
                try{
                    let user = await User.findAll(
                        {
                            where: {
                                email: jwt_payload.email
                            }
                        }
                    );
                    if (user.length) {
                        return done( null, user );
                    }
                    return(null, false)

                } catch (e) {
                    console.error(e);
                }
            }
        )   
    )
}