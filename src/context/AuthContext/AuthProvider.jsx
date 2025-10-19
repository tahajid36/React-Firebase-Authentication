import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';
 const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signOutuser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('current user in auth state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()

        }
        // step 1 observer set 
        // step 2 set in a variable 
        //step 3 return and call variable so we can clear refrence

    },[])

    //get user data 
    // onAuthStateChanged(auth, (currentUser)=>{
    //     if(currentUser){
    //         console.log('inside observer', currentUser)
    //     }
    //     else{
    //         console.log('inside observer else', currentUser)
    //     } 
    // })


    const authInfo = {
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutuser,
        user
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;

// create a context and export in a comp.
// then create Provider comp and set children as prop
//have to wrap the provider in outside router provider
//make the create user with email and password shared in provider
//