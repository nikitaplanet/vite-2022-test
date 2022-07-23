// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";
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
    measurementId: "G-KWCWK6EL9Y",
    databaseURL: "https://viteproject-b23b7-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function setData(path, data) {
    const db = getDatabase(app);
    set(ref(db, path), data);
}

export function getData(path) {
    const dbRef = ref(getDatabase(app));
    return new Promise((resolve, reject) => {
        get(child(dbRef, path)).then((snapshot) => {
            if (snapshot.exists()) {
                resolve(snapshot.val());
            } else {
                resolve(null);
            }
        }).catch((error) => {
            resolve(null);
        });
    });

}

