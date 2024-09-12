const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); 
const itemRoutes = require("../Grocery-List-Backend/routes/itemRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and allow cross-origin requests
app.use(express.json());
app.use(cors());


const URL = process.env.MONGO_URI;

// Connect to MongoDB and start the server
mongoose
  .connect(URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// ამ რუთს ემატება კონტროლერში არსებული რუთი;
app.use("/api/items", itemRoutes);

