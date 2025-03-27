const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Import Routes
const authRoutes = require("/routes/authRoutes");
const noteRoutes = require("/routes/noteRoutes");

// Routes Middleware
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// Error Handling Middleware
const { errorHandler } = require("/middleware/errorMiddleware");
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
