/* Imports needed by the system */
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

export const styles = (theme) => ({
  root: {
    height: 60,
    [theme.breakpoints.up("sm")]: {
      height: 50,
    },
  },
}); // Default styles specific to the toolbar

export default withStyles(styles)(Toolbar); // Exports the defualt style
