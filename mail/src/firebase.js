import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgpb2a9MP95TgjOK8SEbKtTu6cNn0BR4U",
  authDomain: "socio-email.firebaseapp.com",
  projectId: "socio-email",
  storageBucket: "socio-email.appspot.com",
  messagingSenderId: "190989870950",
  appId: "1:190989870950:web:140f1f072981d97b590aa7",
  measurementId: "G-J7XE31T75P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
