# GenAI Interview Prep

A full-stack AI-powered interview preparation app. Upload a resume, add a job description and a short self-description, and receive a tailored interview report with match analysis, likely questions, skill gaps and a preparation plan. The app can also generate a job-tailored resume PDF.

## Features

- User registration, login and logout with JWT-based authentication
- Resume PDF upload and text extraction
- AI-generated match score, technical and behavioral questions, skill gaps and preparation plan
- Saved interview reports for each user
- AI-generated, ATS-friendly resume PDF

## Tech stack

- Frontend: React, Vite, React Router, Axios, Sass
- Backend: Node.js, Express, MongoDB/Mongoose
- AI: Google GenAI SDK (Gemini)
- Supporting tools: Multer, PDF parsing, Puppeteer, JWT and bcrypt

## Project structure

```text
GENAI/
├── Frontend/       # React + Vite application
└── Backend/        # Express API, MongoDB models and AI services
```

## Getting started

### Prerequisites

- Node.js 18 or newer
- A MongoDB database (local or Atlas)
- A Google GenAI API key

### 1. Configure the backend

```bash
cd Backend
npm install
copy .env.example .env
```

Update `Backend/.env` with your MongoDB URI, JWT secret and Google GenAI API key.

### 2. Start the backend

```bash
cd Backend
npm run dev
```

The API runs at `http://localhost:3000`.

### 3. Start the frontend

In a second terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

## Environment variables

| Variable | Purpose |
| --- | --- |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign authentication tokens |
| `GOOGLE_GENAI_API_KEY` | API key used for Gemini-powered features |

Never commit your actual `.env` file or credentials.

## Main API routes

| Method | Route | Description |
| --- | --- | --- |
| POST | `/api/auth/register` | Create an account |
| POST | `/api/auth/login` | Sign in |
| GET | `/api/auth/logout` | Sign out |
| GET | `/api/auth/get-me` | Get the current user |
| POST | `/api/interview/` | Generate an interview report |
| GET | `/api/interview/` | List the current user's reports |
| GET | `/api/interview/report/:interviewId` | Get a saved report |
| POST | `/api/interview/resume/pdf/:interviewReportId` | Generate a tailored resume PDF |

## Available scripts

| Directory | Command | Purpose |
| --- | --- | --- |
| `Backend` | `npm run dev` | Run the API with Nodemon |
| `Frontend` | `npm run dev` | Start Vite development server |
| `Frontend` | `npm run build` | Create a production build |
| `Frontend` | `npm run lint` | Run Oxlint |
