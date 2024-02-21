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
    try {


        const q = collection(db, "product-category");
        const querySnapshot = await getDocs(q);
        const productSelect = document.getElementById("product-name");

    let index = 0;
    let products = [];
    productSelect.innerHTML += `
    <option selected>Select Product Name</option>
    `
    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(),id:  doc.id })
        index++
        productSelect.innerHTML += `
      <option value="${doc.id}">${doc.data().name}</option>

      `
    });
    return new Promise((resolve,reject) => {
        resolve(products)
        
    })
}catch(err){
    console.log("err", err)
}
}
getAllCategories()

const getAllVariant = async () => {
    const products = await getAllCategories();
    const allVariant = document.getElementById("all-variant");
    const q = collection(db, "variant");

    const querySnapshot = await getDocs(q);
    let index = 0;
    let productNames = {};
    for(var i=0; i < products.length; i++){
        productNames[products[i].id] = products[i].name
    }
    allVariant.innerHTML = ``
    querySnapshot.forEach((doc) => {
        index++
        allVariant.innerHTML += `
      <tr>
      <th scope="row">1</th>
      <td><img class="variant-image" src="${doc.data().image}" ></td>
      <td>${doc.data().variant}</td>
      <td>${doc.data().size}</td>
      <td>${doc.data().price}</td>
      <td>${productNames[doc.data().product]}</td>
    </tr>
      `
    });
}
getAllVariant();

const addVariant = document.getElementById("addVariant");

addVariant.addEventListener('click', async () => {
    const closeBtn = document.getElementById("close-btn");
    const spinner = document.getElementById("variant-spinner");
    const productName = document.getElementById("product-name");
    const variantName = document.getElementById("variant-name");
    const variantPrice = document.getElementById("variant-price");
    const variantSize = document.getElementById("variant-size");
    const variantImage = document.getElementById("variant-image");
    spinner.style.display = "block";
    const image = await uploadFile(variantImage.files[0], variantName.value)
    const variantDetail = {
        product: productName.value,
        variant: variantName.value,
        price: variantPrice.value,
        size: variantSize.value,
        image
    }
    const docRef = await addDoc(collection(db, "variant"), variantDetail);
    productName.value = "";
    variantName.value = "";
    variantPrice.value = "";
    variantSize.value = "";
    variantImage.value = "";
    spinner.style.display = "none";
    closeBtn.click()
    getAllVariant()
    console.log(docRef)
})

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