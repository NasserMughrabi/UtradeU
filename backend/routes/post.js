/**
 * 
 * This module is a router for the posts section of UtradeU. This route will display the information 
 * needed for displaying a post. 
 * 
 * TODO: Currently, this will fetch basic text information of a post: Description, user who posted,
 * number of likes on the post, and whether or not the current user has liked the post. We will add
 * the image of the items to be sold and comments as well.  
 * 
 * @version 1.0.0
 * @author  Cameron Hanney
 * 
 */

// Set up therequired modules
const express = require('express')
const {Post, Comment} = require('../schemas/Post')

//connectDB()

const router = express.Router()

//Get request for acquiring posts and comments
router.get('/', async (req,res) =>
{    
    const post = await Post.find().populate('comments').exec()
    res.send(JSON.stringify(post))
})

// Creates a new post
router.post('/createPost', async(req,res) =>
{
    const newPost = await Post.create({
        User: req.params.User,
        description: req.params.description,
        likes: req.params.likes,
        liked: req.params.liked
    })
})

router.get('/:postID', async(req,res) =>
{    
    const post = await Post.findOne({_id : req.params.postID}).populate('comments').exec()
    res.send(JSON.stringify(post))
})

router.post('/leaveComment', async(req,res) => {

    const post = await Post.findOne({_id : req.params.postID}).exec()

    const newComment = await Comment.create({
        commenter: req.params.User,
        commentMessage: req.params.commentMessage,  
    });

    post.comments.push(newComment._id)
    post.save()

    console.log(post)
    console.log(newComment)
})
module.exports = router;