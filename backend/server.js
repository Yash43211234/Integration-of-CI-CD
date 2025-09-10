const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let todos = []; // store data in memory

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Add new todo
app.post("/add", (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });

  todos.push(task);
  console.log("✅ New Task Added:", task); // log in backend console
  res.json({ message: "Task added successfully", todos });
});

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

app.listen(3001, () => {
  console.log("✅ Server running on port 3001");
});
