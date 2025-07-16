# MERN Stack To-Do App 📝

A full-stack To-Do application built using the MERN stack (MongoDB, Express.js, React, Node.js), marking the beginning of my journey into backend development.
As a frontend engineer, this project helped me dive deeper into full-stack engineering by building complete CRUD APIs and integrating authentication, along with using MongoDB and Redis on the backend.

---

## 🚀 Features

- ✅ User Registration & Authentication (JWT based)
- 🗂️ Create, Read, Update, Delete To-Do Items
- 🔐 Secure Routes with Middleware
- 🧠 Redis Integration for Caching
- 🌐 Fully Responsive Frontend built with React
- 📦 RESTful API Architecture
- 🧪 Backend structured for scalability and learning

---

## 🛠️ Tech Stack

### Frontend:
- React
- Axios
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- Redis (for caching or session/token management)
- JSON Web Tokens (JWT) for auth
- bcrypt for password hashing
- dotenv for environment config
- nodemon for development

---

## 📁 Folder Structure (Backend)
server/
├── controllers/
│ └── todoController.js
│ └── authController.js
├── models/
│ └── userModel.js
│ └── todoModel.js
├── routes/
│ └── todoRoutes.js
│ └── authRoutes.js
├── middlewares/
│ └── authMiddleware.js
├── config/
│ └── db.js
│ └── redis.js
├── .env
├── server.js


---

## 🧪 API Endpoints

### Authentication
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login and receive token

### To-Do Routes (Protected)
- `GET /api/todos` – Fetch all to-dos for logged-in user
- `POST /api/todos` – Create a new to-do
- `PUT /api/todos/:id` – Update a to-do
- `DELETE /api/todos/:id` – Delete a to-do

---

## 💾 Setup Instructions

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mern-todo-app.git
   cd server
2. Install dependencies:
   ```bash 
      npm install
4. Create a .env file:
   ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    REDIS_URL=your_redis_url
6. Start backend server:
    ```bash
    npm run dev

### Frontend

1. Navigate to client folder:
    ```bash
     cd client
3. Install frontend dependencies:
    ```bash
     npm i
6. Start frontend:
   ```bash
   npm run dev


---

🌱 Learning Reflection

This project marks the start of my backend development journey. As a frontend engineer, I took this opportunity to:
- Understand backend concepts like routing, middleware, auth, and data modeling
- Learn how Redis can improve performance
- Get hands-on with MongoDB and building RESTful APIs

---

📌 Future Improvements

- Add pagination and filtering
- Add priority/labels to tasks
- Use Redis for token/session blacklisting
- Add unit & integration tests
- Dockerize the app for easier deployment

---

📬 Contact
If you have any suggestions or questions, feel free to connect!

Pratyush Singh Rajawat
📧 pratyushsinghrajawat@gmail.com

