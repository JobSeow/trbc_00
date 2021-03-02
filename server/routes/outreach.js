const express = require("express");
const router = express.Router();
const Outreach = require("../models/Outreach");

router.get("/", (req, res) => {
    Outreach.find({}).then((data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  const outreach = new Outreach({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  });

  outreach
    .save()

    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.put("/", (req, res) => {
  console.log(req.body);
  const update ={
    name :req.body.name,
    designation : req.body.designation,
    image : req.body.image
  }
   Team.findByIdAndUpdate({ _id: req.body._id }, update, (err,data)=>{
       if(err){
       console.log(err)
       }
   });
  const doc=  Team.findOne({_id: req.body._id});
  console.log(doc)
//   res.json(doc);



//   doc.save().then((data) => {
//     res.json(data);
//   });
});
module.exports = router;
