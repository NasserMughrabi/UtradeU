const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    postID : {
        type: mongoose.Types.ObjectId,
        // ref: "Post"
    },
    commenter : {
        type: String,
        require : true
    },
    commentMessage : {
        type: String,
        require : true
    },
    timestamp : String
})

const PostSchema = new mongoose.Schema({
    user : {
        type: String,
        require : false
    },
    description : {
        type: String,
        require : true
    },
    likes : {
        type: Number,
        require : true
    },
    liked : {
        type: Boolean,
        require : false
    },
    pictureURL : {
        type: String,
        require : false
    },
    comments : [{type: mongoose.Types.ObjectId, ref: "Comment"}]        
})

// module.exports = mongoose.model("Post", PostSchema)

const Comment = mongoose.model("Comment", CommentSchema) 
const Post = mongoose.model("Post", PostSchema)
module.exports = {Comment, Post}