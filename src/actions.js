import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";
import { delay } from "./utility";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });

  fetch("https://jsonplaceholr.typicode.com/users")
    .then((res) => res.json())
    .then((users) => delay(2000, users))
    .then((users) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users }))
    .catch((error) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );
};
