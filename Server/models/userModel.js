const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const UserSchema = new mongoose.Schema({
  user_id: { type: String, default: uuidv4, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: false },
  gender: { type: String, required: false },
  created_at: { type: Date, default: Date.now },
  last_login: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
