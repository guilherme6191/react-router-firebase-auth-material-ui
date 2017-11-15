import firebase from 'firebase';
// Required for side-effects
require('firebase/firestore');

const config = {
  apiKey: '##',
  authDomain: '##',
  databaseURL: '##',
  projectId: '##',
  storageBucket: '##',
  messagingSenderId: '##'
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;
