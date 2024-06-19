import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5MzePUWBL9rpWg7kE65l8aCzySTIzNKE",
  authDomain: "netflix-8beb6.firebaseapp.com",
  projectId: "netflix-8beb6",
  storageBucket: "netflix-8beb6.appspot.com",
  messagingSenderId: "41100233239",
  appId: "1:41100233239:web:b2a5940df6170871e2aa52",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProcider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    // toast.error(error.code.split("/")[1].split("-").join(""));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    // toast.error(error.code.split("/")[1].split("-").join(""));
  }
};
const logout = () => {
  // signOut(auth);
};

export { auth, db, login, signup, logout };
