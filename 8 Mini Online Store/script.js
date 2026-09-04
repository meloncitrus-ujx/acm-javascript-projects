/*
    ALGORITHM: Mini Online Store (MVC Architecture & Jasmine Testing)

    1. DATA MODEL (`cart.js` & `products.js`):
       - Define class `Product` with properties: `id`, `image`, `name`, `rating`, `priceCents`.
       - Add methods to `Product`: `getStarsUrl()` and `getPrice()`.
       - Define class `Cart` with `#localStorageKey` private property and methods:
           - `loadFromStorage()`: Load cart array or initialize with defaults.
           - `saveToStorage()`: Save cart array to LocalStorage.
           - `addToCart(productId)`: Find item or push new item with quantity 1.
           - `removeFromCart(productId)`: Filter out target product and save.
           - `updateDeliveryOption(productId, deliveryOptionId)`: Update option and save.

    2. VIEW & CONTROLLER (`amazon.js` / `checkout.js`):
       - `renderProductsGrid()`:
           - Loop through products array and generate HTML cards.
           - Attach event listeners to all "Add to Cart" buttons using `dataset.productId`.
           - Update cart quantity bubble in navbar.
       - `renderOrderSummary()`:
           - Loop through cart items and calculate delivery dates via `Day.js`.
           - Generate HTML for each item, including quantity controls and radio delivery options.
           - Attach click handlers for delete links and delivery option changes.
           - Call `renderPaymentSummary()` to synchronize totals.
       - `renderPaymentSummary()`:
           - Calculate items total, shipping fees, tax (10%), and final order cost.
           - Render financial breakdown to DOM.

    3. AUTOMATED TESTING (`orderSummaryTest.js` using Jasmine):
       - In `beforeEach()`:
           - Mock `localStorage.setItem` and `localStorage.getItem` with `spyOn()`.
           - Provide test container div in DOM.
           - Render order summary.
       - In `it('displays the cart')`:
           - Assert cart item containers count equals 2 via `expect().toBe(2)`.
       - In `it('removes a product')`:
           - Trigger `.click()` on product 1 delete link.
           - Assert product 1 container is null and remaining cart length is 1.
       - In `afterEach()`:
           - Clean up test DOM container.
*/

// WRITE YOUR CODE BELOW:


import {cart, addToCart} from '../../javascript-amazon-project/data/cart.js'; 
import {products} from '../../javascript-amazon-project/data/products.js';
import {formatCurrency} from './utils/money.js'  ; 


let productsHTML = '';

products.forEach((product) => {
        productsHTML += ` <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
        `;

});


document.querySelector('.js-products-grid').innerHTML = productsHTML;




function updateCartQuantity() {
  let cartQuantity = 0;
      cart.forEach((cartItem)=> {
        cartQuantity += cartItem.quantity;
      }) ;

      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        }

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
        button.addEventListener('click', () => {
           let productId = button.dataset.productId;
           addToCart(productId);
           updateCartQuantity();
 } );
});