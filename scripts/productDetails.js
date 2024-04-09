const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));
const selectedProduct = products.find((product) => product.id === productId);
const productDetailsContainer = document.querySelector(
    '.product-details-container'
);

document.title = selectedProduct.name;

function renderItem() {
    if (selectedProduct.product === 'clothing') {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
    <div class="product-grid">
        <div class="image-slider">
            <div class="slider-container">
            <i class="fa-solid fa-angle-left prev-button" onclick="changeImage(-1)"></i>
                <img src="${
                    selectedProduct.image[0]
                }" class="details-image" alt="Image" id="product-image">
                <i class="fa-solid fa-angle-right next-button" onclick="changeImage(1)"></i>
            </div>
            <div class="image-counter">
            <span class="current-image">1</span> / ${
                selectedProduct.image.length
            }
          </div>
        </div>
        <div class="product-info">
            <h2 class="details-title mb-15">${selectedProduct.name}</h2>
            <p class="details-price mb-15">$${selectedProduct.price.toString()}</p>
            <p class="details-series mb-15">
            <strong>Series: </strong>
            <span>${selectedProduct.series}</span></p>
            <p class="details-character mb-15">
            <strong>Character: </strong>
            <span>${selectedProduct.character}</span></p>
            <p class="details-material mb-15">
            <strong>Material: </strong>
            <span>${selectedProduct.material}</span></p>
            <p class="details-productType mb-15">
            <strong>Product Type: </strong>
            <span>${selectedProduct.productType}</span></p>
            <p class="details-manufacturer mb-15">
            <strong>Manufacturer: </strong>
            <span>${selectedProduct.manufacturer}</span></p>
            <p class="details-dimensions mb-15">
            <strong>Dimensions (approx): </strong>
            <span>${selectedProduct.dimensions}</span></p>
            <div class="details-size mb-15">Size: 
                <span class="clothing-size">${selectedProduct.sizes[0]}</span>
                <span class="clothing-size">${selectedProduct.sizes[1]}</span>
                <span class="clothing-size">${selectedProduct.sizes[2]}</span>
                <span class="clothing-size">${selectedProduct.sizes[3]}</span>
            </div>
            <div class="details-quantity mb-15">Quantity: <div>
        </div>
        <button class="add-to-cart" onclick="addToCart(${selectedProduct.id})">
            Add to cart
        </button>
    </div>
                `;
        productDetailsContainer.appendChild(newDiv);
    } else {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
      <div class="product-grid">
        <div class="image-slider">
            <div class="slider-container">
            <i class="fa-solid fa-angle-left prev-button" onclick="changeImage(-1)"></i>
                <img src="${
                    selectedProduct.image[0]
                }" class="details-image" alt="Image" id="product-image">
                <i class="fa-solid fa-angle-right next-button" onclick="changeImage(1)"></i>
            </div>
            <div class="image-counter">
            <span class="current-image">1</span> / ${
                selectedProduct.image.length
            }
            </div>
        </div>
        <div class="product-info">
            <h2 class="details-title mb-15">${selectedProduct.name}</h2>
            <p class="details-price mb-15">$${selectedProduct.price.toString()}</p>
            <p class="details-series mb-15">
            <strong>Series: </strong>
            <span>${selectedProduct.series}</span></p>
            <p class="details-character mb-15">
            <strong>Character: </strong>
            <span>${selectedProduct.character}</span></p>
            <p class="details-material mb-15">
            <strong>Material: </strong>
            <span>${selectedProduct.material}</span></p>
            <p class="details-productType mb-15">
            <strong>Product Type: </strong>
            <span>${selectedProduct.productType}</span></p>
            <p class="details-manufacturer mb-15">
            <strong>Manufacturer: </strong>
            <span>${selectedProduct.manufacturer}</span></p>
            <p class="details-dimensions mb-15">
            <strong>Dimensions (approx): </strong>
            <span>${selectedProduct.dimensions}</span></p>
            <div class="details-quantity mb-15">Quantity: <div>
        </div>
        <button class="add-to-cart" onclick="addToCart(${selectedProduct.id})">
            Add to cart
        </button>
      </div>
                  `;
        productDetailsContainer.appendChild(newDiv);
    }

    let currentImageIndex = 0;
    const imageElement = document.querySelector('.details-image');
    const images = selectedProduct.image;
    const currentImageSpan = document.querySelector('.current-image');

    function updateImageCounter() {
        currentImageSpan.textContent = `${currentImageIndex + 1}`;
    }

    function changeImage(offset) {
        currentImageIndex += offset;

        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        } else if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        imageElement.src = images[currentImageIndex];

        updateImageCounter();
    }

    // Initial image slider setup
    if (images.length > 1) {
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');

        prevButton.addEventListener('click', () => changeImage(-1));
        nextButton.addEventListener('click', () => changeImage(1));
    }
}
renderItem();
