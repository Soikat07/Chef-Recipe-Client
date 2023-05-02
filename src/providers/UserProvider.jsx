import React, { createContext, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const UserContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  // registration
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // google signIn
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }
  // gitHub signIn
  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  }
  const userInfo = {
    user,
    createUser,
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