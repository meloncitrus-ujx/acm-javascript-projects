import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../../javascript-amazon-project/data/products.js";
import { loadCart } from "../../javascript-amazon-project/data/cart.js";
// import '../../javascript-amazon-project/data/cart-class.js';
// import '../../javascript-amazon-project/data/backend-practise.js';


Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(()=> {
            resolve();
        });
    })

]).then((values)=> {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});



/*
new Promise((resolve) => {
        loadProducts(()=> {
            resolve();
        });
}).then(()=>{
     return new Promise((resolve) => {
        loadCart(()=> {
            resolve(); 
     }); 
    });
}).then(()=> {
    renderOrderSummary(); 
    renderPaymentSummary();  
    }); */


/*
loadProducts(() => {
    renderOrderSummary(); 
    renderPaymentSummary();
});

loadProducts(() => {
    loadCart(()=> {
         renderOrderSummary(); 
        renderPaymentSummary();
    });
});
//nested callback 

this was a callback */

