# To-Do Application

## Project Overview
This is a backend application for a To-Do List Application, developed using Node.js and Express.js, with MongoDB as the database. The API includes user authentication using JWT (JSON Web Tokens) and allows users to create, view, update, and delete tasks.

---

## Features
- User Registration and Login with JWT-based authentication.
- Create, Read, Update, and Delete (CRUD) operations for tasks.
- Secure API endpoints protected by authentication middleware.
- Task status management with predefined statuses: `pending`, `in-progress`, `completed`.

---

## Tech Stack
- **Backend Framework**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT (JSON Web Tokens)  
- **Others**: Mongoose, bcrypt.js, dotenv, body-parser, cors  

---

## Setup and Installation

### Prerequisites
1. Install Node.js and npm.
2. Install MongoDB and ensure it is running locally or use a cloud database.

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/todo-backend.git
   cd todo-backend

2. **Install dependencies**:
    ```bash
   Copy code
   npm install
   Create a .env file in the root directory and add the following

3. **Configure environment variables: Create a .env file in the root directory with the following contents:**:
    ```plaintext
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/todoApp
    JWT_SECRET=your_jwt_secret_key

4. **Start the server:**:
    ```bash
    npm start
    The server will run on http://localhost:5000.