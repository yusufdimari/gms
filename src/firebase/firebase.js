// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxcIRfFw6XsAPU6Q8gc7FXMvTp-VEGtuE",
  authDomain: "gms-server-5c51c.firebaseapp.com",
  projectId: "gms-server-5c51c",
  storageBucket: "gms-server-5c51c.appspot.com",
  messagingSenderId: "299399386733",
  appId: "1:299399386733:web:da8248fc5018158efad164",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.firestore();
export default firebase;
