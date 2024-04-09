const urlParams = new URLSearchParams(window.location.search);
const productSeries = urlParams.get('collections');
const selectedProduct = products.find(
    (product) => product.anime === productSeries
);
const productDetailsContainer = document.querySelector(
    '.product-series-container'
);

// Add this code to your productSeries.js file
document.addEventListener('DOMContentLoaded', function () {
    // Get the collection name from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const collection = urlParams.get('collections');

    // Filter products based on the collection
    const filteredProducts = products.filter((product) => {
        return product.anime === collection;
    });

    // Get the product container
    const productContainer = document.getElementById(
        'product-series-container'
    );

    // Display filtered products
    filteredProducts.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        // Create the product HTML structure (customize as needed)
        productElement.innerHTML = `
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
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to cart
            </button>
        </div>
    </div>
        `;

        // Append the product element to the container
        productContainer.appendChild(productElement);
    });
});
