# User Management - React Frontend

Simple React UI for managing users with the Express API backend.

## Features

- Add new users
- Search for users by name
- Modern gradient design

## Getting Started

### Option 1: Using Docker (Recommended)

Run from the **project root** to start all services together:
```bash
cd ..
docker compose up -d --build
```
Frontend will be available at [http://localhost:3001](http://localhost:3001)

### Option 2: Local Development

**Install Dependencies:**
```bash
npm install
```

**Run Development Server:**
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000)

**Build for Production:**
```bash
npm run build
```

## API Configuration

The app connects to the backend API at:
- Default: `http://localhost:3002`
- Configure via `REACT_APP_API_URL` environment variable

## Tech Stack

- React 18
- Vanilla JavaScript (no TypeScript)
- CSS3 with gradients
