# 🔐 JWT Banking API Authentication

## 📌 Project Overview

This project implements a secure authentication system for a banking API using Node.js and Express. It demonstrates best practices for backend security including password hashing, token-based authentication, protected routes, logging middleware, and centralized error handling.

The API allows users to register, log in, and access protected user information using JSON Web Tokens (JWT).

---

## 🚀 Features

* User Registration
* User Login with JWT Authentication
* Protected Routes
* Password Hashing (Argon2 / bcrypt)
* Logging Middleware
* Centralized Error Handling
* MongoDB Database Integration
* RESTful API Design

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Atlas)
* JWT (jsonwebtoken)
* Argon2 / bcrypt
* CORS
* dotenv

---

## 📂 Project Structure

```
config/
controllers/
middleware/
models/
routes/
utils/
.env
.gitignore
index.js
package.json
vercel.json
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

⚠️ Do NOT commit `.env` to GitHub.

---

## ▶️ Running Locally

Install dependencies:

```
pnpm install
```

Start the server:

```
pnpm dev
```

Server runs at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 🔹 Register User

```
POST /users/register
```

### 🔹 Login User

```
POST /users/login
```

### 🔹 Get Current User (Protected)

```
GET /users/me
```

Header:

```
Authorization
```
