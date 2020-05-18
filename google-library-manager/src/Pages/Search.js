import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import BookCard from "../Components/BookCard";
import useStyles from "../Containers/User/UserStyles";
import MainTheme from "../Containers/User/MainTheme";
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
  // const [word, setWord] = useState(null);

  // const handleBookSearch = (bookRelation) => {
  //   if (bookRelation !== "undefined") {
  //     setWord(bookRelation);
  //     search(word);
  //   }
  // };
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
