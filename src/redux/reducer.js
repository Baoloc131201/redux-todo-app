import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodoListSlice";
import { combineReducers } from "redux";
// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoLists: todoListReducer(state.todoList, action),
//   };
// };
const rootReducer = combineReducers({
  filters: filtersReducer,
  todoLists: todoListReducer,
});
export default rootReducer;
