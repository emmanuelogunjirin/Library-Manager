import React from "react";
import useStyles from "../Containers/User/UserStyles";
import MainTheme from "../Containers/User/MainTheme";

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
