import React, {useEffect, useState} from 'react';
import { auth } from '../../firebase.js';
import {onAuthStateChanged, signOut} from 'firebase/auth';

function AuthDetails() {
    const [authUser, setauthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                // user is signed in
                setauthUser(user);
            } else {
                // user is not signed in
                setauthUser(null);
            }
            
            // cleanup function
            return () => {
                listen();
            }
        });
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful');
        }).catch((error) => {
            console.log('error');
        });
    };

    return <div>{authUser ? <><p>{`Signed In as ${authUser.email}`}</p> <button onClick={userSignOut}>Sign Out</button></>: <p>Signed Out</p>}</div>;
};

export default AuthDetails