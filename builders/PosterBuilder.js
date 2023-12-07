const Poster = require("../entities/Poster")

module.exports = class PosterBuilder {
    constructor(name, description, height, width, price, inStock = 0) {
        this.poster = new Poster(name, description, height, width, price, inStock)
    }

    build() {
        return this.poster
    }
}