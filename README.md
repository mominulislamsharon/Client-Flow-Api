⚙️ Client-Flow API | Backend Service

Client-Flow API is the RESTful backend engine powering the Client-Flow management system. Built with Node.js, Express, and MongoDB, it provides robust architecture for user authentication, service management, order handling, and role-based access control.

✨ Core Features
🔐 Authentication & Authorization: Secure JWT implementation, password hashing (bcrypt), and role-based middleware (Admin, Client, User).
💼 Service Management: Complete CRUD operations for service catalog.
📦 Order Pipeline: Order placement, status tracking (Pending, In Progress, Completed), and history.
🛡️ Error Handling & Validation: Centralized error handling and request validation.
🛠️ Tech Stack
Runtime: Node.js
Framework: Express.js
Database: MongoDB (Mongoose ODM)
Security: JSON Web Token (JWT), bcrypt.js, cors, dotenv
🔗 Related Repository
🖥️ Frontend Client App: Client-Flow-Frontend
🚀 Getting Started
Prerequisites
Node.js (v18+)
MongoDB Atlas account or local MongoDB instance
