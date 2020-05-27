const Post = require('../../../models/post');
const Comment = require('../../../models/comment');

module.exports.index = async function(req,res){

    try{
        let posts = await Post.find({}).populate('user').populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });
        return res.json(200,{
            message : "List of Posts",
            posts : posts
        });
    }catch(err){
        return res.json(200,{
            message : "error in index"
        })
    }
}


module.exports.destroy = async function (req, res) {
    try {
        let post = await Post.findById(req.params.id);
        if (post.user == req.user.id) {
            post.remove();
            await Comment.deleteMany(
                { post: req.params.id });
            if (req.xhr) {
                return res.status(200).json({
                    data: {
                        post_id: req.params.id
                    },
                    message: "Post deleted"
                });
            }

            // req.flash('success', 'Post and associated comments deleted!');

            return res.json(5000,{
                message : "Internal Server Error"
            });
        }
        else {
            req.flash('error', err);
            return res.json(401,{
                message : "You can not delete this post"
            });
        }
    } catch (err) {
        console.log(err);
        return;
    }
}