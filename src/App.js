import { useEffect, useState } from "react";
import "./styles.css";
import NewItemForm from "./NewItemForm";
import List from "./List";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  return (
    <>
      <NewItemForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
