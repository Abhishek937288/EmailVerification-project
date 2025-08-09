# Email Verification Project

A full-stack application for user auth with email verification using OTP.

## Features

- User registration with email and password
- OTP (One-Time Password) email verification
- Secure password hashing
- JWT-based authentication (token generation)
- Protected routes for authenticated users
- Responsive React frontend with routing
- Toast notifications for feedback

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed or just npm | yarn
- MongoDB running locally or a cloud instance

### Backend Setup

clone this project to your local computer then

1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Copy `.env.example` to `.env` and fill in your environment variables:
   ```
   cp .env.example .env
   ```
4. Start the backend server:
   ```sh
   pnpm start
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Copy `.env.example` to `.env` and set the backend API URL:
   ```
   cp .env.example .env
   ```
4. Start the frontend development server:
   ```sh
   pnpm dev
   ```

### Usage

- Open your browser and go to the frontend URL (usually `http://localhost:5173`)
- Register a new account
- Check your email for the OTP and verify your account

## Project Structure

- `backend/` – Express.js API, authentication, OTP logic
- `frontend/` – React app, pages, layouts, verification UI

##
