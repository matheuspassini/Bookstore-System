module.exports = class Product {
    constructor(name, description, price, inStock = 0) {
        this.name = name
        this.description = description
        this.price = price 
        this.inStock = inStock
    }

    addToStock(amount) {
        this.inStock += amount
    }

    removeFromStock(amount) {
        this.inStock -= amount
    }
}