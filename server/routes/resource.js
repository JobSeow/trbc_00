const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    Resource.find({}).then((data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  const resource = new Resource({
    title: req.body.title,
    description: req.body.description,
    file: req.body.file,
  });

  resource
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
    file: req.body.file,
  }
  Resource.findByIdAndUpdate({ _id: req.body._id }, update, (err,data)=>{
       if(err){
       console.log(err)
       }
   });
  const doc=  Resource.findOne({_id: req.body._id});
  console.log(doc)

});
module.exports = router;
