import React from "react";
import SearchBar from "../Components/SearchBar";
import useStyles from "../Containers/User/UserStyles";
import MainTheme from "../Containers/User/MainTheme";
import Container from "@material-ui/core/Container";

function HomeSetup() {
  const classes = useStyles();

  return (
    <div>
      <MainTheme />
      <SearchBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}></Container>
      </main>
    </div>
  );
}

export default HomeSetup;
