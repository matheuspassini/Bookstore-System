const Database = require("./Database")
const Author = require("./entities/Author")
const User = require("./entities/User")
const Book = require("./entities/Book")
const Poster = require("./entities/Poster")
const Order = require("./entities/Order")



module.exports = class App {
    static #database = new Database()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users')
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName, amount) {
        App.#database.addBookToStock(bookName, amount)
    }

    getBooks() {
        return App.#database.find('books')
    }

    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, amount) {
        App.#database.addPosterToStock(posterName, amount)
    }

    getPosters() {
        return App.#database.find('posters')
    }

    createOrder(items, user) {
        const order = new Order(items, user)
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