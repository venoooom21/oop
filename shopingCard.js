class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(product, quantity) {
        const cartItem = new ShoppingCartItem(product, quantity);
        this.items.push(cartItem);
    }
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
    displayCart() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice()}`);
        });
        console.log(`Total Cart Price: $${this.getTotalPrice()}`);
    }
}
