# NodeJS REST API

A full-stack application with Node.js/Express backend, React frontend, and MongoDB database for user management.

> **Note:** This is a demo system for learning JavaScript and React basics. No authentication or authorization is implemented yet.

## Quick Start

### Using Docker (Recommended)

Run all services (MongoDB, Backend API, and React Frontend) together:

```bash
docker compose up -d --build
```

**Services:**
- **React Frontend**: http://localhost:3001
- **Backend API**: http://localhost:3002
- **MongoDB**: mongodb://localhost:27017

**Manage services:**
```bash
docker compose down           # Stop all services
docker compose logs -f        # View logs
docker compose ps             # Check status
```

### Local Development

For local development setup, see:
- **Backend API**: [api/README.md](api/README.md)
- **React Frontend**: [client/README.md](client/README.md)

## Project Structure

```
NodeJsRestAPI/
├── README.md                 # This file
├── docker-compose.yml        # Orchestrates all services
├── api/                      # Backend API (Node.js + Express)
│   ├── README.md            # API documentation
│   ├── Dockerfile           # API container
│   └── ...                  # API source code
└── client/                   # Frontend (React)
    ├── README.md            # Client documentation
    ├── Dockerfile           # Client container
    └── ...                  # React source code
```

## Tech Stack

**Backend:**
- Node.js 20.x + Express 5.2.1
- MongoDB + Mongoose 9.5.0
- CORS enabled

**Frontend:**
- React 18
- Vanilla JavaScript (no TypeScript)

**DevOps:**
- Docker + Docker Compose
- Nginx (for React production build)

## Features

- User CRUD operations (Add, Find)
- Simple calculator API (demo endpoint)
- Modern React UI with gradient design
- Full Docker containerization

## Deployment

Deploy to any cloud platform supporting Docker:

**Platforms:** AWS, Google Cloud, Azure, DigitalOcean, Railway, Render, Fly.io

**Command:**
```bash
docker compose up -d --build
```

This deploys all 3 services (MongoDB, API, Frontend) together.

## Documentation

- **API Documentation**: [api/README.md](api/README.md) - Endpoints, configuration, tech details
- **Frontend Documentation**: [client/README.md](client/README.md) - UI features, development setup

## License

MIT

## Demo
<img width="1163" height="699" alt="Screenshot 2026-04-27 at 11 53 41" src="https://github.com/user-attachments/assets/bd52d90b-e265-4b25-a8c5-6a26dd826108" />

<img width="2056" height="859" alt="Screenshot 2026-04-27 at 11 53 35" src="https://github.com/user-attachments/assets/7fecd91c-86b1-4d59-9c14-da590d8d028c" />
