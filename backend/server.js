const express = require('express');
const cors = require("cors");
const connectDB = require("./db");
require("dotenv").config();

const DataModel = require("./models/Data");
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

// Routes here...
app.listen(process.env.PORT || 3001, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 3001}`);
});
