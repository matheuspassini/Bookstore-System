const Poster = require("../entities/Poster")
const ProductBuilder = require("./ProductBuilder")

module.exports = class PosterBuilder extends ProductBuilder{

    constructor() {
        super()
    }

    setName(name) {
        this.name = name
        return this
    }

    setDescription(description) {
        this.description = description
        return this
    }

    setHeight(height) {
        this.height = height
        return this
    }

    setWidth(width) {
        this.width = width
        return this
    }

    setPrice(price) {
        this.price = price
        return this
    }

    setInStock(inStock) {
        this.inStock = inStock
        return this
    }

    build() {
        return new Poster(
            this.name,
            this.description,
            this.height,
            this.width,
            this.price,
            this.inStock
        )
    }
}
