export const initialState = [
  {
    item: "Wash car",
    completed: false,
    id: 1,
  },
  { item: "Cook breakfast", completed: false, id: 2 },
];
console.log(initialState);
export const todoReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() },
      ];
    default:
      return state;
  }
};
