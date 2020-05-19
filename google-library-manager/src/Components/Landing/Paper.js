/* Imports needed by system */
import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { capitalize } from "@material-ui/core/utils";
import { withStyles } from "@material-ui/core/styles";
import MuiPaper from "@material-ui/core/Paper";

const styles = (theme) => ({
  backgroundLight: {
    backgroundColor: theme.palette.secondary.light,
  },
  backgroundMain: {
    backgroundColor: theme.palette.secondary.main,
  },
  backgroundDark: {
    backgroundColor: theme.palette.secondary.dark,
  },
  padding: {
    padding: theme.spacing(1),
  },
}); // Defines a specific style for the file

Paper.propTypes = {
  background: PropTypes.oneOf(["light", "main", "dark"]),
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  padding: PropTypes.bool,
}; // Defines a prop style for this file

/**
 * A paper function that is specific for a certain style
 * @param {*} props a condition that the paper function must adhere to
 */
function Paper(props) {
  const {
    background = "light",
    classes,
    className,
    padding = false,
    ...other
  } = props; // Defines extra props

  return (
    <MuiPaper
      elevation={0}
      square
      className={clsx(
        classes[`background${capitalize(background)}`],
        {
          [classes.padding]: padding,
        },
        className
      )}
      {...other}
    />
  );
}

export default withStyles(styles)(Paper); // Exports the default function
