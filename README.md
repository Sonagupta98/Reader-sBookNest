# 📚 ReadersBookNest

**ReadersBookNest** is a full-stack web application where book lovers can 📖 share, 🌐 explore, and ❤️ favorite their most cherished reads. Built with the MERN stack, JWT authentication, Zustand for state management, and styled using Tailwind CSS, ReadersBookNest designed with a sleek and responsive UI, this platform provides a seamless way for users to connect through books.

Live Demo 👉 https://reader-sbooknest-1.onrender.com
---

## 🚀 Features

 **✨ Authentication & Authorization** 
- Secure sign up, log in, and logout with JWT & bcrypt.
- Session-based access control using cookies.
 **📝 Book Management**
- Add, edit, and delete your favorite books.
- Upload cover images using Cloudinary.
 **🔍 Explore & Search**
- Discover books added by other users.
- Search books by title with instant results.
 **🎯 User-Friendly Interface**
- Beautifully styled using Tailwind CSS.
- Fully responsive on desktop and mobile.
 **⚡ State Management**
- Powered by Zustand for fast and lightweight global state updates.

---

## 🛠️ Tech Stack

### 👨‍💻 Frontend

- **React + Vite**: Component-based UI development.
- **Zustand**: Lightweight and flexible state management.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI design.

### 🔧 Backend

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Backend framework for building APIs.
- **MongoDB**: NoSQL database for storing user and book data.
- **Cloudinary**: Image hosting and management.

### 🔐 Authentication

- **JWT (JSON Web Tokens):** Secure token-based authentication.

---

## 🧑‍💻 Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- MongoDB

### 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sonagupta98/Reader-sBookNest
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   npm install
   cd frontend
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the `server` directory with the following variables:

   ```env
   PORT = 5000
   MONGO_URI=your_mongodb_uri
   CLIENT_URL=http://localhost:5173
   JWT_SECRET=your_random_secret
   CLOUD_NAME=cloudinary_cloud_name
   API_KEY=cloudinary_apikey
   API_SECRET=cloudinary_apisecret
   ```

4. Start the development servers:

   - Backend/Root:
     ```bash
     nodemon backend/server.js
     ```
   - Frontend:
     ```bash
     cd frontend
     npm run dev
     ```

5. Open your browser and visit `http://localhost:5173` to access ReadersBookNest.

---

---

## 🤝 Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
