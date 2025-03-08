import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB5SqiXcXcB0CyAvYtPKuVVR9WbgHHtkFM",
    authDomain: "chat-react-27c76.firebaseapp.com",
    projectId: "chat-react-27c76",
    storageBucket: "chat-react-27c76.firebasestorage.app",
    messagingSenderId: "186350925974",
    appId: "1:186350925974:web:caefe6547aeac8fc7ceab7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);