const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: '.env' });

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    console.log('Starting server...');
    console.log('Environment variables:', {
      PORT: process.env.PORT,
      MONGO_URI: process.env.MONGO_URI ? 'Set' : 'Not set',
      OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY ? 'Set' : 'Not set',
      NODE_ENV: process.env.NODE_ENV
    });
    
    await connectDB();
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
      console.log('Server started successfully!');
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  }
};

startServer();
