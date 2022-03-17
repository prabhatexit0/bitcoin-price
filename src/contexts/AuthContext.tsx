import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification
} from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../firebase";

declare global {
  interface AuthContextType {
    createUser: (email: string, password: string) => Promise<void>;
    signInUser: (email: string, password: string) => Promise<void>;
    currentUser: User | null;
    signOutUser: () => Promise<void>;
    signInUserWithGooogle: () => Promise<void>;
  }
}

export let AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: any) {
  let [currentUser, setCurrentUser] = useState<User | null>(null);
  let auth = getAuth(app);
  

  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
  });

  const signOutUser = async () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const signInUser = async (email: string, password: string) => {
    console.log("Sign In");

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signInUserWithGooogle = async () => {
    let provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (email: string, password: string) => {
    console.log("Hello");
    try {
      let user = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser(user.user);
      sendEmailVerification(user.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        createUser,
        currentUser,
        signInUser,
        signOutUser,
        signInUserWithGooogle
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
