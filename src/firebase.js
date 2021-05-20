import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACmKn1-MUPzuDKyRHEq_7okxybc3OxlFw",
  authDomain: "ui-facebook-a5235.firebaseapp.com",
  projectId: "ui-facebook-a5235",
  storageBucket: "ui-facebook-a5235.appspot.com",
  messagingSenderId: "279391380616",
  appId: "1:279391380616:web:1cf708ad3b8a9f07fdeb3d",
  measurementId: "G-HH7VFY4F2S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
