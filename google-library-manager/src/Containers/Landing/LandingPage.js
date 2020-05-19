/* Imports needed by the file */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "../../Components/Landing/Typography";
import ProductHeroLayout from "./LandingPageLayout";

const backgroundImage = "https://source.unsplash.com/random"; // Link to the images
const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9",
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(9),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
}); // Style theme needed for this specific file

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
}; // Theme classs for the styles

/**
 * Method that pulls up the information for the landing page
 * @param {*} props is the theme for the function
 */
function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Reading with a Twist
      </Typography>
    </ProductHeroLayout>
  );
}

export default withStyles(styles)(ProductHero); // Exports the default function
