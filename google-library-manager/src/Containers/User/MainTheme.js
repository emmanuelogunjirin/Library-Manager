/* Imports needed for the file */
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
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
import PersonIcon from "@material-ui/icons/PersonRounded";
import { auth } from "../../Authentication/Firebase";
import { UserContext } from "../UserProvider";
import Sidebar from "./Sidebar";
import useStyles from "./UserStyles";

/**
 * Method to design the main theme of the user experienve page
 * in the applicaiton afer the user has signed in
 */
function MainTheme() {
  const { firstName, lastName } = useContext(UserContext); // Specific to each user
  const [open, setOpen] = React.useState(true); // Sidebar listener
  const classes = useStyles();
  const history = useHistory();

  const logoutUser = () => {
    auth.signOut();
    history.push("/");
  }; // Function to logout the user and redirect
  const userProfile = () => {
    history.push("/home/profile");
  }; // Switches pages
  const handleDrawerOpen = () => {
    setOpen(true);
  }; // Opens the sidebar
  const handleDrawerClose = () => {
    setOpen(false);
  }; // Closes the sidebar

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
            aria-label="profile"
            onClick={userProfile}
          >
            <PersonIcon />
          </IconButton>
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

export default MainTheme; // Exports the defualt theme of the app
