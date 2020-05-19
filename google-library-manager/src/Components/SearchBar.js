/* Imports need by the system */
import React, { useState } from "react";
import useStyles from "../Containers/User/UserStyles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/SearchOutlined";

/**
 * Function to render the search bar to find books
 * @param {findBook} param the book argument that is to be found
 */
function SearchBar({ findBook }) {
  const classes = useStyles(); // Imports the styles
  const [searchWord, setSearchWord] = useState("");
  const updateSearch = (e) => setSearchWord(e.target.value);
  const handleMouseDownSearch = (e) => e.preventDefault();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      findBook(searchWord);
    }
  };

  return (
    <div>
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
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  disabled={searchWord.length === 0}
                  onClick={() => findBook(searchWord)}
                  onMouseDown={handleMouseDownSearch}
                  onKeyPress={handleKeyPress}
                >
                  <SearchIcon></SearchIcon>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Container>
    </div>
  );
}

export default SearchBar; // Exports the default function
