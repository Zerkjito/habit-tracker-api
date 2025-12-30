# Interactive Habit Tracker API | NodeJS, ExpressJS, JWT, Prisma, PostgreSQL

<p align="center">
  <img src="assets/cover.png" alt="Movie Watchlist API Cover" width="1200"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-green?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-lightgrey?logo=express&logoColor=black" />
  <img src="https://img.shields.io/badge/Prisma-blue?logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-orange?logo=JSON%20Web%20Tokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Zod-purple?logo=Zod&logoColor=white" />
</p>

A simple REST API to keep track of personal habits. Users can register and log in, authenticate using JWT, create habits, and log their daily progress. Built with Node.js, Express, and Prisma ORM.

---

## Features

- User registration and login with JWT authentication
- Create and manage personal habits
- Track daily habit completion status
- Relational database managed with Prisma and PostgreSQL
- Protected routes using authentication middleware
- Rate Limiting / API Protection (per IP and per authenticated user)

---

## Tech Stack

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT
- Cookie-based authenitcation (HTTP-only)
- dotenv for environment variables
- Zod for validation
- pino for logs

---

## Getting Started

### 1. Clone the repository

Create a `.env` file with the following variables:

- DATABASE_URL=...
- JWT_SECRET=...
- JWT_EXPIRES_IN=7d
- SEED_CREATOR_ID=...

### 2. Install dependencies

### 3. Set up environment variables

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Apply DB migrations

For local development:

```bash
npx prisma migrate dev
```

For production/deployment:

```bash
npx prisma migrate deploy
```

### 6. Start the server (Port 5001)

```bash
npm run dev
```

---

## API Endpoints

**Auth**

- POST /auth/register
- POST /auth/login
- POST /auth/logout

**Habits**

- GET /habits
- POST /habits
- PATCH /habits/:id
- DELETE /habits/:id

**Registers**

- POST /registers
- PATCH /registers/:id
