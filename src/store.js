import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// reducers
import { counterReducer, alertReducer } from "./reducers";

const reducers = combineReducers({
  // counter
  counterState: counterReducer,
  // error/alert
  alertState: alertReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
