// import moduels
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const cors = require("cors");
const multer = require('multer')
const fs = require('fs')
var storage = multer.diskStorage({
  destination : function(req,file,cb)
  {
    cb(null,'./uploads')
  },
  filename : function(req,file,cb) 
  {
    cb(null, file.originalname)
  }

})
//const upload = multer({dest:'uploads/'}).single("demo_image")
var upload = multer({storage: storage}).single("demo_image");
require("dotenv").config();

// app
const app = express();
const User = require('./schemas/User')
const Post = require('./schemas/Post')
const Comment = require('./schemas/Post')
app.use(bodyParser.json());

// db
const connectDB = require('./config/dbConn')
connectDB()

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

app.use('/uploads', express.static('uploads'));

app.get('/uploads/:imageName', (req, res) => {
  // do a bunch of if statements to make sure the user is 
  // authorized to view this image, then

  const imageName = req.params.imageName
  const readStream = fs.createReadStream(`uploads/${imageName}`)
  readStream.pipe(res)
})


//This might be a route, idk I'll think about it later
app.post('/createPost', async (req, res) =>
{
  //instead of req.params, use req.body to get the stuff from the front end
  
  // if(req.file)
  // {
    //console.log("yes this has an image")
    upload(req, res, (err) => {
      if(err) {
        res.status(400).send("Something went wrong!");
      }
      res.send(req.file);
    })
  //}


  const users = await User.find({}).exec();
  const posts = await Post.find({}).exec();
  const newUser = users.at(posts.length % 5);
  //console.log(newUser)
  const newPost = await Post.create({
    user : newUser.firstName + " " + newUser.lastName,
    description: req.body.description,
    likes : req.body.likes,
    liked : req.body.liked,
    pictureURL : req.file.filename
  })
  console.log(newPost)
})

app.post('/image', async(req, res) =>
{
  upload(req,res, (err) =>
  {
    if(err)
    {
      res.status(400).send("something went wrong")
    }
    res.send(req.file)
  })
})

//routes

const profileRouter = require('./routes/profile')
app.use("/profile", profileRouter)

const postRouter = require('./routes/post')
app.use("/posts", postRouter)

// port
const port = process.env.PORT | 8080;

// listener
const server = app.listen(port, () =>
  console.log(`server is running on port ${port}`)
);

//run();
async function run()
{
  const user = await User.create({firstName : "Jacob" , lastName : "Day"})
  //await user.save()
  console.log(user)
}
