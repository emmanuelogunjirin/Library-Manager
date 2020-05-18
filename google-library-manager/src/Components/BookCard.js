import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/AddOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import firebase from "../Authentication/Firebase";

const firebasedb = firebase.firestore();

function BookCard({ book, inLibraryInitially }) {
  const [inLibrary, setInLibrary] = useState(inLibraryInitially);
  const handleAdd = (book) => {
    firebasedb
      .collection("books")
      .doc(book.id)
      .set({
        title: book.title,
        author: book.author,
        image: book.image,
        id: book.id,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    setInLibrary(true);
  };

  const handleDelete = (id) => {
    firebasedb
      .collection("books")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        setInLibrary(false);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <Paper
      style={{
        display: "flex",
        padding: "1vh",
        margin: "2vh",
        width: "70vh",
      }}
    >
      <img src={book.image} alt={book.title} style={{ marginRight: "1vh" }} />
      <div>
        <CssBaseline>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <div>
            <IconButton
              color="primary"
              variant="contained"
              disabled={inLibrary}
              onClick={() => handleAdd(book)}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              color="primary"
              variant="contained"
              disabled={!inLibrary}
              onClick={() => handleDelete(book.id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </CssBaseline>
      </div>
    </Paper>
  );
}

export default BookCard;
