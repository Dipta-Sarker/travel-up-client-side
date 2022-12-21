import React, { createContext } from 'react';

export const contexApi = createContext()

const AuthContex = ({children}) => {








    
    const authInfo ={}
    return (
        <contexApi.Provider value={authInfo}>
            {children}
        </contexApi.Provider>
    );
};

export default AuthContex;