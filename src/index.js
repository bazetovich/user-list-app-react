import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import App from "./scripts/components/app";
import reducer from "./scripts/reducers";

import "./styles/styles.css";

console.log(reducer);

const store = createStore(reducer, undefined, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
