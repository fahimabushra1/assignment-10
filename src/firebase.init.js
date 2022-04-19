// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjRAFYkV0Tfuc1yfH3_VpDPAdLEZ3eggM",
    authDomain: "sundarban-parjatan.firebaseapp.com",
    projectId: "sundarban-parjatan",
    storageBucket: "sundarban-parjatan.appspot.com",
    messagingSenderId: "959718501434",
    appId: "1:959718501434:web:31ee83bc591958c033d903"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;