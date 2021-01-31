const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = mongoose.Schema({
  content: {
    type: String
  },
  verified: {
    type: Boolean,
    default: false
  },
  name: {
    type: String
  },
  image: {
    type: String
  },
  Date: {
    type: String,
    default: new Date()
  }
});
module.exports = mongoose.model('Forum', forumSchema);
