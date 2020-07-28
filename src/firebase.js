import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyCiugG-HtypbjCkI-7O3lXdtO66ErVH_Hc",
  authDomain: "instagram-clone-5bc52.firebaseapp.com",
  databaseURL: "https://instagram-clone-5bc52.firebaseio.com",
  projectId: "instagram-clone-5bc52",
  storageBucket: "instagram-clone-5bc52.appspot.com",
  messagingSenderId: "165866915483",
  appId: "1:165866915483:web:3b06c0140cbc7c863de83e"
});

const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
