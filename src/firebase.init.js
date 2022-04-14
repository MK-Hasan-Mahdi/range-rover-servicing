// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH9wB4_dS0NtATxnUpZkgHTWh7OAMrrGY",
    authDomain: "range-rover-servicing-d66ab.firebaseapp.com",
    projectId: "range-rover-servicing-d66ab",
    storageBucket: "range-rover-servicing-d66ab.appspot.com",
    messagingSenderId: "1004147327848",
    appId: "1:1004147327848:web:f11c5e5dc3af4e5f4b4cdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
