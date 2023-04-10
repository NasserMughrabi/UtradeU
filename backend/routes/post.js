const express = require('express')

const mongoose = require('mongoose')

const Post = require('../Post')

const connectDB = require('../config/dbConn')

connectDB()

const router = express.Router()

router.get('/', async (req,res) =>
{    
    var msg = ""
    const post = await Post.find().exec()
    console.log("found post with length", post.length)
    for(let i = 0; i < post.length; i++) {

        msg += "{<br>User: " + post[i].user + "<br>"
        msg += "Liked: " + post[i].liked + "<br>"
        msg += "Likes: " + post[i].likes + "<br>"
        msg += "Description: " + post[i].description + "<br>}<br>"
    }

    res.send(msg)
})



module.exports = router;