const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  username: {
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
module.exports = mongoose.model('User', userSchema);
