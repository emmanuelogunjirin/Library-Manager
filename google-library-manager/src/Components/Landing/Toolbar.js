import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

export const styles = (theme) => ({
  root: {
    height: 60,
    [theme.breakpoints.up('sm')]: {
      height: 50,
    },
  },
});

export default withStyles(styles)(Toolbar);
