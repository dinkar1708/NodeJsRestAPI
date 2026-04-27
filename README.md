# NodeJS REST API

A RESTful API built with Node.js, Express framework, and MongoDB for user management and basic operations.

## Tech Stack

- **Node.js 20.x** - JavaScript runtime environment
- **Express 5.2.1** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 9.5.0** - MongoDB object modeling tool
- **JSON API** - RESTful JSON responses

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v8.x or higher recommended for this Express version)
- MongoDB (running on default port 27017)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NodeJsRestAPI
```

2. Install dependencies:
```bash
npm install
```

3. Install MongoDB dependency (if not already in package.json):
```bash
npm install mongoose
```

4. Configure the application:
   - Edit `config/config.js` to set your local IP address and port
   - Default MongoDB connection: `mongodb://192.168.0.105/REST_DEMO`
   - Default HTTP port: `3000`

## Running the Application

### Backend (Express API)

**Option 1: Using Docker (Recommended)**
```bash
docker compose up -d
```
Backend API: `http://localhost:3002`
MongoDB: `mongodb://localhost:27017`

**Option 2: Local Development**
```bash
npm install
npm start
```
Server will start on `http://localhost:3000`

### Frontend (React App)

```bash
cd client
npm install
npm start
```
React app will start on `http://localhost:3000`

## Project Structure

```
NodeJsRestAPI/
├── app.js                    # Main Express application
├── config/
│   └── config.js            # Application configuration
├── models/
│   └── db/
│       ├── user.js          # User model
│       └── schema/
│           └── user.js      # User schema
├── routes/
│   ├── index.js             # API info endpoint
│   └── user.js              # User API routes
├── util/
│   ├── db.js                # MongoDB connection
│   ├── response.js          # Response helpers
│   └── utils.js             # Utilities
├── client/                   # React Frontend
│   ├── src/
│   │   ├── App.js           # Main React component
│   │   ├── App.css          # Styles
│   │   └── index.js         # React entry point
│   └── package.json         # Frontend dependencies
├── docker-compose.yml        # Docker setup
├── Dockerfile                # Backend container
├── .env.local                # Local environment config
└── .env.dev                  # Docker environment config

```

## Architecture

- **Backend**: Express.js REST API
- **Frontend**: React.js SPA (Single Page Application)
- **Database**: MongoDB (via Docker or local)
- **Communication**: REST API with JSON responses

## API Endpoints

All endpoints are POST requests:

### 1. Add/Update User
**Endpoint:** `POST http://localhost:3000/user/addUser`

**Request:**
```json
{
  "name": "Mike Gerg",
  "address": "Z/2 Keptown"
}
```

**Response:**
```json
{
  "isSuccess": true,
  "description": "User updated successfully!"
}
```

### 2. Find User
**Endpoint:** `POST http://localhost:3000/user/findUser`

**Request:**
```json
{
  "name": "Mike Gerg"
}
```

**Response:**
```json
{
  "user": {
    "_id": "59076bed2f22880870f9c5ff",
    "name": "Mike Gerg",
    "address": "Z/2 Keptown",
    "__v": 0
  },
  "isSuccess": true,
  "description": null
}
```

### 3. Add Two Numbers
**Endpoint:** `POST http://localhost:3000/user/addTwoNumber`

**Request:**
```json
{
  "numberA": "20",
  "numberB": "10"
}
```

**Response:**
```json
{
  "sum": 30,
  "isSuccess": true,
  "description": null
}
```

## Testing the API

You can test the API endpoints using:
- Postman
- cURL
- Any HTTP client

Example using cURL:
```bash
curl -X POST http://localhost:3000/user/addUser \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","address":"123 Main St"}'
```

## Configuration

Update `config/config.js` to modify:
- `HOST_IP`: Your local IP address for MongoDB connection
- `HTTP_REST_PORT`: The port number for the HTTP server (default: 3000)

## Database

The application connects to MongoDB at `mongodb://<HOST_IP>/REST_DEMO`

Make sure MongoDB is running before starting the application.

## Development

### Recommended IDEs

- **VS Code** - Recommended for Node.js development with excellent JavaScript/TypeScript support

### Useful VS Code Extensions

- ESLint
- Prettier
- REST Client
- MongoDB for VS Code
