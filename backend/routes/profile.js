/**
 * This module is a router for the profiles portion of the UtradeU website. The purpose of this route is to 
 * allow users to view profiles of themselves or other users. They will also be able to interact with certain portions
 * of a user's profile like their current listings, requests, leave ratings, chat with the user, etc...
 *
 *
 * @link   URL
 * @file   This files defines the profile.js class.
 * @author Jacob Day
 * @since  x.x.x
 */


//Set up the required modules 
const express = require('express')
const mongoose = require('mongoose')
const User = require('../schemas/User')
const connectDB = require('../config/dbConn')

//establish connection to the database

//connectDB()

const router = express.Router()

//what is going to show when nothing follows /profile in the URL
router.get('/', async (req,res) =>
{
    res.send("I am a stegosaurus")
})

//get a specific user with the Firstname after /profile in the URL (example: /profile/Jacob will get the profile for Jacob)
//will have to discuss with Nasser how we want to view a specific profile, possibly by uID???
router.get('/:firstName', async (req,res) =>
{
    //this method needs to be async because the findOne() method returns a query and we need the result back before we can move on
    const user = await User.findOne({firstName : req.params.firstName}).exec()
    res.send(JSON.stringify(user))
})


//export this router so other modules can use it
module.exports = router;