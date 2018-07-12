import React from "react";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      <h2>Welcome to test task!</h2> To see and edit users click on <b>USERS</b>{" "}
      button in menu
    </Typography>
  );
};

export default Home;
