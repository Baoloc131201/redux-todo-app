const initialState = [
  { id: 1, name: "Learn Football", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: false, priority: "High" },
  { id: 1, name: "Learn NodeJs", completed: false, priority: "Low" },
];

const todoListReducer = (state = initialState, action) => {
  console.log({ state: state, action: action });
  // action:{type:.....,payload:{} || ....}
  switch (action.type) {
    case "todoList/ADD_TO_DO": {
      return [...state, action.payload];
    }
    case "todoList/toggleTodoStatus": {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    default:
      return state;
  }
};
export default todoListReducer;
