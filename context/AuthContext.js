import React, { useContext, useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import {  signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    const [Loading, setLoading] = useState(true)
    const userInfo = useRef()

    function signUp(email, password) {
       createUserWithEmailAndPassword(auth, email, password) 
       return 
    }
    function login(email, password) {
      return  signInWithEmailAndPassword(auth, email, password)
        
    }
    function logout() {
        return signOut(auth)
    }


    useEffect(() => {
     const unsubsribe = onAuthStateChanged( auth, async user => { 
        setCurrentUser(user)
        setLoading(false)
     } )
     return unsubsribe
    }, [])
    

    const value = {
        currentUser,
        login,
        logout,
        signUp,
        userInfo
    }


    return(
        <AuthContext.Provider value={value}>{!Loading && children}</AuthContext.Provider>
    )
}