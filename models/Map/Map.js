const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapSchema = mongoose.Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  description: {
    type: String
  },
  verified: {
    type: Boolean,
    default: false
  },
  contact: {
    type: String
  },
  category: {
    type: String
  },
  links: { type: String },
  date: {
    type: String,
    default: Date.now()
  }
});
module.exports = mongoose.model('Map', mapSchema);
