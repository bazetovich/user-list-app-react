import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "../../styles/user.css";

const User = ({ data, onClickHandler }) => {
  return (
    <Grid item xs={6} sm={4}>
      <Paper className="user-info">
        <Typography variant="headline" component="h3">
          {data.name}
        </Typography>
        <Typography component="p">{data.email}</Typography>
        <Typography component="p">{data.address.city}</Typography>
        <Typography component="p">{data.phone}</Typography>
        <Typography component="p">{data.website}</Typography>
        <Typography component="p">{data.company.name}</Typography>
      </Paper>
    </Grid>
  );
};

export default User;
