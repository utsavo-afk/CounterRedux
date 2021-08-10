import { render } from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

const MOUNT_NODE = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
);
