'use strict'

import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/functions';
// import 'firebase/storage';     // for storage
// import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
// import 'firebase/messaging';   // for cloud messaging

// Initialize Firebase configuration. For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
	apiKey: "AIzaSyD-V6Bmo-n7Hs0luheA2Kd7xmNUpLuCpsY",
  authDomain: "genesequence-f6558.firebaseapp.com",
  projectId: "genesequence-f6558",
  storageBucket: "genesequence-f6558.appspot.com",
  messagingSenderId: "808620425298",
  appId: "1:808620425298:web:88574c5b71559ab7b65f8b"
})

export default firebase;