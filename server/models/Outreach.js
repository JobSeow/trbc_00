const mongoose = require("mongoose");

const OutreachSchema = mongoose.Schema({
  title: {
    type: String,

  },
  description: String,
  image: String,
});
module.exports = mongoose.model("Outreach", OutreachSchema);
