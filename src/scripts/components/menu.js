import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";

import Home from "./home";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class App extends React.Component {
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
            <Tab label="Home" icon={<Icon>home</Icon>} />
            <Tab label="Users" icon={<Icon>group</Icon>} />
          </Tabs>
        </AppBar>
        {value === 0 && <Home />}
        {value === 1 && <p>Item Two</p>}
      </div>
    );
  }
}

export default withStyles(styles)(App);
