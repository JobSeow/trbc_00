const express = require("express");
const router = express.Router();


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
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  }
   Outreach.findByIdAndUpdate({ _id: req.body._id }, update, (err,data)=>{
       if(err){
       console.log(err)
       }
   });
  const doc=  Outreach.findOne({_id: req.body._id});
  console.log(doc)
//   res.json(doc);



//   doc.save().then((data) => {
//     res.json(data);
//   });
});
module.exports = router;