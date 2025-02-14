# Auth App

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Introduction

Auth App is a full-stack authentication system built using modern web technologies. It provides secure user authentication, role-based access control, and session management using JWT. The application is designed to be scalable, maintainable, and easy to integrate into other projects.

The frontend is built with **React, Next.js, JavaScript, and Zustand** for state management, while the backend is powered by **Python, Django, and Django REST Framework (DRF)** for handling authentication, user management, and API endpoints.

## Features

- **JWT Authentication:** Secure authentication using JSON Web Tokens (JWT) for user sessions.
- **User Registration & Login:** Users can create an account and log in securely.
- **Role-Based Access Control (RBAC):** Restrict access to certain routes based on user roles (e.g., admin, user).
- **Password Hashing:** Uses bcrypt to securely store user passwords.
- **Session Management:** Token-based session handling with expiration and refresh token support.
- **Protected Routes:** Ensures only authenticated users can access certain parts of the application.
- **API with RESTful Endpoints:** Clean and well-structured API endpoints for authentication and user management.

## Technologies Used

- Frontend:
  - [React, Next.js, zustand, Tailwind CSS]
- Backend:
  - [Python, Django, DRF, Sqlite]

## Installation

To set up the project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/Fialex1212/auth-app.git
cd auth-app
```

### 2. Set up and run the backend:

```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
pip install -r requirements.txt
cd auth_app
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### 3. Set up and run the frontend:

```bash
cd ../../frontend
yarn install
yarn dev
```

### 4. Access the application:

- **Frontend:** Open `http://localhost:3000`
- **Backend API:** Open `http://localhost:8000/`
