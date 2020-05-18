import React, { useState, useContext } from "react";
import { UserContext } from "../Containers/UserProvider";
import useStyles from "../Containers/User/UserStyles";
import AddIcon from "@material-ui/icons/AddOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@material-ui/core/Box";
import firebase from "../Authentication/Firebase";

const firebasedb = firebase.firestore();

function BookCard({ book, inLibraryInitially }) {
  const classes = useStyles();
  const { uid } = useContext(UserContext);
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
  };

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
  };

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
                <AddIcon
                  color="primary"
                  variant="body2"
                  disabled={inLibrary}
                  onClick={() => handleAdd(book)}
                  style={{ cursor: "pointer" }}
                ></AddIcon>
                <DeleteIcon
                  color="primary"
                  variant="body2"
                  disabled={!inLibrary}
                  onClick={() => handleDelete(book)}
                  style={{ cursor: "pointer" }}
                ></DeleteIcon>
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

export default BookCard;
