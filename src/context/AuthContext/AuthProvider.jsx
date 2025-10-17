import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutuser = () => {
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('current user in auth state changed', currentUser)
            setUser(currentUser)
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
        createUser,
        signInUser,
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