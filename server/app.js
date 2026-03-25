const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const aiRoutes = require('./routes/aiRoutes');
const historyRoutes = require('./routes/historyRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/ask-ai', aiRoutes);
app.use('/api/history', historyRoutes);

app.use(errorHandler);

module.exports = app;
