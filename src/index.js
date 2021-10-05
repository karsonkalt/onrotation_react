import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "./store/reducers/index";

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // <Provider store={store}>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  // </Provider>
  document.getElementById("root")
);
