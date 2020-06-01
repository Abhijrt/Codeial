const passpost = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../models/users');
const env = require('./environment');

let opts = {
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken,
    secretOrKey : env.Google_JWT_Secret
}

passpost.use(new JwtStrategy(opts,function(jwtPayLoad,done){
    if(err){
        console.log("Error in finding using from JWT");
        return;
    }
    if(user){
        return done(null,user);
    }else{
        return done(null,false);
    }
}));

module.exports = passpost;