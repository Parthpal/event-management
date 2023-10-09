import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.init';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext=createContext('null');
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const provider = new GoogleAuthProvider();
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn=()=>{
       return signInWithPopup(auth, provider)
    }
    // const updateInfo=(c_user,{name,photo})=>{
    //     return updateProfile(c_user, {
    //         displayName: name, photoURL: photo
    //       })
    // }
 
    const logOut=()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
             setUser(currentUser);
             console.log('user in the current state',currentUser);
             setLoading(false);
            // setLoading(false);
         })
         return ()=>{
             unSubscribe();
         }
     },[])

    const authInfo={user,createUser,logIn,googleSignIn,logOut,loading};
    return (
<AuthContext.Provider value={authInfo}>

        {children}

</AuthContext.Provider>
    );
};

export default AuthProvider;