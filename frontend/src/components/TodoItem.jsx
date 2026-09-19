import { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const saveEdit = () => {
    if (!title.trim()) return;

    editTodo(todo._id, title.trim());
    setEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo._id)}
        />

        {editing ? (
          <input
            className="edit-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveEdit();
              }
            }}
            autoFocus
          />
        ) : (
          <span>{todo.title}</span>
        )}
      </div>

      <div className="todo-actions">
        {editing ? (
          <button className="save-btn" onClick={saveEdit}>
            Save
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;