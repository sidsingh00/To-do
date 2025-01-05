# To-Do Application
Project Overview
This is a backend application for a To-Do List Application, developed using Node.js and Express.js, with MongoDB as the database. The API includes user authentication using JWT (JSON Web Tokens) and allows users to create, view, update, and delete tasks.

Features
User Registration and Login with JWT-based authentication.
Create, Read, Update, and Delete (CRUD) operations for tasks.
Secure API endpoints protected by authentication middleware.
Task status management with predefined statuses: pending, in-progress, completed.
Tech Stack
Backend Framework: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Others: Mongoose, bcrypt.js, dotenv, body-parser, cors
Folder Structure
bash
Copy code
todo-backend/
├── config/
│   └── db.js                # Database connection
├── controllers/
│   ├── authController.js    # Authentication logic
│   └── taskController.js    # Task logic
├── middleware/
│   └── auth.js              # JWT authentication middleware
├── models/
│   ├── Task.js              # Task schema
│   └── User.js              # User schema
├── routes/
│   ├── auth.js              # Authentication routes
│   └── tasks.js             # Task routes
├── .env                     # Environment variables
├── package.json             # Project metadata
└── server.js                # Server entry point
Setup and Installation
Prerequisites
Install Node.js and npm.
Install MongoDB and ensure it is running locally or use a cloud database.
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/todo-backend.git
cd todo-backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following:

plaintext
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/todoApp
JWT_SECRET=your_jwt_secret_key
Start the server:

bash
Copy code
npm start
The server will run on http://localhost:5000.

API Endpoints
Authentication
Method	Endpoint	Description	Protected
POST	/auth/register	Register a new user	No
POST	/auth/login	Login and get JWT token	No
Tasks
Method	Endpoint	Description	Protected
POST	/tasks	Create a new task	Yes
GET	/tasks	Get all tasks	Yes
GET	/tasks/:id	Get task by ID	Yes
PUT	/tasks/:id	Update task status by ID	Yes
DELETE	/tasks/:id	Delete a task by ID	Yes
Usage Instructions
1. Register a User
Endpoint: POST /auth/register
Request Body:
json
Copy code
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
Response:
json
Copy code
{
  "id": "unique-user-id",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "token": "jwt-token"
}
2. Login a User
Endpoint: POST /auth/login
Request Body:
json
Copy code
{
  "email": "john.doe@example.com",
  "password": "password123"
}
Response:
json
Copy code
{
  "id": "unique-user-id",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "token": "jwt-token"
}
3. Use the Token for Task Operations
Include the JWT token in the Authorization header for all task-related endpoints:

plaintext
Copy code
Authorization: Bearer <jwt-token>
Error Handling
All responses include appropriate HTTP status codes (e.g., 400, 401, 404, 500) with descriptive error messages.
Example Workflow
Register or Login to get a token.
Use the token to perform the following:
Create a Task (POST /tasks)
Get All Tasks (GET /tasks)
Update a Task (PUT /tasks/:id)
Delete a Task (DELETE /tasks/:id)
Contributing
Fork the repository.
Create a new feature branch.
Commit your changes.
Push to the branch.
Create a pull request.
