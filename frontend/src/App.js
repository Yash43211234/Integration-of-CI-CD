import { useState, useEffect } from "react";

const API_URL = "https://integration-of-ci-cd-3.onrender.com"; // your backend URL

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Fetch todos from backend
  useEffect(() => {
    fetch(`${API_URL}/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;

    fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos); // update frontend list
        setTask(""); // clear input
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
