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

function loadPage(
  state = {
    page: pageTypes.home,
    isLoading: false
  },
  action
) {
  switch (action.type) {
    case LOAD_PAGE:
      return Object.assign({}, state, {
        page: action.page,
        isLoading: action.isLoading
      });
    default:
      return state;
  }
}

export default combineReducers({
  users,
  loadPage
});
