import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Item({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <FaTrashAlt
        role="button"
        onClick={() => deleteTodo(id)}
        className="btn-danger"
      />
    </li>
  );
}
