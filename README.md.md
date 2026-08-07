<div align="center">

# ⚙️ Client-Flow API

### Backend Service for the Client-Flow Management System

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

---

**Client-Flow API** is the RESTful backend engine powering the Client-Flow management system. Built with Node.js, Express, and MongoDB, it provides a robust architecture for user authentication, service management, order handling, and role-based access control.

🔗 **Frontend Repo:** [Client-Flow-Frontend](https://github.com/mominulislamsharon/Client-Flow-Frontend)

---

## ✨ Core Features

| | |
|---|---|
| 🔐 **Authentication & Authorization** | Secure JWT implementation, password hashing (bcrypt), and role-based middleware (Admin, Client, User) |
| 💼 **Service Management** | Complete CRUD operations for the service catalog |
| 📦 **Order Pipeline** | Order placement, status tracking (Pending → In Progress → Completed), and history |
| 🛡️ **Error Handling & Validation** | Centralized error handling and request validation |

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB (Mongoose ODM)
- **Security:** JSON Web Token (JWT), bcrypt.js, CORS, dotenv

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account or local MongoDB instance

### 1. Clone the repository

```bash
git clone https://github.com/mominulislamsharon/Client-Flow-Api.git
cd Client-Flow-Api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:3000
```

### 4. Run the project

```bash
# Development
npm run dev

# Production
npm run build
npm start
```

The API will run at **http://localhost:5000** by default.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

ISC

---

<div align="center">

**Mominul Islam Sharon**

[![GitHub](https://img.shields.io/badge/GitHub-mominulislamsharon-181717?style=flat-square&logo=github)](https://github.com/mominulislamsharon)

</div>
