const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const DeficiencyEvaluationSchema = new Schema({
  evaluation_id: { type: String, default: uuidv4, unique: true },
  test_id: { type: String, required: true, ref: 'Test' },
  missed_pattern_id: { type: String, required: true, ref: 'TestPattern' },
  missed_circle_position: { type: Number, required: true },
  deficiency_score: { type: Number, required: true },
});

module.exports = mongoose.model('DeficiencyEvaluation', DeficiencyEvaluationSchema);
