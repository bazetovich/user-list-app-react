import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Loader from "@material-ui/core/CircularProgress";
import User from "./user";
import UserPopup from "../containers/user-popup";

const Users = ({ isLoading, users, onClickHandler }) => {
  if (isLoading) {
    return (
      <div style={{ padding: 50, textAlign: "center" }}>
        <Loader style={{ color: "#0000fe" }} />
      </div>
    );
  }

  return (
    <div>
      <Grid container style={{ padding: 24 }} spacing={24}>
        {users.map((user, i) => (
          <User key={i} user={user} onClickHandler={onClickHandler} />
        ))}
      </Grid>
      <UserPopup />
    </div>
  );
};

Users.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default Users;
