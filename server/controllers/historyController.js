const FlowHistory = require('../models/FlowHistory');

const saveFlow = async (req, res, next) => {
  try {
    const { prompt, response } = req.body;

    const savedFlow = await FlowHistory.create({
      prompt,
      response,
    });

    return res.status(201).json({
      success: true,
      data: savedFlow,
    });
  } catch (error) {
    return next(error);
  }
};

const getHistory = async (req, res, next) => {
  try {
    const history = await FlowHistory.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      data: history,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  saveFlow,
  getHistory,
};
