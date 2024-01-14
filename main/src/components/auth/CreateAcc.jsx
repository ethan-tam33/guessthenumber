import React, {useState} from 'react'
import { auth, writeUserData} from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import firebase from 'firebase/compat/app';
// import 'firebase/database'
import './auth.css'

const CreateAcc = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const createAccError = document.getElementById('createAccError');

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
            createAccError.innerHTML='';
            writeUserData(userId, email);
            document.getElementById("createEmail").value = "";
            document.getElementById("createPassword").value = "";
            createAccError.innerHTML = "Success!";
            console.log(userCredential);
        })
        .catch((error) => {
            // display error
            const errorCode = error.code;
            console.log(error);
            console.log(errorCode);
            
            switch (errorCode) {
                case 'auth/email-already-in-use':
                    createAccError.innerHTML = "This email is already in use. Please use another email."
                    break;
                case 'auth/weak-password':
                    createAccError.innerHTML = "This password is too weak. Please use a stronger password with at least 6 characters.";
                    break;
                case 'auth/invalid-email':
                    createAccError.innerHTML = "Please use a valid email.";
                    break;
            }       
        });
    };
    return (
        <div className='sign-in-container'>
            <form onSubmit={createAcc}>
                <h1>Create Account</h1>
                <p id='createAccError'></p>
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