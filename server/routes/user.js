const express = require('express');

const router = express.Router();


router.post("/",(req,res)=>{
    const user = new User({
        username:req.body.username,
        password:req.body.password
    })

    user.save()

    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json(err)
    })
})
router.get("/",(req,res)=>{
    User.find({})
    .then((data)=>{
        res.json(data)
    })

})
module.exports = router;