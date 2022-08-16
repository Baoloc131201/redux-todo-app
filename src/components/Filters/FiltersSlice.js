const initialState = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducer = (state = initialState, action) => {
  console.log({ state: state, action: action });
  // action:{type:.....,payload:{} || ....}
  switch (action.type) {
    case "filters/SEARCH_FILTER_CHANGE": {
      return {
        ...state,
        search: action.payload,
      };
    }
    case "filters/STATUS_FILTER_CHANGE": {
      return {
        ...state,
        status: action.payload,
      };
    }
    case "filters/PRIORITIES_FILTER_CHANGE": {
      return {
        ...state,
        priority: action.payload,
      };
    }
    default:
      return state;
  }
};
export default filtersReducer;
