const express = require("express");
const app = express();
const mongo = require('./Mongo');
const cors = require('cors')
var bodyParser = require('body-parser')
require("dotenv/config");

const postRoute = require("./routes/PostRoute");

const teamRoute = require("./routes/TeamRoute");
const outreachRoute = require("./routes/OutreachRoute");
const serviceRoute = require("./routes/ServiceRoute");
app.use(cors())
app.use(bodyParser.json())
app.use("/posts", postRoute);
app.use("/team", teamRoute);
app.use("/outreach", outreachRoute);
app.use("/service", serviceRoute);

//routes
app.get("/", (req, res) => {
  res.send("we are home");
});

async function start() {
  await mongo.init();
}
start();


app.listen(8080);


//start listening to the server

