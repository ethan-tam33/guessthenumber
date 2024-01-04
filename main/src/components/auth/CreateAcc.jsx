import React, {useState} from 'react'
import { auth, database, writeUserData} from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import firebase from 'firebase/compat/app';
// import 'firebase/database'

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
            console.log(userCredential);
        })
        .catch((error) => {
            // error
            console.log(error);
        });
        
        // add user to database
        const userId = 123;
        writeUserData(userId, email, []);
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
                ></input>

                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                ></input>
                
                <button>Create Account</button>
            </form>
        </div>
    )
}

export default CreateAcc