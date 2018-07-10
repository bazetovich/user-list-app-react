import USERS from "../data/users";
import pageTypes from "../data/page-types";

export const LOAD_PAGE = "LOAD_PAGE";
export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";

function requestUsers() {
  return {
    type: REQUEST_USERS
  };
}

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function loadPage(page) {
  return {
    type: LOAD_PAGE,
    isLoading: page === pageTypes.users,
    page
  };
}

export function fetchUsers() {
  return (dispatch, getState) => {
    dispatch(requestUsers());
    setTimeout(() => dispatch(receiveUsers(JSON.parse(USERS))), 1000);
  };
}
