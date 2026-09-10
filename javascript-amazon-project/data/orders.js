export const orders = JSON.parse(localStorage.getItem('orders')) || [];  //for default as initially there will be no order 

export function addOrder(order){
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('orders', JSON.stringify(orders));
}