const product1 = new Product(1, "Laptop", 3000);
const product2 = new Product(2, "Phone", 1500);
const product3 = new Product(3, "Tablet", 700);


const cart = new ShoppingCart();
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);


console.log("Cart after adding items:");
cart.displayCart();
cart.removeItem(2); 
console.log("Cart after removing an item:");
cart.displayCart();