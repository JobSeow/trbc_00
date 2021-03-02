const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')
require("dotenv/config");



const postsRoute = require("./routes/posts");
const userRoute = require("./routes/user");
const teamRoute = require("./routes/team");
const outreachRoute = require("./routes/outreach");
app.use(cors())
app.use(bodyParser.json());
app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/team", teamRoute);
app.use("/outreach", outreachRoute);

//routes
app.get("/", (req, res) => {
  res.send("we are home");
});



mongoose.connect(
  "mongodb://JobSeow:27Jalanmaskuning@trbccluster-shard-00-00.lczf3.mongodb.net:27017,trbccluster-shard-00-01.lczf3.mongodb.net:27017,trbccluster-shard-00-02.lczf3.mongodb.net:27017/trbc?ssl=true&replicaSet=atlas-19on5g-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);
mongoose.connection.on("connected", () => {
  console.log("connected");
});

//start listening to the server
app.listen(8080);
