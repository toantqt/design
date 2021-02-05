import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyB0c7qrneEZjAhWGaPvaDrODQziEVKcrnA",
  authDomain: "design24-template.firebaseapp.com",
  projectId: "design24-template",
  storageBucket: "design24-template.appspot.com",
  messagingSenderId: "114513593938",
  appId: "1:114513593938:web:f061999ba07cc2a59dc18b",
};

// Initialize Firebase
export const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.firestore();
