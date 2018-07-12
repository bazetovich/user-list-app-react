import { combineReducers } from "redux";
import {
  OPEN_PAGE,
  TOGGLE_LOADING,
  TOGGLE_USER_POPUP,
  USER_POPUP_SET_DATA,
  USER_POPUP_EDIT_DATA,
  SET_USERS,
  UPDATE_USER
} from "../actions";
import pageTypes from "../data/page-types";

function page(
  state = {
    id: pageTypes.home,
    isLoading: false
  },
  action
) {
  switch (action.type) {
    case OPEN_PAGE:
      return Object.assign({}, state, {
        id: action.id
      });
    case TOGGLE_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    default:
      return state;
  }
}

function users(state = [], action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    case UPDATE_USER:
      return state.map(user => {
        if (user.getProp("id") === action.id) {
          user
            .setProp("name", action.data.name)
            .setProp("email", action.data.email)
            .setProp("address.city", action.data.city)
            .setProp("phone", action.data.phone)
            .setProp("website", action.data.website)
            .setProp("company.name", action.data.companyName);
        }

        return user;
      });
    default:
      return state;
  }
}

function userPopup(
  state = {
    active: false,
    data: {}
  },
  action
) {
  switch (action.type) {
    case TOGGLE_USER_POPUP:
      return Object.assign({}, state, {
        active: action.active
      });
    case USER_POPUP_SET_DATA:
      return Object.assign({}, state, {
        data: action.data
      });
    case USER_POPUP_EDIT_DATA:
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          [action.name]: action.value
        })
      });
    default:
      return state;
  }
}

export default combineReducers({
  page,
  users,
  userPopup
});
