# MERN Todo App

A full-stack Todo application built with the **MERN stack** — MongoDB, Express.js, React, and Node.js.

The project demonstrates how a React frontend communicates with a RESTful Express API and persists application data in MongoDB.

## 🚀 Features

* Create new tasks
* Mark tasks as completed or active
* Edit existing tasks
* Delete tasks
* Filter tasks:

  * All
  * Active
  * Completed
* Clear all completed tasks
* Persistent data storage with MongoDB
* RESTful API architecture
* Responsive user interface
* Separate frontend and backend architecture
* CORS-enabled API communication
* Environment variable configuration

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* Vite
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* REST API
* Mongoose
* CORS
* dotenv

### Database

* MongoDB

## 📁 Project Structure

```text
mern-todo/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.jsx
│   │   │   ├── TodoItem.jsx
│   │   │   └── TodoList.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/
│   │   └── Todo.js
│   │
│   ├── routes/
│   │   └── todoRoutes.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── README.md
```

## 🔄 How It Works

The application follows a simple full-stack architecture:

```text
┌──────────────────────┐
│     React Frontend   │
│      Vite + React    │
└──────────┬───────────┘
           │
           │ HTTP Requests
           │
           ▼
┌──────────────────────┐
│    Express Backend   │
│      REST API        │
└──────────┬───────────┘
           │
           │ Mongoose
           │
           ▼
┌──────────────────────┐
│       MongoDB        │
│      Todo Data       │
└──────────────────────┘
```

When a user creates, edits, completes, or deletes a task, the React application sends an HTTP request to the Express API.

The Express server processes the request and uses Mongoose to interact with MongoDB.

## 🔌 API Endpoints

Base URL:

```text
http://localhost:5000/api/todos
```

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/todos`     | Get all todos |
| POST   | `/api/todos`     | Create a todo |
| PUT    | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |

### Create Todo

```http
POST /api/todos
```

Request body:

```json
{
  "title": "Learn MERN"
}
```

### Update Todo

```http
PUT /api/todos/:id
```

Request body:

```json
{
  "title": "Learn Advanced MERN",
  "completed": true
}
```

### Delete Todo

```http
DELETE /api/todos/:id
```

## 🗄️ Database Model

Each Todo document contains:

```text
Todo
├── _id
├── title
├── completed
├── createdAt
└── updatedAt
```

The `createdAt` and `updatedAt` fields are automatically managed using Mongoose timestamps.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/mern-todo.git
```

Move into the project:

```bash
cd mern-todo
```

---

## 2. Setup the Backend

Open a terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_todo
```

Start the backend:

```bash
npm run dev
```

The server should run at:

```text
http://localhost:5000
```

---

## 3. Setup MongoDB

Make sure MongoDB is installed and running locally.

The application uses:

```text
mongodb://localhost:27017/mern_todo
```

MongoDB Compass can be used to inspect the database.

The database will contain a collection named:

```text
todos
```

---

## 4. Setup the Frontend

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL similar to:
