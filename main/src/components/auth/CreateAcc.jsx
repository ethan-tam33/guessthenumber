import React, {useState} from 'react'
import { auth, database, writeUserData} from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import firebase from 'firebase/compat/app';
// import 'firebase/database'
import './auth.css'

const CreateAcc = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createAcc = (e) => {
        e.preventDefault();

        if (!email) {
            alert("Please enter an email.");
            return;
        }

        if (!password) {
            alert("Please enter a password.");
            return;
        }

        // login function for button
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // signed up
            const userId = userCredential.user.uid;
            writeUserData(userId, email);
            document.getElementById("createEmail").value = "";
            document.getElementById("createPassword").value = "";
            console.log(userCredential);
        })
        .catch((error) => {
            // error
            console.log(error);
        });
    };
    return (
        <div className='sign-in-container'>
            <form onSubmit={createAcc}>
                <h1>Create Account</h1>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                    id='createEmail'
                ></input>

                <br></br>

                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                    id='createPassword'
                ></input>
                
                <button className='button'>Create Account</button>
            </form>
        </div>
    )
}

export default CreateAcc