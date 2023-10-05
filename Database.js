module.exports = class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    findBookByName(bookName) {
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    saveBook(book) {
        const bookExists = this.findBookByName(book.name)
        if(!bookExists) {
            this.#storage.books.push(book)
        }
    }

    addBookToStock(bookName, amount) {
        const book = this.findBookByName(bookName)
        book?.addToStock(amount)
    }

    removeBooksFromStock(bookName, amount) {
        const book = this.findBookByName(bookName)
        book?.removeFromStock(amount)
    }

    findPosterByName(posterName) {
        return this.#storage.posters.find(p => p.name === posterName)
    }

    savePoster(poster) {
        const posterExists = this.findBookByName(poster.name)
        if(!posterExists) {
            this.#storage.posters.push(poster)
        }
    }

    addPostersToStock(posterName, amount) {
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(amount)
    }

    removePostersFromStock(posterName, amount) {
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(amount)
    }

    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if(!userExists) {
            this.#storage.users.push(user)
        }
    }

    saveOrder(order) {
        this.#storage.orders.push(order)
    }

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.users)
        console.table(this.#storage.posters)
        console.table(this.#storage.orders.map(order => order.data))
    }
}

