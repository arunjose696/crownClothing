import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB0nUCYNfoXx_EiNRFlqB2gIQMyGADZD-g",
    authDomain: "crown-6ec7f.firebaseapp.com",
    projectId: "crown-6ec7f",
    storageBucket: "crown-6ec7f.appspot.com",
    messagingSenderId: "892953670456",
    appId: "1:892953670456:web:2da6d133f95ec87ab4c7cd",
    measurementId: "G-66MKJ4524T"
  };    

  firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})

  export const auth=firebase.auth();
  export const store=firebase.firestore();

  

  export const SignInWithPopup= ()=>firebase.auth().signInWithPopup(provider);

  export default firebase;