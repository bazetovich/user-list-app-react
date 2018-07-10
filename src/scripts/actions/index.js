import USERS from "../data/users";

export const PAGE = "PAGE";
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
    users: users
  };
}

export function fetchUsers() {
  return (dispatch, getState) => {
    dispatch(requestUsers());
    setTimeout(() => dispatch(receiveUsers(JSON.parse(USERS))), 1000);
  };
}
