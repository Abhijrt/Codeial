const nodeMailer = require('../../config/nodemailer');
exports.newComment = (comment) => {
    let htmlString = nodeMailer.renderTemplate({comment : comment},'/comments/new_comment.ejs');
    console.log("Inside new Comment");
    nodeMailer.tranporter.sendMail({
        from : '',//email that send the mail
        to : comment.user.email,
        subject : "New Comment Published",
        html : htmlString
    },(err,info) => {
        if(err){
            console.log("error in searching mail",info);
            return;
        }
        console.log("Message Sent!");
        return;
    });
}