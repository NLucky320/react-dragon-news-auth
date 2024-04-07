import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

    const [loading, setLoading]=useState(true)
    
    const createUser = (email, password) => {
           setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

    const signIn = (email, password) => {
      setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

    const logOut = () => {
           setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state change", currentUser);
        setUser(currentUser);
        setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
      user,
      loading,
    createUser,
    signIn,
    logOut,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
