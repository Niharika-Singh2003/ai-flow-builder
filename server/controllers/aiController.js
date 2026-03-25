const { validationResult } = require('express-validator');
const { getAIResponse } = require('../services/openRouterService');

const askAI = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { prompt } = req.body;
    const response = await getAIResponse(prompt);

    return res.json({
      success: true,
      response,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  askAI,
};
