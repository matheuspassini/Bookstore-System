const Book = require("../entities/Book")

module.exports = class BookBuilder {
    constructor(title, synopsis, genre, pages, author, description, price, inStock) {
        this.book = new Book(title, synopsis, genre, pages, author, description, price, inStock);
    }

    build() {
        return this.book;
    }
}
