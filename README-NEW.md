# AI Flow Builder - MERN Stack Application

A modern, interactive AI flow builder built with React, Node.js, Express, MongoDB, and React Flow. Users can create prompt-response flows powered by OpenRouter's free AI models.

## 🚀 Features

- **Interactive Flow Builder**: Visual node-based interface using React Flow
- **AI Integration**: Powered by OpenRouter API with free models
- **History Management**: Save and load conversation history
- **Modern UI**: Dark theme with animated backgrounds and micro-interactions
- **Copy Functionality**: One-click copy of AI responses
- **Character Limits**: Input validation with character counting
- **Responsive Design**: Fully responsive with professional animations

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI framework
- **React Flow 12.8.5** - Flow visualization
- **Vite 7.1.7** - Build tool
- **Zustand 5.0.8** - State management
- **Axios 1.12.2** - HTTP client
- **React Icons 5.5.0** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express 5.1.0** - Web framework
- **MongoDB + Mongoose 8.19.1** - Database
- **OpenRouter API** - AI service integration
- **Express Validator 7.2.1** - Input validation

## 📋 Prerequisites

- Node.js 20.19+ or 22.12+
- MongoDB running locally or cloud connection
- OpenRouter API key (free tier)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ai-flow-builder
```

### 2. Install Dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Environment Setup
Create `.env` file in `server` directory:
```env
# Server Configuration
PORT=5000
MONGO_URI=mongodb://localhost:27017/ai-flow-builder
OPENROUTER_API_KEY=your_openrouter_api_key_here
NODE_ENV=development

# Client Configuration
VITE_API_BASE_URL=http://localhost:5000
```

### 4. Start MongoDB
```bash
# For local MongoDB
mongod

# Or use MongoDB Atlas (cloud)
```

### 5. Run the Application
```bash
# Terminal 1 - Start Backend
cd server
npm run dev

# Terminal 2 - Start Frontend
cd client
npm run dev
```

### 6. Access the Application
- Frontend: http://localhost:5174
- Backend API: http://localhost:5000

## 🎯 Usage Guide

1. **Enter Prompt**: Type your message in the PROMPT node
2. **Run Flow**: Click "Run Flow" to get AI response
3. **View Response**: AI response appears in the AI RESPONSE node
4. **Save Conversation**: Click "Save" to store in database
5. **View History**: Click "View History" to see saved conversations
6. **Copy Response**: Click copy icon in response node to copy to clipboard

## 🔧 Configuration

### OpenRouter Setup
1. Sign up at [OpenRouter.ai](https://openrouter.ai)
2. Get your API key from dashboard
3. Add to `.env` file as `OPENROUTER_API_KEY`
4. Uses free model: `google/gemini-2.0-flash-lite-preview-02-05:free`

### MongoDB Setup
```bash
# Local Installation
brew install mongodb-community

# Start Service
brew services start mongodb-community

# Create Database (optional)
mongosh
use ai-flow-builder
```

## 📁 Project Structure

```
ai-flow-builder/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/         # Custom hooks
│   │   ├── store/         # Zustand store
│   │   ├── api/           # API calls
│   │   ├── utils/         # Constants
│   │   └── styles/        # Global styles
├── server/                # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # Express routes
│   ├── middleware/       # Custom middleware
│   ├── services/         # External services
│   └── config/          # Database config
└── README.md
```

## 🎨 UI Features

- **Animated Background**: Floating particles and rotating gradients
- **Glass Morphism**: Modern frosted glass effect
- **Micro-interactions**: Hover states, loading animations
- **Dark Theme**: Professional dark color scheme
- **Responsive**: Works on all screen sizes

## 📊 API Endpoints

### POST /api/ask-ai
Request:
```json
{
  "prompt": "What is the capital of France?"
}
```

Response:
```json
{
  "success": true,
  "response": "The capital of France is Paris."
}
```

### POST /api/history
Request:
```json
{
  "prompt": "User prompt",
  "response": "AI response"
}
```

### GET /api/history
Response:
```json
{
  "success": true,
  "data": [
    {
      "_id": "64f1234567890abcdef123456",
      "prompt": "What is React?",
      "response": "React is a JavaScript library...",
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
# Build for production
cd client
npm run build

# Deploy to Vercel
vercel --prod
```

### Backend (Render)
```bash
# Deploy backend to Render
# Connect your GitHub repository
# Set environment variables in Render dashboard
# Auto-deploy on push to main branch
```

## 🔒 Security Features

- **API Key Protection**: Server-side API key storage
- **Input Validation**: Express-validator for sanitization
- **CORS Configuration**: Proper cross-origin setup
- **Helmet.js**: Security headers
- **Environment Variables**: Sensitive data protection

## 🐛 Troubleshooting

### Common Issues

1. **Black Screen**: Check both servers are running
2. **API Errors**: Verify OpenRouter API key in `.env`
3. **Database Issues**: Ensure MongoDB is running
4. **Port Conflicts**: Change ports if needed
5. **Node Version**: Ensure Node.js 20.19+ or 22.12+

### Debug Commands
```bash
# Check MongoDB connection
mongosh --eval "db.adminCommand('ismaster')"

# Test API endpoint
curl -X POST http://localhost:5000/api/ask-ai \
  -H "Content-Type: application/json" \
  -d '{"prompt":"test"}'

# Check environment variables
echo $OPENROUTER_API_KEY
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make your changes
4. Add tests if applicable
5. Submit pull request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---

**Built with ❤️ for modern web development**
