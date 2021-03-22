import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/messaging'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyCDsNJk7xqBp9_CXUMRSgm44rPdini8gZE",
  authDomain: "app-layout-645ce.firebaseapp.com",
  databaseURL: "https://app-layout-645ce-default-rtdb.firebaseio.com",
  projectId: "app-layout-645ce",
  storageBucket: "app-layout-645ce.appspot.com",
  messagingSenderId: "967301559712",
  appId: "1:967301559712:web:c1d5de110a5056995920c5",
  measurementId: "G-PN3TN6JHJC"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

const messaging = firebase.messaging()

  messaging.getToken().then((currentToken) => {
  if (currentToken) {
    console.log(currentToken)
    // Send the token to your server and update the UI if necessary
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.')
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err)
})

// messaging.onBackgroundMessage((payload) => {
//   console.log('Message received. ', payload)
// })

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  messaging,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
