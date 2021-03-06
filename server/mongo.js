const { MongoClient } = require('mongodb');
const Post = require('./models/Post');
const Team = require('./models/Team');


class MongoBot {
  constructor() {
    const url =  "mongodb+srv://JobSeow:27Jalanmaskuning@trbccluster.lczf3.mongodb.net/trbc?retryWrites=true&w=majority"

    this.client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  }
  async init() {


          // Connect the client to the server
          await this.client.connect();
          // Establish and verify connection
          this.db = this.client.db('trbc');
          this.Post = new Post(this.db);
          this.Team = new Team(this.db);

     
     
          console.log("Connected successfully to server");

      
        } 
      
  
}

module.exports = new MongoBot();