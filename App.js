const Database = require("./Database")
const Book = require("./entities/Book")
const Poster = require("./entities/Poster")


module.exports = class App {
    static #database = new Database()

    createUser(createUserWithBuilder) {
        const user = createUserWithBuilder
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users')
    }

    createAuthor(createAuthorWithBuilder) {
        const author = createAuthorWithBuilder
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find('authors')
    }

    createBook(createBookWithBuilder) {
        const book = createBookWithBuilder
        App.#database.saveBook(book)
    }

    addBook(bookName, amount) {
        App.#database.addBookToStock(bookName, amount)
    }

    getBooks() {
        return App.#database.find('books')
    }

    createPoster(createPosterWithBuilder) {
        const poster = createPosterWithBuilder
        App.#database.savePoster(poster)
    }

    addPoster(posterName, amount) {
        App.#database.addPosterToStock(posterName, amount)
    }

    getPosters() {
        return App.#database.find('posters')
    }

    createOrder(createOrderWithBuilder) {
        const order = createOrderWithBuilder
        App.#database.saveOrder(order)
        order.data.items.forEach(({ product, amount }) => {
            if (product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, amount)
            } else if (product instanceof Poster) {
                App.#database.removePostersFromStock(product.name, amount)
            }
        })
    }


    getOrders() {
        App.#database.find('orders')
    }

    showDatabase() {
        App.#database.showStorage()
    }
}
