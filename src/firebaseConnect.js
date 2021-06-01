import firebase from 'firebase'
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBDs_MDiOJt4ixqt6nCiKjgsV_VnCMcr4U",
    authDomain: "notereact-15456.firebaseapp.com",
    databaseURL: "https://notereact-15456-default-rtdb.firebaseio.com",
    projectId: "notereact-15456",
    storageBucket: "notereact-15456.appspot.com",
    messagingSenderId: "879046337970",
    appId: "1:879046337970:web:1a9d76451911aad64df0ab",
    measurementId: "G-GFXCY0T7X9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);;
  firebase.analytics();
  export const firebaseConnect= firebase.database().ref("dataNote")
