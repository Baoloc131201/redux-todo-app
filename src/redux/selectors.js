import { createSelector } from "reselect";

// export const todoListSelectors = (state) => {
//   const todosRemaining = state.todoLists.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });
//   return todosRemaining;
// };
export const searchTextSelector = (state) => state.filters.search;
export const filtersStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;
export const todoListSelectors = (state) => state.todoLists;
export const todosRemaining = createSelector(
  todoListSelectors,
  searchTextSelector,
  filtersStatusSelector,
  filterPrioritySelector,
  (todoLists, searchText, status, priorities) => {
    console.log("todoLists:" + todoLists);
    console.log("SearchText:" + searchText);
    return todoLists.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
