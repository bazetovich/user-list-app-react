import USERS from "../data/users";

export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const callUserPopup = id => ({
  type: "CALL_USER_POPUP",
  id
});

export const closeUserPopup = () => ({
  type: "CLOSE_USER_POPUP"
});

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
