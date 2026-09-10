import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../../javascript-amazon-project/data/products.js";
import { loadCart } from "../../javascript-amazon-project/data/cart.js";
// import '../../javascript-amazon-project/data/cart-class.js';
// import '../../javascript-amazon-project/data/backend-practise.js';


async function loadPage(){
    try {
        //throw 'error1';
        await loadProductsFetch();
    
        const value = await new Promise((resolve,reject) => {
        //throw 'error2' 
        loadCart(()=> {
        //reject('error3');
        resolve('value3');
    });
});
    } catch (error) {
        console.log('error');
    }
    
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

/*
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
*/


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

