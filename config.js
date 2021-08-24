import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDEjFr51bBKzmFAOGQ4wpiDBJV6D82ABz0",
  authDomain: "willly-582ac.firebaseapp.com",
  projectId: "willly-582ac",
  storageBucket: "willly-582ac.appspot.com",
  messagingSenderId: "1050743809062",
  appId: "1:1050743809062:web:b36170eb0a08ba4995f2e7"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();