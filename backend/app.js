// import moduels
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// app
const app = express();
const User = require('./schemas/User')
const Post = require('./schemas/Post')

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
  await user.save()
  console.log(user)
}