// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, child, get, push, onValue} from "firebase/database";
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
const database = getDatabase(app);

const writeUserData = (userId, email) => {
    const userRef = ref(database, "/users/" + userId);
    set(userRef, {
        email: email,
        minQuestions: Number.MAX_SAFE_INTEGER
    });
}

const getValues = () => {
    const userId = auth.currentUser.uid;
    const nodeRef = ref(database, `users/${userId}/numQuestions`);

    onValue(nodeRef, (snapshot) => {
        const data = snapshot.val();
        for (const key in data) {
            console.log(data[key]);
        }
        console.log(data);
      });
}

const updatenumQuestions = (questions) => {
    const userId = auth.currentUser.uid;
    const dbRef = ref(database)
    get(child(dbRef, `users/${userId}`)).then((user) => {
        // update data if user exists
        if (user.exists()) {
            const userData = user.val();
            if (!('numQuestions' in userData)) {
                const newNodeRef = child(dbRef, `users/${userId}/newQuestions`);
                set(newNodeRef, null);
            }
            const numQuestionsRef = child(dbRef, `users/${userId}/numQuestions`);
            push(numQuestionsRef, questions);

            get(child(dbRef, `users/${userId}/minQuestions`))
            .then((snapshot) => {
                const currMinQuestions = snapshot.val();
                if (currMinQuestions > questions) {
                    // replace node value if new try is less than current node value
                    const minQuestionsRef = child(dbRef, `users/${userId}/minQuestions`);
                    set(minQuestionsRef, questions);
                }
            }).catch((error) => {
                console.log(error);
            })
        } else {
            // otherwise user does not exist
            console.log("No data available");
        }
    }).catch((error) => {
        console.log(error)
    })
}

export {auth, database, writeUserData, updatenumQuestions, getValues}