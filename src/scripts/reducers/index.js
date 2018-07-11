import { combineReducers } from "redux";
import { OPEN_PAGE, TOGGLE_LOADING, SET_DATA } from "../actions";
import pageTypes from "../data/page-types";

function page(
  state = {
    id: pageTypes.home,
    isLoading: false,
    data: {}
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
    case SET_DATA:
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}

export default combineReducers({
  page
});
