import React from "react";
import useStyles from "../Containers/User/UserStyles";
import MainTheme from "../Containers/User/MainTheme";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

function HomeSetup() {
  const classes = useStyles();

  return (
    <div>
      <MainTheme />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <TextField
            className={classes.spacing}
            label="Enter a Book Title"
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Container>
      </main>
    </div>
  );
}

export default HomeSetup;
