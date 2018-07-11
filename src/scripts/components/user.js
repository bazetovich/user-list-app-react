import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "../../styles/user.css";

const User = ({ data, onClickHandler }) => {
  return (
    <Grid className="user-info-wrap" item xs={6} sm={4}>
      <Paper className="user-info">
        <Typography noWrap variant="headline" component="h3">
          {data.name}
        </Typography>
        <Typography noWrap component="p">
          {data.email}
        </Typography>
        <Typography noWrap component="p">
          {data.address.city}
        </Typography>
        <Typography noWrap component="p">
          {data.phone}
        </Typography>
        <Typography noWrap component="p">
          {data.website}
        </Typography>
        <Typography noWrap component="p">
          {data.company.name}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default User;
