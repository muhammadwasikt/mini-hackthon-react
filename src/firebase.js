
import { initializeApp } from "firebase/app";
import {getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword , onAuthStateChanged , signOut} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC9Cqtb-M_BfaYVO8OMKz9rR3N2HYaeH04",
  authDomain: "mini-hackhaton-react.firebaseapp.com",
  projectId: "mini-hackhaton-react",
  storageBucket: "mini-hackhaton-react.appspot.com",
  messagingSenderId: "1054535240391",
  appId: "1:1054535240391:web:639d05e58033ea6bca8ce2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth , signInWithEmailAndPassword , createUserWithEmailAndPassword ,onAuthStateChanged , signOut}
