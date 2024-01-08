import React, {useState} from 'react'
import { auth, updatenumQuestions } from '../../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './auth.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = (e) => {
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
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // signed up
            console.log(userCredential);
            document.getElementById("loginEmail").value = "";
            document.getElementById("loginPassword").value = "";
        })
        .catch((error) => {
            // error
            console.log(error);
        });
    };
    return (
        <div className='sign-in-container'>
            <form onSubmit={logIn}>
                <h1>Log In</h1>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                    id='loginEmail'
                ></input>

                <br></br>

                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                    id='loginPassword'
                ></input>
                
                <button className='button'>Log In</button>
            </form>
        </div>
    )
}

export default Login