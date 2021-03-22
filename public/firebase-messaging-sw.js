// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCDsNJk7xqBp9_CXUMRSgm44rPdini8gZE",
  authDomain: "app-layout-645ce.firebaseapp.com",
  databaseURL: "https://app-layout-645ce-default-rtdb.firebaseio.com",
  projectId: "app-layout-645ce",
  storageBucket: "app-layout-645ce.appspot.com",
  messagingSenderId: "967301559712",
  appId: "1:967301559712:web:c1d5de110a5056995920c5",
  measurementId: "G-PN3TN6JHJC"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();