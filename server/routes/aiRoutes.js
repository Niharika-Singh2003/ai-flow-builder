const express = require('express');
const { askAI } = require('../controllers/aiController');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.post('/', validateRequest, askAI);

module.exports = router;
