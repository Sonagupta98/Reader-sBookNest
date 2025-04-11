# ReadersBookNest

**ReadersBookNest** is a web application that allows users to share and explore their favorite books with others. Built with the MERN stack, JWT authentication, Zustand for state management, and styled using Tailwind CSS, ReadersBookNest provides a seamless and visually appealing platform for book enthusiasts.

---

## Features

- **User Authentication:** Secure login and signup using JWT for authentication.
- **Personalization:** Users can add, edit, and delete their favorite books.
- **Discover Favorites:** Browse through books added by other users.
- **Search Functionality:** Quickly find books or users based on keywords.
- **Responsive Design:** Optimized for both desktop and mobile devices using Tailwind CSS.
- **Real-time Updates:** Zustand ensures a reactive and fluid user experience.

---

## Tech Stack

### Frontend

- **React + Vite**: Component-based UI development.
- **Zustand**: Lightweight and flexible state management.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI design.

### Backend

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Backend framework for building APIs.
- **MongoDB**: NoSQL database for storing user and book data.

### Authentication

- **JWT (JSON Web Tokens):** Secure token-based authentication.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- MongoDB

### Installation

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

## Contributing

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

## License

This project is licensed under the [MIT License](LICENSE).
