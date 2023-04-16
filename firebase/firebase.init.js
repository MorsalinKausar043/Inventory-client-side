import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);

export default Auth;
