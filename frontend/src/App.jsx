import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const API_URL = "http://localhost:5000/api/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Get todos from backend
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error("Failed to fetch todos:", error);
      });
  }, []);

  // Add todo
  const addTodo = async (title) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
        }),
      });

      const newTodo = await response.json();

      setTodos((prev) => [newTodo, ...prev]);
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  // Toggle todo
  const toggleTodo = async (id) => {
    const todo = todos.find((item) => item._id === id);

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: todo.title,
          completed: !todo.completed,
        }),
      });

      const updatedTodo = await response.json();

      setTodos((prev) =>
        prev.map((item) =>
          item._id === id ? updatedTodo : item
        )
      );
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setTodos((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  // Edit todo
  const editTodo = async (id, newTitle) => {
    const todo = todos.find((item) => item._id === id);

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
          completed: todo.completed,
        }),
      });

      const updatedTodo = await response.json();

      setTodos((prev) =>
        prev.map((item) =>
          item._id === id ? updatedTodo : item
        )
      );
    } catch (error) {
      console.error("Failed to edit todo:", error);
    }
  };

  // Clear completed
  const clearCompleted = async () => {
    const completedTodos = todos.filter(
      (todo) => todo.completed
    );

    for (const todo of completedTodos) {
      await deleteTodo(todo._id);
    }
  };

  // Filter todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  const remaining = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <div className="app">
      <div className="todo-container">

        <div className="todo-header">
          <h1>My Tasks</h1>

          <p>
            {remaining}{" "}
            {remaining === 1 ? "task" : "tasks"} remaining
          </p>
        </div>

        <TodoForm addTodo={addTodo} />

        <div className="todo-controls">

          <div className="filters">
            <button
              className={filter === "all" ? "active-filter" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>

            <button
              className={filter === "active" ? "active-filter" : ""}
              onClick={() => setFilter("active")}
            >
              Active
            </button>

            <button
              className={
                filter === "completed"
                  ? "active-filter"
                  : ""
              }
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>

          <button
            className="clear-btn"
            onClick={clearCompleted}
          >
            Clear completed
          </button>

        </div>

        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />

      </div>
    </div>
  );
}

export default App;