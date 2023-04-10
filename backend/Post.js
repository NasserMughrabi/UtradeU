const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    commenter : {
        type: String,
        require : true
    },
    comment : {
        type: String,
        require : true
    }
})

const PostSchema = new mongoose.Schema({
    user : {
        type: String,
        require : true
    },
    description : {
        type: String,
        require : true
    },
    likes : {
        type: Number,
        require : true
    },
    comments : {
        type: [CommentSchema],
        require : false
    },
    liked : {
        type: Boolean,
        require : true
    }
})


// PostSchema.statics.findByName = function(firstName)
// {
//     console.log("Reached new method")
//     // const user = this.where({firstName : new RegExp(firstName, 'i')})
//     // console.log(user)
//     const post = this.where({})
//     // return this.where({firstName : new RegExp(firstName, 'i')});
// }

module.exports = mongoose.model("Post", PostSchema)