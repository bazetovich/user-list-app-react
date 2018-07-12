import React from "react";
import Grid from "@material-ui/core/Grid";
import Loader from "@material-ui/core/CircularProgress";
import User from "./user";
import UserPopup from "../containers/user-popup";

const Users = ({ isLoading, users, onClickHandler }) => {
  if (isLoading) {
    return (
      <div style={{ padding: 50, textAlign: "center" }}>
        <Loader />
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

export default Users;
