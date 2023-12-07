const Book = require("../entities/Book")
const ProductBuilder = require("./ProductBuilder")

module.exports = class BookBuilder extends ProductBuilder {

    constructor() {
        super()
    }

    setTitle(title) {
        this.title = title
        return this
    }

    setSynopsis(synopsis) {
        this.synopsis = synopsis
        return this
    }

    setPages(pages) {
        this.pages = pages
        return this
    }

    setGenre(genre) {
        this.genre = genre
        return this
    }

    setAuthor(author) {
        this.author = author
        return this
    }

    setDescription(description) {
        this.description = description
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
        return new Book(
            this.title,
            this.synopsis,
            this.pages,
            this.genre,
            this.author,
            this.description,
            this.price,
            this.inStock
        )
    }
}
