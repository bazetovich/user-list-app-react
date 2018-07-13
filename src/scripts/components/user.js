import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = {
  userWrap: {
    display: "flex",
    justifyContent: "center"
  },
  user: {
    border: "2px solid",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    textAlign: "center"
  },
  headline: {
    backgroundColor: "#aed8e8"
  },
  row: {
    color: "#fff",
    backgroundColor: "#0000fe"
  }
};

const User = ({ classes, user, onClickHandler }) => {
  return (
    <Grid className={classes.userWrap} item xs={6} sm={4}>
      <Paper
        className={classes.user}
        onTouchStart={() => onClickHandler(user)}
        onDoubleClick={() => onClickHandler(user)}
      >
        <Typography
          className={classes.headline}
          noWrap
          variant="headline"
          component="h3"
        >
          {user.getProp("name")}
        </Typography>
        <Typography className={classes.row} noWrap component="p">
          {user.getProp("email")}
        </Typography>
        <Typography className={classes.row} noWrap component="p">
          {user.getProp("address.city")}
        </Typography>
        <Typography className={classes.row} noWrap component="p">
          {user.getProp("phone")}
        </Typography>
        <Typography className={classes.row} noWrap component="p">
          {user.getProp("website")}
        </Typography>
        <Typography className={classes.row} noWrap component="p">
          {user.getProp("company.name")}
        </Typography>
      </Paper>
    </Grid>
  );
};

User.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default withStyles(styles)(User);
