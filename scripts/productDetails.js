const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));
const selectedProduct = products.find(product => product.id === productId);
const productDetailsContainer = document.querySelector(".product-details-container");

// Render items onto cart
function renderItem() {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
                <div class="product-grid">
                    <div >
                        <img src="images/${selectedProduct.image}" class="details-image" alt="">
                    </div>
                    <div class="product-info">
                    <h2 class="details-title">${selectedProduct.name}</h2>
                    <p class="details-price">$${selectedProduct.price.toString()}</p>
                    <p class="details-series">
                    <strong>Series: </strong>
                    <span>${selectedProduct.series}</span></p>
                    <p class="details-character">
                    <strong>Character: </strong>
                    <span>${selectedProduct.character}</span></p>
                    <p class="details-material">
                    <strong>Material: </strong>
                    <span>${selectedProduct.material}</span></p>
                    <p class="details-productType">
                    <strong>Product Type: </strong>
                    <span>${selectedProduct.productType}</span></p>
                    <p class="details-manufacturer">
                    <strong>Manufacturer: </strong>
                    <span>${selectedProduct.manufacturer}</span></p>
                    <p class="details-dimensions">
                    <strong>Dimensions: </strong>
                    <span>${selectedProduct.dimensions}</span></p>
                    <button class="add-to-cart" onclick="addToCart(${selectedProduct.id})">
                        Add to cart
                    </button>
                    </div>
                </div>
                `;
    productDetailsContainer.appendChild(newDiv);
}

renderItem();