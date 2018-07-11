import pageTypes from "../data/page-types";
import fetch from "../utils/fetch";

export const OPEN_PAGE = "OPEN_PAGE";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const SET_DATA = "SET_DATA";

function toggleLoading(isLoading) {
  return {
    type: TOGGLE_LOADING,
    isLoading
  };
}

function setData(data) {
  return {
    type: SET_DATA,
    data
  };
}

function openPage(id) {
  return {
    type: OPEN_PAGE,
    id
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
        dispatch(setData(data));
        dispatch(toggleLoading(false));
      });
    }
  };
}
