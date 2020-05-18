import React from "react";
import useStyles from "../Containers/User/UserStyles";
import Copyright from "../Components/Copyright";
import MainTheme from "../Containers/User/MainTheme";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function HomeSetup() {
  const classes = useStyles();

  return (
    <div>
      <MainTheme />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
      </main>
    </div>
  );
}

export default HomeSetup;
