import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init'
export const contexApi = createContext()

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthContex = ({children}) => {

    const [user, setUser] = useState([])

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser =(email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const google = () =>{
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const subscribs = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => subscribs;
    },[]) 





    const authInfo ={user,logOut,createUser,loginUser,google}
    return (
        <contexApi.Provider value={authInfo}>
            {children}
        </contexApi.Provider>
    );
};

export default AuthContex;