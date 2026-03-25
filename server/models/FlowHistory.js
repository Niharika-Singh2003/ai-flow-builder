const mongoose = require('mongoose');

const flowHistorySchema = new mongoose.Schema(
  {
    prompt: {
      type: String,
      required: true,
      trim: true,
    },
    response: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

flowHistorySchema.index({ createdAt: -1 });

module.exports = mongoose.model('FlowHistory', flowHistorySchema);
