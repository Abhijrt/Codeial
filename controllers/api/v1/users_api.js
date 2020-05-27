const User = require('../../../models/users');
const jwt = require('jsonwebtoken');

module.exports.createSession = async function(req,res){
    try{
        let user = await User.findOne({email : req.body.email});

        if(!user || user.password != req.body.password){
            return res.json(422,{
                message : "Invalid Username/Password"
            });
        }
        return json(200,{
            message : "Sign in SuccessFully",
            data : {
                token : jwt.sign((await user).toJSON(),'codeial',{expiresIn :'100000'});
            }
        })
    }catch(err){

    }
}