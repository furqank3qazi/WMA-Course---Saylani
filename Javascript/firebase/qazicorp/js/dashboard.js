import { auth, onAuthStateChanged, signOut, getAuth } from "./firebase.js"

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user.email)
        if(user.email !== "admin@gmail.com"){
            location.href = "login.html"
        }
      const uid = user.uid;
    } else {
        location.href = "login.html"
    }
  });


let logoutBtn = document.getElementById("logoutBtn");

let Logout = () =>{
  const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  window.location.href = "login.html";
}

logoutBtn.addEventListener('click', Logout)

  
