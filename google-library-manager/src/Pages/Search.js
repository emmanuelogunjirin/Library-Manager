import React, { useState, useEffect } from "react";
import useStyles from "../Containers/User/UserStyles";
import MainTheme from "../Containers/User/MainTheme";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

function HomeSetup() {
  const classes = useStyles();
  const [books, setBooks] = useState(null);
  const [title, setTitle] = useState(null);
  const link = `/api/books?title=${title}`;

  const handleClick = (event) => {
    if (event) {
      setTitle(event);
    }
  };

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
        <ul>
          {books.map((book) => (
            <li>{book.image}</li>
          ))}
        </ul>
      );
    } else {
      return <li>Cannot Find Book</li>;
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
          <TextField
            className={classes.spacing}
            label="Search"
            placeholder="Enter a Book Title"
            margin="normal"
            variant="outlined"
            onChange={(event) => handleClick(event.target.value)}
            fullWidth
          />
        </Container>
        if(books)
        {
          <Container className={classes.container}>
            <DisplayBooks></DisplayBooks>
          </Container>
        }
      </main>
    </div>
  );
}

export default HomeSetup;
