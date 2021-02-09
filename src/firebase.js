import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB-hYS3ywWg_OP-4_OuuyNoIJMH3HPkr9o",
    authDomain: "challenge-806b4.firebaseapp.com",
    databaseURL: "https://challenge-806b4.firebaseio.com",
    projectId: "challenge-806b4",
    storageBucket: "challenge-806b4.appspot.com",
    messagingSenderId: "777123472287",
    appId: "1:777123472287:web:fe0427cface1f8d090d3aa",
    measurementId: "G-747PGWFKXN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};