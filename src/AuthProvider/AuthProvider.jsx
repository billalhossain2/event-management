import React, { createContext, useEffect, useState } from "react";
export const UserAuthContext = createContext();

import app from "../firebase/firebase.config";
import {FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
const auth = getAuth(app);

//providers for social login
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ status: "Testing..." });
  const [loading, setLoading] = useState(true);

  //firebase implementation
  const loginWithGoogle = ()=>signInWithPopup(auth, googleProvider);
  const loginWithFacebook = ()=>signInWithPopup(auth, facebookProvider);
  
  //email and password authentication
  const registerWithEmailAndPassword = (email, password)=>createUserWithEmailAndPassword(auth, email, password)
  const updateUserProfile = (userData)=>updateProfile(auth.currentUser, userData)
  const loginWithEmailAndPassword = (email, password)=>signInWithEmailAndPassword(auth, email, password)
  const signOutUser = ()=>signOut(auth);

  //expose to all components
  const userInfo = {
    user,
    loading,
    loginWithGoogle,
    loginWithFacebook,
    registerWithEmailAndPassword,
    updateUserProfile,
    loginWithEmailAndPassword,
    signOutUser
  };

  //manage auth state
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user)=>{
      setUser(user);
      setLoading(false)
    })
    return ()=>unSubscribe()
  }, [user])

  return <UserAuthContext.Provider value={userInfo}>{children}</UserAuthContext.Provider>;
};

export default AuthProvider;
