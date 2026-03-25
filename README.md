# AI Flow Builder

Production-ready MERN flow interface that sends prompts to OpenRouter and persists flow history in MongoDB.

![App Screenshot](./screenshot.png)

## Tech Stack with Versions

- Node.js `>=18`
- Express `5.1.0`
- MongoDB + Mongoose `8.19.1`
- React `19.1.1`
- Vite `7.3.1`
- React Flow (`@xyflow/react`) `12.8.5`
- Axios `1.12.2`
- Zustand `5.0.8`
- OpenRouter Chat Completions API (Model: `nvidia/nemotron-3-super-120b-a12b:free`)

## Prerequisites

- Node.js 18+
- MongoDB Atlas account
- OpenRouter account

## Local Setup

1. Clone the repository.
2. Start backend:
   - `cd server`
   - `npm install`
   - add `.env`
   - `npm run dev`
3. Start frontend:
   - `cd client`
   - `npm install`
   - add `.env`
   - `npm run dev`

## Environment Variables

| Variable | Description | Example |
| --- | --- | --- |
| `PORT` | Backend server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/ai-flow-builder` |
| `OPENROUTER_API_KEY` | API key for OpenRouter | `sk-or-v1-xxxx` |
| `NODE_ENV` | Runtime mode | `development` |
| `VITE_API_BASE_URL` | Frontend API base URL | `http://localhost:5000` |

## API Endpoints

| Method | Route | Body | Response |
| --- | --- | --- | --- |
| `POST` | `/api/ask-ai` | `{ "prompt": "Write a tagline" }` | `{ "success": true, "response": "..." }` |
| `POST` | `/api/history` | `{ "prompt": "...", "response": "..." }` | `{ "success": true, "data": { ...savedDoc } }` |
| `GET` | `/api/history` | `N/A` | `{ "success": true, "data": [ ... ] }` |

## Folder Structure

```text
ai-flow-builder/
+-- client/                            # React Frontend (Vite)
¦   +-- public/
¦   +-- src/
¦   ¦   +-- api/
¦   ¦   ¦   +-- flowApi.js             # All axios calls — never in components
¦   ¦   +-- components/
¦   ¦   ¦   +-- nodes/
¦   ¦   ¦   ¦   +-- InputNode.jsx      # Custom node: textarea for prompt
¦   ¦   ¦   ¦   +-- ResultNode.jsx     # Custom node: shows AI response
¦   ¦   ¦   +-- FlowCanvas.jsx         # React Flow canvas, both nodes + edge
¦   ¦   ¦   +-- Toolbar.jsx            # "Run Flow" + "Save" buttons
¦   ¦   +-- hooks/
¦   ¦   ¦   +-- useFlow.js             # ALL business logic lives here only
¦   ¦   +-- pages/
¦   ¦   ¦   +-- HomePage.jsx           # Main layout page
¦   ¦   +-- store/
¦   ¦   ¦   +-- flowStore.js           # Zustand: prompt, response, isLoading
¦   ¦   +-- utils/
¦   ¦   ¦   +-- constants.js           # All hardcoded strings go here
¦   ¦   +-- styles/
¦   ¦   ¦   +-- globals.css
¦   ¦   +-- App.jsx
¦   ¦   +-- main.jsx
¦   +-- .env                           # VITE_API_BASE_URL only
¦   +-- package.json
¦   +-- vite.config.js
¦
+-- server/                            # Express Backend
¦   +-- config/
¦   ¦   +-- db.js                      # Mongoose connection with error handling
¦   +-- controllers/
¦   ¦   +-- aiController.js            # Logic for POST /api/ask-ai
¦   ¦   +-- historyController.js       # Logic for save + get history
¦   +-- middleware/
¦   ¦   +-- errorHandler.js            # Global error handler
¦   ¦   +-- validateRequest.js         # Input validation (express-validator)
¦   +-- models/
¦   ¦   +-- FlowHistory.js             # Mongoose schema
¦   +-- routes/
¦   ¦   +-- aiRoutes.js                # POST /api/ask-ai
¦   ¦   +-- historyRoutes.js           # POST + GET /api/history
¦   +-- services/
¦   ¦   +-- openRouterService.js       # All OpenRouter logic isolated here
¦   +-- .env                           # MONGO_URI, OPENROUTER_API_KEY, PORT
¦   +-- app.js                         # Express setup
¦   +-- server.js                      # Entry point
¦
+-- .env.example                       # Template for all env variables
+-- .gitignore
+-- README.md
```

## Future Improvements

- Add authentication and per-user flow history.
- Add retry logic with exponential backoff for external AI calls.
- Add integration tests (supertest + mocked OpenRouter service).
- Add deployment configs for Vercel (client) and Render/Fly.io (server).
