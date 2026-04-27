# Backend API - Node.js + Express

REST API for user management built with Express.js and MongoDB.

## Features

- User CRUD operations (Add, Find)
- MongoDB integration with Mongoose
- CORS enabled for frontend communication
- JSON responses

## Getting Started

### Option 1: Using Docker (Recommended)

Run from the **project root** to start all services together:
```bash
cd ..
docker compose up -d --build
```
API will be available at [http://localhost:3002](http://localhost:3002)

### Option 2: Local Development

**Install Dependencies:**
```bash
npm install
```

**Run Development Server:**
```bash
npm start
```
API will start on [http://localhost:3000](http://localhost:3000)

**Note:** Make sure MongoDB is running locally before starting the server.

## Environment Variables

Create `.env.local` for local development:
```env
MONGO_HOST=localhost
MONGO_PORT=27017
MONGO_DB=REST_DEMO
PORT=3000
```

## API Endpoints

All endpoints use POST requests:

- `POST /user/addUser` - Add or update a user
- `POST /user/findUser` - Find a user by name
- `POST /user/addTwoNumber` - Add two numbers (demo)

## Tech Stack

- Node.js 20.x
- Express 5.2.1
- MongoDB + Mongoose 9.5.0
- CORS enabled
