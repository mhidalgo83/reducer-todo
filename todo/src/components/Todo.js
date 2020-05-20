import React from "react";

const Todo = (props) => {
  console.log(props.todo);
  const handleClick = () => {
    props.toggleCompletedTodo(props.todo.id);
  };
  return (
    <div
      className={props.todo.completed === true ? "completed" : ""}
      onClick={handleClick}
    >
      {props.todo.item}
    </div>
  );
};

export default Todo;
