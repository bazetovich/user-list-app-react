import React from "react";
import Home from "./home";
import Users from "../containers/users";

const Pager = ({ page }) => {
  if (page === 0) {
    return <Home />;
  } else if (page === 1) {
    return <Users />;
  }
};

export default Pager;
