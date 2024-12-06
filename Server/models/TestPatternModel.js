const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const TestPatternSchema = new Schema({
  pattern_id: { type: String, default: uuidv4, unique: true },
  test_id: { type: String, required: true, ref: 'Test' },
  pattern_sequence: { type: Number, required: true },
  odd_circle_position: { type: Number, required: true },
  user_response_time: { type: Number, required: true },
  is_correct: { type: Boolean, required: true },
  shortest_path_taken: { type: Boolean, required: true },
});

module.exports = mongoose.model('TestPattern', TestPatternSchema);
