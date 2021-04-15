import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

import "./index.css";
import "tachyons";

import App from "./containers/App";
import { searchRobots, requestRobots } from "./store/reducers";

const rootReducer = combineReducers({ searchRobots, requestRobots });
const middleWare = [thunkMiddleware];
let composeEnhancers = compose;
if (process.env.NODE_ENV !== "production") {
  middleWare.push(logger);
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
