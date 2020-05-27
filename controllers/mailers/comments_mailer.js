const nodeMailer = require('../../config/nodemailer');
exports.newComment = (comment) => {
    console.log("Inside new Comment");
    nodeMailer.tranporter.sendMail({
        from : '',//email that send the mail
        to : comment.user.email,
        subject : "New Comment Published",
        html : '<h1>Yup ! comment Publihes</h1>'
    },(err,info) => {
        if(err){
            console.log("error in searching mail",info);
            return;
        }
        console.log("Message Sent!");
        return;
    });
}