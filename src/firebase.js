import firebase from 'firebase/app'

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyDnnKbHDDJuKCge8Ym5m-38bobmQLPRhSs",
    authDomain: "clone-89dac.firebaseapp.com",
    projectId: "clone-89dac",
    storageBucket: "clone-89dac.appspot.com",
    messagingSenderId: "863558474646",
    appId: "1:863558474646:web:db18b6cc64bfc064a29bb7"
  });

  const db = firebase.firestore();

  export  { db } 