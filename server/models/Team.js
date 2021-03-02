const mongoose = require('mongoose')
const TeamSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },image:String


})
module.exports = mongoose.model('Team',TeamSchema)