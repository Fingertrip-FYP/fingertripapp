import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
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

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);