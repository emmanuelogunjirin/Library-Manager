import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHORIZATION_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_IDENTIFICATION,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSender: process.env.REACT_APP_MESSAGING_SENDER,
  applicationIdentification: process.env.REACT_APP_APPLICATION_IDENTIFICATION,
  measurementIdentification: process.env.REACT_APP_MEASUREMENT_IDENTIFICATION
};

firebase.initializeApp(firebaseConfig);
export default firebase;