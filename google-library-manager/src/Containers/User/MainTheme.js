import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Sidebar from "./Sidebar";
import useStyles from "./UserStyles";
import { auth } from "../../Authentication/Firebase";
import { UserContext } from "../UserProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function MainTheme() {
  const { firstName, lastName } = useContext(UserContext);
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  const history = useHistory();

  const logoutUser = () => {
    auth.signOut();
    history.push("/");
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {firstName} {lastName}'s Library
          </Typography>

          <IconButton
            color="secondary"
            aria-label="logout"
            onClick={logoutUser}
          >
            <LockOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Sidebar />
      </Drawer>
    </div>
  );
}

export default MainTheme;
