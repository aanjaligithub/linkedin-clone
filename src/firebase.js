// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBHheGyR0XkjTUDOnwe0aLjgQKAe-5-A4E",
    authDomain: "linkedin-clone-ab29c.firebaseapp.com",
    projectId: "linkedin-clone-ab29c",
    storageBucket: "linkedin-clone-ab29c.appspot.com",
    messagingSenderId: "207174592812",
    appId: "1:207174592812:web:5578946041e74d16e52489"
  };

//This is special line of code that connect everything

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //get the firebase database

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth };