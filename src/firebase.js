// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFKoQiafLCB4JolEmAUVTRJvtxqDCkT8Q",
  authDomain: "slack-react-redux-b95d7.firebaseapp.com",
  projectId: "slack-react-redux-b95d7",
  storageBucket: "slack-react-redux-b95d7.appspot.com",
  messagingSenderId: "8703077078",
  appId: "1:8703077078:web:b61beb73dd205b81d23777",
  measurementId: "G-P857NV7PZB",
};

//initializing the firebase app
//it connects the frontend to backend at firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//getting the database in db
/*
Cloud FireStore is a noSQL database
Each collection has many docs(indivisual components) and each doc has its own collection
*/
const db = firebaseApp.firestore();

//getting auth
const auth = firebase.auth();

//getting google auth(popup login option)
const provider = new firebase.auth.GoogleAuthProvider();

//explicit exports for having multiple named exports per file
export { auth, provider, db };
