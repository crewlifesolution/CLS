const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS (Allows requests from frontend)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Example API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


