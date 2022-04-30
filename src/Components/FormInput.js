import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");

  //getting item from input adding it to todo list
  const addTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, { name: todoName, isCompleted: false }]);
    setTodoName("");
  };

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        name="todos"
        id="todos"
        placeholder="What needs to be Done ?"
        required
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button type="submit">
        Add <i className="far fa-plus-square"></i>
      </button>
    </form>
  );
}
