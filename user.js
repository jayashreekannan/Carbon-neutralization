const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  emissions: [{
    fuel: Number,
    electricity: Number,
    date: Date
  }]
});

module.exports = mongoose.model('User', userSchema);
