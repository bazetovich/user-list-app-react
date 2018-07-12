import pageTypes from "../data/page-types";
import fetch from "../utils/fetch";

export const OPEN_PAGE = "OPEN_PAGE";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const TOGGLE_USER_POPUP = "TOGGLE_USER_POPUP";
export const USER_POPUP_SET_DATA = "USER_POPUP_SET_DATA";
export const USER_POPUP_EDIT_DATA = "USER_POPUP_EDIT_DATA";
export const SET_USERS = "SET_USERS";
export const UPDATE_USER = "UPDATE_USER";

function toggleLoading(isLoading) {
  return {
    type: TOGGLE_LOADING,
    isLoading
  };
}

function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}

function openPage(id) {
  return {
    type: OPEN_PAGE,
    id
  };
}

export function toggleUserPopup(flag) {
  return {
    type: TOGGLE_USER_POPUP,
    active: flag
  };
}

export function userPopupSetData(data) {
  return {
    type: USER_POPUP_SET_DATA,
    data
  };
}

export function userPopupEditData(name, value) {
  return {
    type: USER_POPUP_EDIT_DATA,
    name,
    value
  };
}

export function updateUser(id, data) {
  return {
    type: UPDATE_USER,
    id,
    data
  };
}

export function loadPage(id) {
  return (dispatch, getState) => {
    if (id === pageTypes.home) {
      dispatch(openPage(id));
    } else if (id === pageTypes.users) {
      dispatch(toggleLoading(true));
      dispatch(openPage(id));
      fetch().then(data => {
        dispatch(setUsers(data.users));
        dispatch(toggleLoading(false));
      });
    }
  };
}
