const Product = require("../entities/Product")


module.exports = class ProductBuilder {
    constructor(name, description, price, inStock = 0) {
        this.product = new Product(name, description, price, inStock)
    }

    build() {
        return this.product
    }
}