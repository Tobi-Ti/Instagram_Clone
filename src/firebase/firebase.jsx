import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFzty915IF_pr4afI15wEOld_UWbMxLEY",
  authDomain: "my-instagram-clone-163e3.firebaseapp.com",
  projectId: "my-instagram-clone-163e3",
  storageBucket: "my-instagram-clone-163e3.appspot.com",
  messagingSenderId: "307166712160",
  appId: "1:307166712160:web:91f3cbd3140157aa2ace05",
  measurementId: "G-WEYRZNRT8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage}
