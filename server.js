const express = require("express");
const cors = require("cors");
require("dotenv").config();


const connectDB = require("./config/db");
connectDB(); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));

// Default route
app.get("/", (req, res) => {
  res.send("🚀 C3 Server is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
