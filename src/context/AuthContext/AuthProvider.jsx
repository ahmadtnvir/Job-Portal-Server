import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../services/firebase";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  // Create User
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign IN User
  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
  const signOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("CURRENT_USER", currentUser);
      // ! Send JWT token to server---------------------Start
      if (currentUser?.email) {
        const user = {
          email: currentUser.email,
        };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log("Login Token", res.data);
            setUser(currentUser);
            setLoader(false);
          });
      } else {
        axios
          .post(
            "http://localhost:5000/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("Logout", res.data);
            setUser(currentUser);
            setLoader(false);
          });
      }
      /**
       * 
       * Flow Summary
       * 
          If Logged In:

          The client sends the user’s email to /jwt.
          The server responds with a JWT token in a cookie.
          The client updates its user state.

          If Logged Out:

          The client sends a request to /logout.
          The server clears the JWT cookie.
          The client updates its user state to reflect the logged-out status.
       * 
      **/
      // ! Send JWT token to server---------------------End
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    setUser,
    loader,
    setLoader,
    createUser,
    signInUser,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
