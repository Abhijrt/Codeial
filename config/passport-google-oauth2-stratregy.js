const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/users');

passport.use(new googleStrategy({
    clientID : '492562497322-0q3vfbu6h8nt2o254qfceldu21qlrabi.apps.googleusercontent.com',
    clientSecret : '3bmxxgkOMFU7_gWV64B1pbmJ',
    callbackURL : 'http://localhost:8000/users/auth/google/callback'
},function(accessToken,refreshToken,profile,done){
    User.findOne({email : profile.emails[0].value}).exec(function(err,user){
        if(err){
            console.log("Error in google Strategy");
            return ;
        }
        console.log(profile);
        if(user){
            return done(null,user);
        }
        else{
            User.create({
                name : profile.displayName,
                email : profile.emails[0].value,
                password : crypto.randomBytes(20).toString('hex')
            },function(err,user){
                if(err){
                    console.log("Error in creating user Strategy");
                    return ;
                }
                return done(null,user);
            });
        }
    });
}));

module.exports = passport;