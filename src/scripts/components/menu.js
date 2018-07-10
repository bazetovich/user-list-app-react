import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Home from "./home";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class Menu extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Home" />
            <Tab label="Users" />
          </Tabs>
        </AppBar>
        {value === 0 && <Home />}
        {value === 1 && <p>Item Two</p>}
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
