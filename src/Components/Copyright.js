/* Imports needed by the system */
import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

/**
 * Function that shows the copyright style similar to the
 * goolge way of copyrighting
 */
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://emmanuelogunjirin1.wixsite.com/emmanuel-ogunjirin"
      >
        Emmanuel Ogunjirin
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright; // Exports the defualt function
