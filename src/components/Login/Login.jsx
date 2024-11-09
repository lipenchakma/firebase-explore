import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.init';

const Login = () => {

    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn =() => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user)
            setUser(result.user);
        })
        .catch(error => {
            console.log("ERROR", error)
            setUser(null);
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => console.log("ERROR", error))
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("Sign Out Done")
            setUser(null);
        })
        .catch(error => {
            console.log("ERROR",error)
        })
    }

    return (
        <div className='my-8'>
            {/* <button className='btn btn-error mr-6' onClick={handleGoogleSignIn}>Log in with Google</button>
            <button className='btn btn-error' onClick={handleSignOut}>Sign Out</button> */}

            {
                user ? <button className='btn btn-error' onClick={handleSignOut}>Sign Out</button>
                : 
                <>
                    <button className='btn btn-error mr-6' onClick={handleGoogleSignIn}>Log in with Google</button>
                    <button className='btn btn-error ml-6' onClick={handleGithubSignIn}>Login With Github</button>
                </>
            }

            {
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;