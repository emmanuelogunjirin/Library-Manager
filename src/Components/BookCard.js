/* Imports needed by the system */
import React, { useState, useContext } from "react";
import FavoritesIcon from "@material-ui/icons/FavoriteRounded";
import FavoritesIconOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@material-ui/core/Box";
import { UserContext } from "../Containers/UserProvider";
import useStyles from "../Containers/User/UserStyles";
import firebase from "../Authentication/Firebase";

const firebasedb = firebase.firestore(); // Gets access to the firestore

/**
 * This card is a book object that populated based on information from the book
 * @param {book} param is the book object to be shown
 * @param {inLibraryInitially} param is an argument checking if the book is in the user library
 */
function BookCard({ book, inLibraryInitially }) {
  const classes = useStyles(); // Uses the general styles
  const { uid } = useContext(UserContext); // Imports the user
  const [inLibrary, setInLibrary] = useState(inLibraryInitially);

  const handleAdd = (book) => {
    firebasedb
      .collection(uid)
      .doc(book.id)
      .set({
        title: book.title,
        author: book.author,
        image: book.image,
        description: book.description,
        // rating: book.rating,
        id: book.id,
      })
      .then(() => {
        console.log("Document Written!");
        setInLibrary(true);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }; // Section to add a book to a user library if not there already

  const handleDelete = (id) => {
    firebasedb
      .collection(uid)
      .doc(book.id)
      .delete()
      .then(() => {
        console.log("Document Deleted!");
        setInLibrary(false);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }; // Section to delete a book from a user library if there

  function ControlFavorites() {
    if (inLibrary) {
      return (
        <FavoritesIcon
          color="secondary"
          variant="body2"
          disabled={inLibrary}
          onClick={() => handleDelete(book)}
          style={{ cursor: "pointer" }}
        ></FavoritesIcon>
      );
    } else {
      return (
        <FavoritesIconOutlined
          color="secondary"
          variant="body2"
          disabled={inLibrary}
          onClick={() => handleAdd(book)}
          style={{ cursor: "pointer" }}
        ></FavoritesIconOutlined>
      );
    }
  }

  return (
    <div className={classes.root}>
      <Box p={2} borderColor="secondary.main">
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={book.image} />
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
                <ControlFavorites />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Rating: {book.rating}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default BookCard; // Exports the default card
