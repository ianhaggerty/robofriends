import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";

import "./index.css";
import "tachyons";

import App from "./containers/App";
import { searchRobots } from "./reducers";

const middleWare = [];
let composeEnhancers = compose;
if (process.env.NODE_ENV !== "production") {
  middleWare.push(logger);
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = createStore(
  searchRobots,
  composeEnhancers(applyMiddleware(...middleWare))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
