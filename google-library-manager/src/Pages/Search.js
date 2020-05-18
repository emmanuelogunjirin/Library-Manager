import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import BookCard from "../Components/BookCard";
import useStyles from "../Containers/User/UserStyles";
import MainTheme from "../Containers/User/MainTheme";
import Container from "@material-ui/core/Container";

function HomeSetup() {
  const classes = useStyles();
  const [books, setBooks] = useState(null);

  const handleBookSearch = (bookRelation) => {
    fetch("/api/books?title=" + bookRelation)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBooks(res);
      });
  };

  return (
    <div>
      <MainTheme />
      <SearchBar handleBookSearch={handleBookSearch} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          {books && books.map((book) => <BookCard book={book} key={book.id} />)}
          {books && books.length === 0 && (
            <div variant="h1">No results matched that search</div>
          )}
        </Container>
      </main>
    </div>
  );
}

export default HomeSetup;
