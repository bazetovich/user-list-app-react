import { combineReducers } from "redux";
import { REQUEST_USERS, RECEIVE_USERS, LOAD_PAGE } from "../actions";
import pageTypes from "../data/page-types";

function users(
  state = {
    isLoading: false,
    users: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isLoading: false,
        users: action.users
      });
    default:
      return state;
  }
}

function page(state = pageTypes.home, action) {
  switch (action.type) {
    case LOAD_PAGE:
      return action.page;
    default:
      return state;
  }
}

export default combineReducers({
  ...users,
  page
});
