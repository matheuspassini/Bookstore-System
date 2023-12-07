const Product = require("../entities/Product")

module.exports = class ProductBuilder {
    constructor() {
        this.product = new Product()
    }

    setName(name) {
        this.product.name = name
        return this
    }

    setDescription(description) {
        this.product.description = description
        return this
    }

    setPrice(price) {
        this.product.price = price
        return this
    }

    setInStock(inStock) {
        this.product.inStock = inStock
        return this
    }

    build() {
        return this.product
    }
}
