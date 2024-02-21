// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut   } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL   } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
import { query, where, getDocs, getDoc, doc, serverTimestamp, updateDoc,} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6kEA7ZpK-RaQVuyxAOYCXTsUUHhmyggU",
  authDomain: "qazicorp-dc957.firebaseapp.com",
  projectId: "qazicorp-dc957",
  storageBucket: "qazicorp-dc957.appspot.com",
  messagingSenderId: "439934521340",
  appId: "1:439934521340:web:17578a698337e98b6e6c79",
  measurementId: "G-5ZJ5ENK7CS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);



export {
    auth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    db,
    collection,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    doc,
    serverTimestamp,
    updateDoc,
    signOut,
    getAuth
}
