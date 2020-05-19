/* Imports needed for the file */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "../components/Paper";

AppForm.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}; // Themed prop styled

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundImage: "url(/static/)",
    backgroundRepeat: "no-repeat",
  },
  paper: {
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8, 6),
    },
  },
}); // Themed style needed for this file

/**
 * Function to display the contents of the page
 * @param {*} props is the style argument accepted by the function
 */
function AppForm(props) {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box mt={7} mb={12}>
          <Paper className={classes.paper}>{children}</Paper>
        </Box>
      </Container>
    </div>
  );
}

export default withStyles(styles)(AppForm); // Exports the default function
