const productsList = document.querySelector('.products');

// Rendering items onto the cart
function renderProducts() {
    products.forEach((product) => {
        productsList.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                    <a href="product_details.html?id=${product.id}" class="view-details">
                        <img src="images/${product.image}" alt="Image">
                    </a>
                </div>
                <div class="product-details">
                    <a href="product_details.html?id=${product.id}" class="view-details">
                        <h3 class="product-name">${product.name}</h3>
                    </a>
                    <p class="product-price">$${product.price.toString()}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                            Add to cart
                    </button>
                </div>
            </div>
        `;
    });
}
renderProducts();

// Toggle Mobile Menu
document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.toggle('active');
});



