import React from "react";
import PropTypes from "prop-types";
import Home from "./home";
import Users from "../containers/users";
import pageTypes from "../data/page-types";

const Pager = ({ id }) => {
  if (id === pageTypes.home) {
    return <Home />;
  }

  return <Users />;
};

Pager.propTypes = {
  id: PropTypes.number.isRequired
};

export default Pager;
