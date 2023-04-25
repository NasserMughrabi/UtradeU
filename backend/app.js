// import moduels
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const cors = require("cors");
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

//This might be a route, idk I'll think about it later
app.post('/createPost', async (req, res) =>
{
  //instead of req.params, use req.body to get the stuff from the front end
  const newPost = await Post.create({
    description: req.body.description,
    likes : req.body.likes
  })
  //console.log(newPost)
})

// routes

app.post("/createPost", async (req, res) => {
  const newPost = await Post.create({
    description: req.params.description,
    likes: req.params.likes,
  });
  console.log(newPost);
});

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
