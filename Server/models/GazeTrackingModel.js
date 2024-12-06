const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const GazeTrackingDataSchema = new Schema({
  track_id: { type: String, default: uuidv4, unique: true },
  test_id: { type: String, required: true, ref: 'Test' },
  timestamp: { type: Date, required: true },
  gaze_x: { type: Number, required: true },
  gaze_y: { type: Number, required: true },
  target_circle_position: { type: Number, required: true },
});

module.exports = mongoose.model('GazeTrackingData', GazeTrackingDataSchema);
