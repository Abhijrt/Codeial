const User = require('../models/users');
module.exports.profile = function(req,res){
    return res.end("<h1>User Profile</h1>");
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title : "Sign UP"
    });
}


module.exports.signIn = function(req,res){
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
    return res.redirect('/');
}