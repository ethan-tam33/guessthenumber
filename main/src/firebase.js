// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set} from "firebase/database";
import 'firebase/compat/database'
// import { set } from "mongoose";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgyHIHg5t5CIf0oGfwC3Tre2RbyhenKlY",
  authDomain: "guessthenumber-bf8fb.firebaseapp.com",
  projectId: "guessthenumber-bf8fb",
  storageBucket: "guessthenumber-bf8fb.appspot.com",
  messagingSenderId: "92270326325",
  appId: "1:92270326325:web:a84e7008af3b78d4aaf77c",
  measurementId: "G-DSKJ1BNM5E",
  databaseURL:"https://guessthenumber-bf8fb-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const database = getDatabase(app)

const writeUserData = (userId, email, numQuestions) => {
    const userRef = ref(database, "/users/" + userId);
    set(userRef, {
        email: email,
        numQuestions: numQuestions
    });
}

export {auth, database, writeUserData}