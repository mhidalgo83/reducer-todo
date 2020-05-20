import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers";
import Todo from "./Todo";

const TodoList = () => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  const [newTodo, setNewTodo] = useState("");
  
  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const handleTodoClick = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };

  const toggleCompletedTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const clearCompletedTodos = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_TODOS"});
  };

  return (
    <div>
      {todoState.todos.map((todo) => {
        
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleCompletedTodo={toggleCompletedTodo}
          />
        );
      })}
      <div>
        <input
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        ></input>
        <button onClick={handleTodoClick}>Add Todo</button>
        <button onClick={clearCompletedTodos}>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoList;
