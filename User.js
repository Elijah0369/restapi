const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your schema fields here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
