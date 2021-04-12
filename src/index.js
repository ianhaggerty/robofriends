import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import "./index.css";
import "tachyons";

import App from "./containers/App";
import { searchRobots } from "./reducers";

const middleWare = [];
if (process.env.NODE_ENV !== "production") {
  middleWare.push(logger);
}
const store = createStore(searchRobots, applyMiddleware(...middleWare));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
