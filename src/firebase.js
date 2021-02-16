import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAAUXDQ4ykmcEdghTGZCwymP58GBpBgKU0",
  authDomain: "instagram-clone-91cfc.firebaseapp.com",
  projectId: "instagram-clone-91cfc",
  storageBucket: "instagram-clone-91cfc.appspot.com",
  messagingSenderId: "1005752713739",
  appId: "1:1005752713739:web:d673a6636bf73a72523d0e",
  measurementId: "G-S3PS6FGPHF",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
