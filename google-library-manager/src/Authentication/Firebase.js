/* Imports needed by the system */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHORIZATION_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_IDENTIFICATION,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSender: process.env.REACT_APP_MESSAGING_SENDER,
  applicationIdentification: process.env.REACT_APP_APPLICATION_IDENTIFICATION,
  measurementIdentification: process.env.REACT_APP_MEASUREMENT_IDENTIFICATION,
}; // Abstracted firebase authentication configuration keys

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return; // Checks if there is a user already
  const userRef = firestore.doc(`users/${user.uid}`); // Makes a reference id
  const snapshot = await userRef.get(); // Waits for a user reference

  if (!snapshot.exists) {
    // If a user does not exist, it makes one
    const { firstName, lastName, email } = user;
    try {
      await userRef.set({
        firstName,
        lastName,
        email,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error); // Error message if failure
    }
  }
  return getUserDocument(user.uid); // Returns the identification of the user
}; // System to generate a user profile

export const getUserDocument = async (uid) => {
  if (!uid) return null; // Checks for a user identification
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get(); // Gets the user document
    return {
      // Returns the data associated with said user
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error); // Error message if failure
  }
}; // System to get a user profile

firebase.initializeApp(firebaseConfig); // Initialize the firebase configuration
export const auth = firebase.auth(); // Exports the authorization
export const firestore = firebase.firestore(); // Exports the firestore
export default firebase; // Exports the default function
