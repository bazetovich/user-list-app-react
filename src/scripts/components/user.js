import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "../../styles/user.css";

const User = ({ user, onClickHandler }) => {
  return (
    <Grid className="user-info-wrap" item xs={6} sm={4}>
      <Paper className="user-info" onClick={() => onClickHandler(user)}>
        <Typography noWrap variant="headline" component="h3">
          {user.getProp("name")}
        </Typography>
        <Typography noWrap component="p">
          {user.getProp("email")}
        </Typography>
        <Typography noWrap component="p">
          {user.getProp("address.city")}
        </Typography>
        <Typography noWrap component="p">
          {user.getProp("phone")}
        </Typography>
        <Typography noWrap component="p">
          {user.getProp("website")}
        </Typography>
        <Typography noWrap component="p">
          {user.getProp("company.name")}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default User;
