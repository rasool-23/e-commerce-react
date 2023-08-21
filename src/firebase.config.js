import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const app = initializeApp(firebaseConfig)

const firebaseConfig = {
  apiKey: "AIzaSyDDUs-JkgBr4iCOFutc-OqqyyEG5t4iku4",
  authDomain: "e-commerce-1bc39.firebaseapp.com",
  projectId: "e-commerce-1bc39",
  storageBucket: "e-commerce-1bc39.appspot.com",
  messagingSenderId: "366737342799",
  appId: "1:366737342799:web:3acc23d32bab8cccdb453a",
  measurementId: "G-NKGGFMS9LQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
