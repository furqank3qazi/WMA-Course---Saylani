import { auth, signInWithEmailAndPassword, db, collection, getDocs, onAuthStateChanged, } from "./js/firebase.js"

const login = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    if(user.email === "admin@gmail.com"){
      location.href = "dashboard.html"
    } else {
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("err->", errorMessage)
  });


}

const loginBtn = document.getElementById("loginBtn");
loginBtn && loginBtn.addEventListener("click", login)

const pageSpinner = document.getElementById("page-spinner");

const getAllCategories = async () => {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  const q = collection(db, "product-category");

  const querySnapshot = await getDocs(q);
  let index = 0;
  pageSpinner.style.display = "none"
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());   
    productList.innerHTML += `
    <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${doc.data().image}" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${doc.data().name}</h5>
                        <p class="card-text">${doc.data().color}</p>
                    </div>

                    <p style="margin-left:12px">
                        <span class="badge rounded-pill text-bg-success">1 Inch</span>
                        <span class="badge rounded-pill text-bg-success">2 Inch</span> 
                        <span class="badge rounded-pill text-bg-success">3 Inch</span>
                    </p>
                    <div class="card-body">
                        <a href="order.html?product=${doc.id}" class="btn btn-outline-primary">View All</a>
                    </div>
                </div>

            </div>
    `
  });
}

// onAuthStateChanged(auth, (user)=>{
//   if(user){
//     console.log("running")
//   }
// })

onAuthStateChanged(auth, (user)=>{
  if(user ||
    location.pathname.indexOf("product-category") !== -1 || location.pathname === "index.html")
    {
      console.log("running")
    getAllCategories()
  }
})







// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'

// import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'

//  // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyDJAWYLaGlXYZ9cbwe7BXim4-R_R19OjVw",
//     authDomain: "qazicorp-9341a.firebaseapp.com",
//     projectId: "qazicorp-9341a",
//     storageBucket: "qazicorp-9341a.appspot.com",
//     messagingSenderId: "377529557780",
//     appId: "1:377529557780:web:c9113387b99d7f675e5801",
//     measurementId: "G-F7RM6NJVGP"
//   };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
  
// const register = () => {
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");

//     console.log(email.value, password.value)

//     createUserWithEmailAndPassword(auth, email.value, password.value)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log("user --->", user)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log("errorMessage", errorMessage)
//     // ..
//   });

// }

// let registerBtn = document.getElementById("registerBtn");

// registerBtn.addEventListener("click", register)
