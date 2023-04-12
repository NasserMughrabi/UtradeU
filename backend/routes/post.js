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
const Post = require('../schemas/Post')

//connectDB()

const router = express.Router()

//Get request for acquiring posts
router.get('/', async (req,res) =>
{    
    var msg = ""
    const post = await Post.find().exec()
    // for(let i = 0; i < post.length; i++) {

    //     msg += "{user: " + post[i].user + ", "
    //     msg += "liked: " + post[i].liked + ", "
    //     msg += "likes: " + post[i].likes + ", "
    //     msg += "description: " + post[i].description + "}<br>"
    // }

    res.send(JSON.stringify(post))
})

router.get('/createPost', async (req,res) =>
{
    
})

router.post('/createPost', async(req,res) =>
{
    const newPost = await Post.create({
        User: req.params.User,
        description: req.params.description,
        likes: req.params.likes,
        liked: req.params.liked
    })
})

module.exports = router;