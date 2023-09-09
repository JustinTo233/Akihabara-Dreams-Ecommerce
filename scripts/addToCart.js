const cartItems = document.querySelector('.cart-content-container');
const subTotal = document.querySelector('.sub-total');
const totalItemsInCart = document.querySelector('.cart-counter');

// cart array that stores into local storage
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// function to add the products to the cart
function addToCart(id) {
    // check if product already exists in cart
    if (cart.some((item) => item.id === id)) {
        changeQuantity("plus", id);
    } else {
        const item = products.find((product) => product.id === id);

        cart.push({
            ...item,
            quantity: 1
        })
    }

    updateCart();
}

// updates the cart everytime a function is reached
function updateCart() {
    renderCartItems();
    renderSubtotal();

    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart))
}

// render the sub total of the whole cart
function renderSubtotal() {
    let totalPrice = 0,
        totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.quantity;
        totalItems += item.quantity;
    });

    subTotal.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    totalItemsInCart.innerHTML = totalItems;
}

// render the cart items onto the cart
function renderCartItems() {
    let totalPerItems = 0;
    const cartItems = document.querySelector('.table');

    cartItems.innerHTML = "";
    cartItems.innerHTML = `
        <tr class="cart-header">
        <th colspan="2">PRODUCT</th>
        <th>PRICE</th>
        <th>QUANTITY</th>
        <th>TOTAL</th>
        <th></th>
    `;
    cart.forEach((item) => {
        totalPerItems = item.price * item.quantity;
        cartItems.innerHTML += `
                <td>
                    <a href="product_details.html?id=${item.id}">
                        <img class="cart-product-image" src="${item.image[0]}">
                    </a>
                </td>
                <td width="30%">
                    <a href="product_details.html?id=${item.id}" class="cart-product-name">
                    ${item.name}
                    </a>
                </td>
                <td class="cart-product-price">$${item.price}</td>
                <div>
                
                <td class="cart-product-quantity">
                    <div class="product-quantity">
                        <span class="btn minus" onclick="changeQuantity('minus', ${item.id})">-</span>
                        <span class="quantity-amount">${item.quantity}</span>
                        <span class="btn plus" onclick="changeQuantity('plus', ${item.id})">+</span>           
                    </div>
                </td>
                </div>
                <td class="cart-product-total">$${totalPerItems.toFixed(2)}</td>
                <td onclick="removeItemFromCart(${item.id})">
                <i class="fa-solid fa-trash fa-xl"></i>
                </td>
        `;
    });
}

// remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}

// change number of quantity for an item
function changeQuantity(action, id) {
    cart = cart.map((item) => {
        let quantity = item.quantity;

        if (item.id === id) {
            if (action === "minus" && quantity > 1) {
                quantity--;
            } else if (action === "plus" && quantity < item.instock) {
                quantity++;
            }
        }

        return {
            ...item,
            quantity,
        };
    });

    updateCart();
}