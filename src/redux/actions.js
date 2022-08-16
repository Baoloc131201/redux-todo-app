export const addTodo = (data) => {
  return {
    type: "todoList/ADD_TO_DO",
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/SEARCH_FILTER_CHANGE",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/STATUS_FILTER_CHANGE",
    payload: status,
  };
};

export const PrioritiesFilterChange = (priority) => {
  return {
    type: "filters/PRIORITIES_FILTER_CHANGE",
    payload: priority,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};
