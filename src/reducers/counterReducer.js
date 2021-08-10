const counterReducer = (state = 10, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return action.data;
    case "INCREMENT_VALUE":
      return state + 1;
    case "DECREMENT_VALUE":
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;

// set counter value
export const SET_COUNTER_VALUE = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SET_VALUE",
      data,
    });
  };
};

export const INCREMENT_COUNTER_VALUE = () => {
  return (dispatch) => {
    dispatch({
      type: "INCREMENT_VALUE",
    });
  };
};

export const DECREMENT_COUNTER_VALUE = () => {
  return (dispatch) => {
    dispatch({
      type: "DECREMENT_VALUE",
    });
  };
};
