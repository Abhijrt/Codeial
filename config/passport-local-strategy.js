const User = require('../models/users');
const passport = require('passport');
const LocalStrategy = require('passport-local');

// authentication using passport
passport.use(new LocalStrategy({
    usernameField : 'email'
},function(email,password,done){
    // find a user and establish the identity
    User.findOne({email : email},function(err,user){
        if(err){
            console.log("error in finding the usr");
            return done(err);
        }
        if(!user || user.password != password){
            console.log("Invalid username/password");
            return done(null,false);
        }
        // if user found
        return done(null,user);
    });
}
));


// seralizing the use to decide which key is to be kept in the cookie
passport.serializeUser(function(user,done){
    done(null,user.id);
});

// deseralixing the user from the key in the cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log("error in finding the user");
            return done(err);
        }
        return done(null,user);
    });
});

// chek if the user is authenticated
passport.checkAuthentication = function(req,res,next){
    // if the user is autnencated then pass on the neyt function controllers action
    if(req.isAuthenticated()){
        return next();
    }

    // if the user is not signed in 
    return res.redirect('/users/sign_in');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;