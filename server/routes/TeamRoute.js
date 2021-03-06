const { ObjectID } = require("bson");
const express = require("express");
const router = express.Router();
const mongo = require("../mongo");

router.get("/", (req, res) => {
  console.log(req);
  async function getAll() {
    const cursor = await mongo.Team.getAll();
    cursor.toArray().then((i) => {
      res.json(i);
    });
  }
  getAll();
});

router.post("/", (req, res) => {
  const team = {
    name: req.body.name,
    designation: req.body.designation,
    image: req.body.image,
  };

  async function setTeam() {
    const result = await mongo.Team.setTeam(team);
    res.json(result);
  }
  setTeam();
});

router.put("/", (req, res) => {
  console.log(req.body._id);
  const filter = { _id: ObjectID(req.body._id) };
  const team = {
    $set: {
      name: req.body.name,
      designation: req.body.designation,
      image: req.body.image,
    },
  };
  async function updateTeam() {
    const result = await mongo.Team.updateTeam(filter, team);
    res.json(result);
  }
  updateTeam();
});

router.delete('/', function (req, res) {
  console.log(req.body._id);
  const filter = { _id: ObjectID(req.body._id) };
  async function deleteTeam() {
    const result = await mongo.Team.deleteTeam(filter);
    res.json(result);
  }
  deleteTeam()

})


module.exports = router;
