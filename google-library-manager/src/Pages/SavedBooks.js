import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../Containers/UserProvider";
import Typography from "@material-ui/core/Typography";
import firebase from "../Authentication/Firebase";
import BookCard from "../Components/BookCard";
import MainTheme from "../Containers/User/MainTheme";
import Container from "@material-ui/core/Container";
import useStyles from "../Containers/User/UserStyles";

const firebasedb = firebase.firestore();

export default function Library() {
  const classes = useStyles();
  const { uid } = useContext(UserContext);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    firebasedb
      .collection(uid)
      .get()
      .then((querySnapshot) => {
        let booksTemp = [];
        querySnapshot.forEach((doc) => {
          booksTemp.push(doc.data());
        });
        setBooks(booksTemp);
      });
  }, [uid]);

  return (
    <div>
      <MainTheme />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          {!books ? (
            <Typography variant="h5">Loading...</Typography>
          ) : books.length > 0 ? (
            books.map((book) => (
              <BookCard book={book} inLibraryInitially={true} key={book.id} />
            ))
          ) : (
            <Typography variant="h4" style={{ marginTop: "3vh" }}>
              You haven't added any books to your library yet!
            </Typography>
          )}
        </Container>
      </main>
    </div>
  );
}
