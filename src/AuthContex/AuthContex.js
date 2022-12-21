import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init'
export const contexApi = createContext()

const auth = getAuth(app);

const AuthContex = ({children}) => {

    const [user, setUser] = useState([])

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser =(email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(()=>{
        const subscribs = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => subscribs;
    },[]) 





    const authInfo ={user,createUser,loginUser}
    return (
        <contexApi.Provider value={authInfo}>
            {children}
        </contexApi.Provider>
    );
};

export default AuthContex;