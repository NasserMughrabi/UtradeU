const express = require('express')

const mongoose = require('mongoose')

const User = require('../User')

const connectDB = require('../config/dbConn')

connectDB()

const router = express.Router()

router.get('/', async (req,res) =>
{
    res.send("I am a stegosaurus")
    console.log(potato)
})

router.get('/:firstName', async (req,res) =>
{
    console.log(req.params.firstName)
    const user = await User.findOne({firstName : req.params.firstName}).exec()
    res.send(user.firstName + " " + user.lastName)
})



module.exports = router;