import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAXOQHWOHcmOHc8eCAdOQqJkph-z0y_Cpo",
  authDomain: "fir-9-dojo-d2d22.firebaseapp.com",
  projectId: "fir-9-dojo-d2d22",
  storageBucket: "fir-9-dojo-d2d22.appspot.com",
  messagingSenderId: "839193416082",
  appId: "1:839193416082:web:b9c23c06c7c6e1ce1b314b",
  measurementId: "G-LPXQVE461W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);