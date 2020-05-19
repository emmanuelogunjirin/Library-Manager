/* Imports needed by the system */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
  },
}); // Defines a custom theme for specific file

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}; // Defines a prop type for specific file

/**
 * Method to develop the applicaton bar
 * @param {*} props  is the object argument needed for the application
 */
function AppBar(props) {
  return <MuiAppBar elevation={0} position="static" {...props} />;
}

export default withStyles(styles)(AppBar); // Exports the defualt function
