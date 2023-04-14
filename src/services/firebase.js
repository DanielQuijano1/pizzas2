// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestone";

const firebaseConfig = {
    apiKey: "AIzaSyAY_DR32X7TmQHdhnFMcBiLoHvV57b_4rM",
    authDomain: "mia-pizza-1ff8d.firebaseapp.com",
    projectId: "mia-pizza-1ff8d",
    storageBucket: "mia-pizza-1ff8d.appspot.com",
    messagingSenderId: "200022043327",
    appId: "1:200022043327:web:4c9e3b26cecd37f7b8740a",
    measurementId: "G-J8KHFMRJ0B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db