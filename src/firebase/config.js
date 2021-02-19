import firebase from "firebase";
import "firebase/storage"

const fbconfig = {
    apiKey: "AIzaSyDjJzHE_cR05LYd36lnZKL1IA8WZIhqhzo",
    authDomain: "stevesite-8384a.firebaseapp.com",
    databaseURL: "https://stevesite-8384a-default-rtdb.firebaseio.com",
    projectId: "stevesite-8384a",
    storageBucket: "stevesite-8384a.appspot.com",
    messagingSenderId: "178016073320",
    appId: "1:178016073320:web:3cf8399fe5f734e34b6ddd"
  };

  firebase.initializeApp(fbconfig);

  const storage = firebase.storage();

export {storage, firebase as default};