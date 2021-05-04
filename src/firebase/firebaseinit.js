import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyARcEaswgBX4xXvbhf8SlGyNrKhxkosw9w",
    authDomain: "weatherapppnr.firebaseapp.com",
    projectId: "weatherapppnr",
    storageBucket: "weatherapppnr.appspot.com",
    messagingSenderId: "334820483230",
    appId: "1:334820483230:web:e38f5a207bdfb0154edb8f"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();