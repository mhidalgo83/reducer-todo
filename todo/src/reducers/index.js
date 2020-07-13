import moment from "moment";
moment().format();

export const initialState = {
  todos: [
    {
      item: "Wash car",
      completed: false,
      id: 1,
      timeCompleted: "",
    },
    { item: "Cook breakfast", completed: false, id: 2, timeCompleted: "" },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now(),
            timeCompleted: "",
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
              dateCompleted: moment().format("MMM Do YY"),
              timeCompleted: moment().format("h:mm a"),
            };
          }
          return todo;
        }),
      };
    case "CLEAR_TODOS":
      return {
        todos: state.todos.filter((todo) => {
          return !todo.completed;
        }),
      };
    default:
      return state;
  }
};
