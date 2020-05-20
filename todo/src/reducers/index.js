export const initialState = {
  todos: [
    {
      item: "Wash car",
      completed: false,
      id: 1,
    },
    { item: "Cook breakfast", completed: false, id: 2 },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { item: action.payload, completed: false, id: Date.now() },
        ],
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
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
