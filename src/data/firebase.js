import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyqL9zufg7gPI507496Vw7jZcV8iBj1NQ",
  authDomain: "ionic-project-bc50a.firebaseapp.com",
  databaseURL: "https://ionic-project-bc50a-default-rtdb.firebaseio.com",
  projectId: "ionic-project-bc50a",
  storageBucket: "ionic-project-bc50a.appspot.com",
  messagingSenderId: "231587637963",
  appId: "1:231587637963:web:f24650458e9c3ed720894e",
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
