# MERN Stack Blog Application

A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js demonstrating seamless integration between front-end and back-end components.

## Features

- ✅ Full CRUD operations for blog posts
- ✅ Category management
- ✅ Search functionality
- ✅ Pagination for post list
- ✅ Comments system for posts
- ✅ RESTful API with Express.js
- ✅ React frontend with routing
- ✅ Input validation and error handling
- ✅ Responsive design

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd mern-stack-integration-Kidist-Ayele
   ```

2. **Set up the server:**

   ```bash
   cd server
   npm install
   ```

   Create `.env` file:

   ```env
   MONGODB_URI=mongodb://localhost:27017/mern-blog
   PORT=5000
   NODE_ENV=development
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=7d
   ```

3. **Set up the client:**
   ```bash
   cd ../client
   npm install
   ```
   Create `.env` file:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

## Running the Application

1. **Start MongoDB** (if local):

   ```bash
   mongod
   ```

2. **Start the server:**

   ```bash
   cd server
   npm run dev
   ```

   Server runs on `http://localhost:5000`

3. **Start the client** (new terminal):

   ```bash
   cd client
   npm run dev
   ```

   Client runs on `http://localhost:3000`

4. Open `http://localhost:3000` in your browser

## API Endpoints

### Posts

- `GET /api/posts` - Get all posts (supports `?page=1&limit=10&q=search`)
- `GET /api/posts/:idOrSlug` - Get single post
- `POST /api/posts` - Create post
- `PUT /api/posts/:idOrSlug` - Update post
- `DELETE /api/posts/:idOrSlug` - Delete post
- `POST /api/posts/:idOrSlug/comments` - Add a comment to a post

### Categories

- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category
- `PUT /api/categories/:idOrSlug` - Update category
- `DELETE /api/categories/:idOrSlug` - Archive category

## Screenshots
- Home Page
  
  <img width="1366" height="839" alt="screencapture-localhost-3000-2025-11-17-21_33_18" src="https://github.com/user-attachments/assets/5f52e45d-1964-488f-af7c-7d420f6fdec7" />

- Create Posts
  
  <img width="1344" height="612" alt="image" src="https://github.com/user-attachments/assets/bed98ca7-b0a2-42d9-b882-b7209b0cec28" />

- Post Detail
  
  <img width="1280" height="594" alt="image" src="https://github.com/user-attachments/assets/42e207fe-a43b-4754-b542-10341441367c" />

- Search posts
  
  <img width="1280" height="603" alt="image" src="https://github.com/user-attachments/assets/e20cd437-750f-4d13-ab97-16080229696a" />


## Technologies Used

- **Frontend**: React 18, React Router, Vite, Axios
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Validation**: Joi

## Project Structure

```
mern-stack-integration-Kidist-Ayele/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── services/
├── server/           # Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── validators/
└── README.md
```
