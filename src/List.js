import React from "react";
import Item from "./Item";

export default function List({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length ? "" : "No todos"}
      {todos.map(todo => {
        return (
          <Item
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
