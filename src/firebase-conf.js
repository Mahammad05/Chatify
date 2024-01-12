// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa_IoysARdWPnfUMw_BtvU4hkvLiw3CiI",
  authDomain: "chatify-b5bcf.firebaseapp.com",
  projectId: "chatify-b5bcf",
  storageBucket: "chatify-b5bcf.appspot.com",
  messagingSenderId: "450911967307",
  appId: "1:450911967307:web:9ec3e5509d596f3a0655ce",
  measurementId: "G-NKGC3G3CXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
