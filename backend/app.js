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
app.use(bodyParser.json());

// db
const connectDB = require('./config/dbConn')

connectDB()
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("DB CONNECTED"))
//   .catch((error) => console.log(`DB Connection Error ${error}`));

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//This might be a route, idk I'll think about it later
app.post('/createPost', async (req, res) =>
{
  //instead of req.params, use req.body to get the stuff from the front end
  const newPost = await Post.create({
    description: req.body.content,
    likes : req.body.likes
  })
  //console.log(newPost)
})

// routes

const profileRouter = require('./routes/profile')
app.use("/profile", profileRouter)

const postRouter = require('./routes/post')
app.use("/post", postRouter)

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
