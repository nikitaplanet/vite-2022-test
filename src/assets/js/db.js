// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWi5ruR4K6Mwx61m3uQt0DUfkI9JjdTiY",
    authDomain: "viteproject-b23b7.firebaseapp.com",
    projectId: "viteproject-b23b7",
    storageBucket: "viteproject-b23b7.appspot.com",
    messagingSenderId: "1044190813086",
    appId: "1:1044190813086:web:86e820139894c3447e148f",
    measurementId: "G-KWCWK6EL9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
