import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  completed: {
    textDecoration: "line-through",
  },
  hidden: {
    visibility: "hidden",
  },
});

const Todo = (props) => {
  const classes = useStyles();
  console.log(props.todo);
  const handleClick = () => {
    props.toggleCompletedTodo(props.todo.id);
  };
  return (
    <div>
      <div
        className={props.todo.completed === true ? classes.completed : ""}
        onClick={handleClick}
      >
        {props.todo.item}
      </div>
      <div className={props.todo.completed === false ? classes.hidden : ""}>
        {`Completed on ${props.todo.dateCompleted} at ${props.todo.timeCompleted}`}
      </div>
    </div>
  );
};

export default Todo;
