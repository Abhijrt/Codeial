const User = require('../models/users');
module.exports.profile = function(req,res){
    User.findById(req.params.id,function(err,user){
        return res.render('user_profile',{
            title : "User Profile",
            profile_user : user
        });
    });
}

module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('profile');
    }
    return res.render('user_sign_up',{
        title : "Sign UP"
    });
}


module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('profile');
    }
    return res.render('user_sign_in',{
        title : "Sign In"
    });
}

module.exports.create = function(req,res){
    console.log(req.body);
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email : req.body.email},function(err,user){
        if(err){
            console.log("Error While Sign Up");
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("Error While Sign Up");
                    return;
                }
                return res.redirect('/users/sign_in');
            });
        }else{
            return res.redirect('back');
        }
    });
}
module.exports.createSession = function(req,res){
    req.flash('success',"Logged in successfully");
    return res.redirect('/');
}


module.exports.destroySession = function(req,res){
    req.flash('success',"You have logged Out");
    req.logout();
    return res.redirect('/');
}


module.exports.update = function(req,res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id,req.body,function(err,users){
            return res.redirect('back');
        });
    }else{
        return res.status(401,'Unauthorised');
    }
}