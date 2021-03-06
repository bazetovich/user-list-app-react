import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";

const Menu = ({ page, onChange }) => {
  return (
    <AppBar style={{ backgroundColor: "#0000fe" }} position="static">
      <Tabs value={page} onChange={(e, value) => onChange(value)}>
        <Tab label="Home" icon={<Icon>home</Icon>} />
        <Tab label="Users" icon={<Icon>group</Icon>} />
      </Tabs>
    </AppBar>
  );
};

Menu.propTypes = {
  onChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

export default Menu;
