const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const TestSchema = new Schema({
  test_id: { type: String, default: uuidv4, unique: true },
  user_id: { type: String, required: true, ref: 'User' },
  test_start: { type: Date, required: true },
  test_end: { type: Date, required: true },
  overall_score: { type: Number, required: true },
  deficiency_type: { type: String, required: true },
});

module.exports = mongoose.model('Test', TestSchema);
