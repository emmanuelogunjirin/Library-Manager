import React, { useState } from "react";
import useStyles from "../Containers/User/UserStyles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/SearchOutlined";

function HomeSetup() {
  const classes = useStyles();
  const [searchWord, setSearchWord] = useState("");
  const updateSearch = (e) => setSearchWord(e);
  const handleMouseDownSearch = (e) => e.preventDefault();

  return (
    <div>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <TextField
            className={classes.spacing}
            label="Enter a Book Title"
            margin="normal"
            variant="outlined"
            autoFocus
            fullWidth
            onChange={(e) => updateSearch(e)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    disabled={searchWord.length === 0}
                    onClick={() => updateSearch(searchWord)}
                    onMouseDown={handleMouseDownSearch}
                  >
                    <SearchIcon></SearchIcon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </main>
    </div>
  );
}

export default HomeSetup;
