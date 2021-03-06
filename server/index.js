const express = require("express");
const app = express();
const mongo = require('./mongo');
const cors = require('cors')
var bodyParser = require('body-parser')
require("dotenv/config");

const postRoute = require("./routes/PostRoute");
const userRoute = require("./routes/user");
const teamRoute = require("./routes/TeamRoute");
const outreachRoute = require("./routes/outreach");
app.use(cors())
app.use(bodyParser.json())
app.use("/posts", postRoute);
app.use("/user", userRoute);
app.use("/team", teamRoute);
app.use("/outreach", outreachRoute);

//routes
app.get("/", (req, res) => {
  res.send("we are home");
});

async function start() {
  // other app startup stuff...
  await mongo.init();
  // other app startup stuff...
}
start();


app.listen(8080);


//start listening to the server

