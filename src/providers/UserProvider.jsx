import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const UserContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // login
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  // google signIn
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }
  // gitHub signIn
  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  }

  // observe user auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      setUser(loggedUser);
      setLoading(false);
    })

    return () => {
      unsubscribe();
    }
  },[])

  const userInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    googleSignIn,
    gitHubSignIn
  }
  return (
    <UserContext.Provider value={userInfo}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;