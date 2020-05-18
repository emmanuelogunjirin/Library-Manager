import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import BookCard from "../Components/BookCard";
import useStyles from "../Containers/User/UserStyles";
import MainTheme from "../Containers/User/MainTheme";
import Container from "@material-ui/core/Container";

function Search() {
  const classes = useStyles();
  const [books, setBooks] = useState(null);

  const search = (word) => {
    fetch("/api/books?title=" + word)
      .then((res) => res.json())
      .then(
        (data) => {
          setBooks(data);
          console.log(data);
        },
        [word]
      );
  };

  return (
    <div>
      <MainTheme />
      <SearchBar findBook={search} />
      <main className={classes.content}>
        <Container className={classes.container}>
          {books &&
            books.map((book) => {
              return <BookCard book={book} key={book.id} />;
            })}
        </Container>
      </main>
    </div>
  );
}

export default Search;
