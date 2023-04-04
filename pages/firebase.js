// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd5nYB-eo06XZuerHmEwSHOL96V00wyvA",
  authDomain: "fingertrip-a8fe1.firebaseapp.com",
  databaseURL: "https://fingertrip-a8fe1-default-rtdb.firebaseio.com",
  projectId: "fingertrip-a8fe1",
  storageBucket: "fingertrip-a8fe1.appspot.com",
  messagingSenderId: "465093245343",
  appId: "1:465093245343:web:a78ace7e5bf53ff2bea5aa",
  measurementId: "G-C224NW70QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;