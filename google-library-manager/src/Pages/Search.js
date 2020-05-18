import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import useStyles from "../Containers/User/UserStyles";
import MainTheme from "../Containers/User/MainTheme";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

function Search() {
  const classes = useStyles();
  const [books, setBooks] = useState(null);
  const [title, setTitle] = useState(null);

  const handleClick = (event) => {
    if (event) {
      setTitle(event);
    }
  };
  const useStylesDisplay = makeStyles((theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(1),
      },
      image: {
        width: 100,
        height: 128,
      },
      img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
      },
    })
  );

  const classesSearch = useStylesDisplay();
  const link = `/api/books?title=${title}`;

  useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => setBooks(data));
    // addBook();
  });

  function DisplayBooks() {
    console.log(books);
    if (books) {
      return (
        <Container className={classes.container}>
          {books.map((book) => (
            <div className={classesSearch.root}>
              <Box p={2} borderColor="secondary.main">
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classesSearch.image}>
                      <img
                        className={classesSearch.img}
                        alt="complex"
                        src={book.image}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          Title: {book.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Author: {book.author}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Summary: {book.description}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button variant="body2" style={{ cursor: "pointer" }}>
                          Add to Favorites
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        Rating: {book.rating}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </div>
          ))}
        </Container>
      );
    } else {
      return <li>Nothing to Return</li>;
    }
  }

  //   function addBook() {
  //     console.log("Starting");
  //     console.log(
  //       firebasedb
  //         .collection("cities")
  //         .doc("LA")
  //         .set({
  //           name: "Los Angeles",
  //           state: "CA",
  //           country: "USA",
  //         })
  //         .then(function () {
  //           console.log("Document successfully written!");
  //         })
  //     );
  //   }

  return (
    <div>
      <MainTheme />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Paper className={classesSearch.paper}>
            <TextField
              className={classes.spacing}
              label="Search"
              placeholder="Enter a Book Title, Author or Keyword"
              margin="normal"
              variant="outlined"
              onChange={(event) => handleClick(event.target.value)}
              fullWidth
            />
            {<DisplayBooks></DisplayBooks>}
          </Paper>
        </Container>
      </main>
    </div>
  );
}

export default Search;
