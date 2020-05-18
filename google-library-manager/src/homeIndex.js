/* Imports needed by the system */
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./Themes/Themes";

/**
 * Function to render a given theme
 * @param component is the component to render with the theme
 */
function withRoot(Component) {
  function WithRoot(props) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }

  return WithRoot; // Returns the render
}

export default withRoot; // Exports the default function
