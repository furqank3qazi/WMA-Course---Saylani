import { onAuthStateChanged, auth, storage, ref, uploadBytesResumable, getDownloadURL, db, collection, addDoc, getDocs, signOut, getAuth } from "./firebase.js"

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

const image = document.getElementById("category-image");
const selectedImage = document.getElementById("selected-image");
let file;

image && image.addEventListener("change", (e) => {
    file = e.target.files[0];
    selectedImage.style.display = "block";
    selectedImage.src = URL.createObjectURL(e.target.files[0])
})

let uploadFile = (file, name) => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `images/${name.split(" ").join("-")}`);

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    resolve(downloadURL)
                }
                );

            }
        );
    })
}

const getAllCategories = async () => {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    const q = collection(db, "product-category");

    const querySnapshot = await getDocs(q);
    let index = 0;
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      index++
      productList.innerHTML += `
      <tr>
        <th scope="row">${index}</th>
        <td><img class="product-logo-image" src="${doc.data().image}" alt=""></td>
        <td>${doc.data().name}</td>
        <td>${doc.data().color}</td>
        <td>@mdo</td>
      </tr>
      `
    });
}
getAllCategories()

const submitCategory = document.getElementById("submit-category");

submitCategory && submitCategory.addEventListener('click', async () => {
    const closeBtn = document.getElementById("close-btn");
    const spinner = document.getElementById("category-spinner");
    const name = document.getElementById("category-name");
    const color = document.getElementById("product-color");
    spinner.style.display = "block"
    const image = await uploadFile(file, name.value)
    const docRef = await addDoc(collection(db, "product-category"), {
        name: name.value,
        color: color.value,
        image
    });
    spinner.style.display = "none";
    name.value = "";
    color.value = "";
    selectedImage.style.display = "none";
    console.log("Document written with ID: ", docRef.id);
    getAllCategories();
    closeBtn.click()
});

export { uploadFile };

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

