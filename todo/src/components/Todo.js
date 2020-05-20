import React, { useState, useReducer } from "react";

import { todoReducer, initialState } from "../reducers";

const Todo = () => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  const [newTodo, setNewTodo] = useState("");

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };
  console.log(todoState);

  return (
    <div>
      {todoState.map((todo) => {
        return <h2 key={todo.id}>{todo.item}</h2>;
      })}
      <div>
        <input
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        ></input>
        <button
          onClick={handleClick}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default Todo;
