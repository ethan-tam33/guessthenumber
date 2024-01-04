import React, {useState} from 'react'
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const CreateAcc = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createAcc = (e) => {
        e.preventDefault();
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