import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvcsRWYw-lnUlNnvmPrR9ArYgmPOD5J8Y",
    authDomain: "quora-clone-7607d.firebaseapp.com",
    databaseURL: "https://quora-clone-7607d-default-rtdb.firebaseio.com",
    projectId: "quora-clone-7607d",
    storageBucket: "quora-clone-7607d.appspot.com",
    messagingSenderId: "152242791139",
    appId: "1:152242791139:web:50e9d0bcf6eda3beaa9bd6",
    measurementId: "G-YL1PKBK3FN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth =firebase.auth()
  const provider =new firebase.auth.GoogleAuthProvider()
  const facebookprovider =new firebase.auth.FacebookAuthProvider()

  const db =firebaseApp.firestore()
  export {auth , provider ,facebookprovider} ;
  export default db ;