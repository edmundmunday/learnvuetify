import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjBbWjU4INwPrBhfGSW8PG7uHCIB11Hkw",
  authDomain: "federatedreturnsmanagement.firebaseapp.com",
  databaseURL: "https://federatedreturnsmanagement.firebaseio.com",
  projectId: "federatedreturnsmanagement",
  storageBucket: "federatedreturnsmanagement.appspot.com",
  messagingSenderId: "185371991736",
  appId: "1:185371991736:web:ab21afbbac17b1e7"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
