const express = require('express');
const { saveFlow, getHistory } = require('../controllers/historyController');

const router = express.Router();

router.post('/', saveFlow);
router.get('/', getHistory);

module.exports = router;
