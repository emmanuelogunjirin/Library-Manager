import React, { useContext } from "react";
import useStyles from "../Containers/User/UserStyles";
import { UserContext } from "../Containers/UserProvider";
import MainTheme from "../Containers/User/MainTheme";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

function Profile() {
  const { firstName, lastName, email } = useContext(UserContext);
  const classes = useStyles();

  return (
    <div>
      <MainTheme />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <TextField
            className={classes.spacing}
            id="outlined-read-only-input"
            label="First Name"
            value={firstName}
            disabled
            variant="outlined"
            fullWidth
          />
          <TextField
            className={classes.spacing}
            id="outlined-read-only-input"
            label="Last Name"
            value={lastName}
            disabled
            variant="outlined"
            fullWidth
          />
          <TextField
            className={classes.spacing}
            id="outlined-read-only-input"
            label="Email"
            value={email}
            disabled
            variant="outlined"
            fullWidth
          />
        </Container>
      </main>
    </div>
  );
}

export default Profile;
