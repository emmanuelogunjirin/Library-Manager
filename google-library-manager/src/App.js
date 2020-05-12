// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> file and save to reload the.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import firebase from './Firebase';
const firebasedb = firebase.firestore();

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch("/api/books?title=the+outsiders")
    .then(res => res.json())
    .then(data => setBooks(data));
    addBook();
  }, []);

  function DisplayBooks() {
    console.log(books);
    return(
      <ul>
        {books.map(book => (
          <li>{book.title}</li>
        ))}
      </ul>
    );
  }

  function addBook() {
    console.log("Starting");
    console.log(
    
    firebasedb.collection("cities").doc("LA").set({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
  }).then(function() {
    console.log("Document successfully written!");
}));
  }

  if(!books)
  {
    return(
      <div>
        <h1>Failed to find books</h1>
      </div>
    )
  }

  return <DisplayBooks></DisplayBooks>;
}

// if(books)
// {

// }

export default App;
