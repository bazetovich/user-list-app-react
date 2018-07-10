import React from "react";
import Home from "./home";
import Users from "../containers/users";
import pageTypes from "../data/page-types";

const Pager = ({ page }) => {
  if (page === pageTypes.home) {
    return <Home />;
  }

  return <Users />;
};

export default Pager;
