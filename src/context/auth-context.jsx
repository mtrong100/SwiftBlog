import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const AuthContext = createContext();

function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const [open, setOpen] = useState(false);

  const value = { userInfo, setUserInfo, open, setOpen };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const docRef = query(
          collection(db, "users"),
          where("email", "==", user.email)
        );
        onSnapshot(docRef, (snapshot) => {
          snapshot.forEach((doc) => {
            setUserInfo({
              ...user,
              ...doc.data(),
            });
          });
        });
      } else {
        setUserInfo(null);
      }
    });
  }, []);

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export { useAuth, AuthProvider };
