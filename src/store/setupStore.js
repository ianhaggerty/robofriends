import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { searchRobots, requestRobots } from "../store/reducers";

const rootReducer = combineReducers({ searchRobots, requestRobots });
const middleWare = [thunkMiddleware];

/// Development Middleware
let composeEnhancers = compose;
if (process.env.NODE_ENV !== "production") {
  /// Logging
  middleWare.push(logger);
  /// Redux Devtools
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
