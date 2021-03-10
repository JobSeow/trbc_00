const { MongoClient } = require("mongodb");
const Post = require("./models/Post");
const Team = require("./models/Team");
const Outreach = require("./models/Outreach");
const Service = require("./models/Service");
require("dotenv").config();

class Mongo {
  constructor() {
    const url = process.env.DB_CONNECTION;

    this.client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.db ;
    this.Post ;
    this.Team ;
    this.Outreach;
    this.Service ;

  }
  async init() {
    // Connect the client to the server
    await this.client.connect();
    this.db = this.client.db("trbc");
    this.Post = new Post(this.db);
    this.Team = new Team(this.db);
    this.Outreach = new Outreach(this.db);
    this.Service = new Service(this.db);
    // Establish and verify connection
    
    console.log("Connected successfully to server");
  }
}

module.exports = new Mongo();
