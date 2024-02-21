import { collection, getDocs, db, where, query, getDoc, doc } from "./firebase.js"

var urlParams = new URLSearchParams(window.location.search);

const getProductDetail = async () => {
    const productName = document.getElementById("heading")
    const docRef = doc(db, "product-category", urlParams.get('product'));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        productName.innerHTML = docSnap.data().name;
        // console.log("Document data:", docSnap.data());

    } else {
        // docSnap.data() will be undefined in this case
        // console.log("No such document!");
    }
}
getProductDetail()

let variants = [];
const getAllVariant = async () => {
    const allVariant = document.getElementById("all-variant");
    const q = query(collection(db, "variant"), where('product', "==", urlParams.get('product')));
    const querySnapshot = await getDocs(q);
    allVariant.innerHTML = ``
    querySnapshot.forEach((doc) => {
        variants.push({ ...doc.data(), id: doc.id })
        // console.log(doc.data())
        allVariant.innerHTML += `
        <div class="row px-3 py-4">
                    <div class="col">
                        <div class="card" style="width: 15rem">
                            <img src="${doc.data().image}" height="210px" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Rs.${doc.data().price} + GST</h5>
                                <p class="card-text">${doc.data().variant}<br> ${doc.data().size}
                                </p>
                            </div>

                            <p style="margin-left:12px">
                                <span class="badge rounded-pill text-bg-success">38 Micron</span>
                                <span class="badge rounded-pill text-bg-success">40 Micron</span> <span
                                    class="badge rounded-pill text-bg-success">42 Micron</span>
                            </p>
                            <div class="card-body">
                                <button onclick="updateQty('-','${doc.id}')" class="qty-btn">-</button>
                                <span class="fw-bold" id="${doc.id}">1</span>
                                <button onclick="updateQty('+','${doc.id}')" class="qty-btn">+</button>
                                <a href="#" class="btn btn-outline-primary" onclick="addToCart('${doc.id}')">Add to Cart</a>
                            </div>
                        </div>

                    </div>
                    
      `
    });
}

getAllVariant()

const updateQty = (type, id) => {
    const qty = document.getElementById(id);
    if (Number(qty.innerHTML) < 2 && type === "-") {
        return;
    }
    if (type === "+") {
        qty.innerHTML = Number(qty.innerHTML) + 1
    } else {
        qty.innerHTML = Number(qty.innerHTML) - 1
    }
    // console.log(qty.innerHTML)
    // console.log(id)
    // console.log(type)
}

const addToCart = (id) => {
    const cartItems = localStorage.getItem('cart');
    const cart = cartItems ? JSON.parse(cartItems) : [];
    const qty = document.getElementById(id);
    const variant = variants.filter(v => v.id === id)
    cart.push({ ...variant[0], qty: Number(qty.innerHTML) })
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("cart", cart);
    const totalAmount = document.getElementById("totalAmount");
    const sum = cart.reduce((a, b) => a + Number(b.price) * b.qty, 0);
    totalAmount.innerHTML = `Rs.${sum + 100}/-`
    console.log("sum", sum)
    getCartItems()
}

const getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const checkoutBtn = document.getElementById("checkoutBtn");

    console.log(cartItems)

    // if(cartItems.length){
    //     checkoutBtn.disabled = false;
    // }

    // else{
    //     checkoutBtn.disabled = true;
    // }

    const cart = document.getElementById("cart")
    cart.innerHTML = ""
    if (cartItems) {
        for (var i = 0; i < cartItems.length; i++) {
            // console.log(cartItems[i])
            cart.innerHTML += `
            <div class="card" style="width:;">
                            <img src="${cartItems[i].image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Rs.${cartItems[i].price} + GST x ${cartItems[i].qty} =${cartItems[i].price * cartItems[i].qty} + GST</h5>
                                <p class="card-text">${cartItems[i].variant} <br> ${cartItems[i].size}
                                </p>
                            </div>

                            <p style="margin-left:12px">
                            </p>
                            <div class="card-body">
                                <button class="btn btn-outline-primary" onClick="deleteCartItem('${i}')"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
            `
        }
    }
}

getCartItems()

const deleteCartItem = (i) => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    cartItems.splice(Number(i), 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    const totalAmount = document.getElementById("totalAmount");
    const sum = cartItems.reduce((a, b) => a + Number(b.price) * b.qty, 0);
    totalAmount.innerHTML = `Rs.${sum + 100}/-`
    getCartItems()

}


window.updateQty = updateQty;
window.addToCart = addToCart;
window.deleteCartItem = deleteCartItem;


