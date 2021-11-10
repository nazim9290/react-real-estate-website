import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const InitializeFirebase = () => {
  return initializeApp(firebaseConfig);
};
export default InitializeFirebase;
