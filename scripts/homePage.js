const productsList = document.querySelector(".products");

function renderProducts() {
  products.forEach((product) => {
    productsList.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                    <a href="product_details.html?id=${
                      product.id
                    }" class="view-details">
                        <img src="${product.image[0]}" alt="Image">
                    </a>
                </div>
                <div class="product-details">
                    <a href="product_details.html?id=${
                      product.id
                    }" class="view-details">
                        <h3 class="product-name">${product.name}</h3>
                    </a>
                    <p class="product-price">$${product.price.toString()}</p>
                    <button class="add-to-cart" onclick="addToCart(${
                      product.id
                    })">
                            Add to cart
                    </button>
                </div>
            </div>
        `;
  });
}
renderProducts();
