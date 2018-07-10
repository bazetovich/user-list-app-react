import { combineReducers } from "redux";
import { REQUEST_USERS, RECEIVE_USERS } from "../actions";

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

function page(state, action) {
  switch (action.type) {
    case REQUEST_USERS:
      return Object.assign({}, state, {
        page: action.page
      });
    default:
      return state;
  }
}

export default combineReducers({
  users
});
