import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'

import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDJAWYLaGlXYZ9cbwe7BXim4-R_R19OjVw",
    authDomain: "qazicorp-9341a.firebaseapp.com",
    projectId: "qazicorp-9341a",
    storageBucket: "qazicorp-9341a.appspot.com",
    messagingSenderId: "377529557780",
    appId: "1:377529557780:web:c9113387b99d7f675e5801",
    measurementId: "G-F7RM6NJVGP"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
  
const register = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    console.log(email.value, password.value)

    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user --->", user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorMessage", errorMessage)
    // ..
  });

}

let registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", register)
