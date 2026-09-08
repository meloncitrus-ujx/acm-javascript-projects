import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../../javascript-amazon-project/data/products.js";
// import '../../javascript-amazon-project/data/cart-class.js';
// import '../../javascript-amazon-project/data/backend-practise.js';

loadProducts(() => {
    renderOrderSummary(); 
    renderPaymentSummary();
});

