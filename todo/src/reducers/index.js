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

          //   todo.id === action.payload
          //     ? { ...todo, completed: !todo.completed }
          //     : todo;
        }),
      };
    default:
      return state;
  }
};
