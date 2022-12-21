import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.init'
export const contexApi = createContext()

const auth = getAuth(app);

const AuthContex = ({children}) => {

    const [user, setUser] = useState([])

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }








    const authInfo ={user,createUser}
    return (
        <contexApi.Provider value={authInfo}>
            {children}
        </contexApi.Provider>
    );
};

export default AuthContex;