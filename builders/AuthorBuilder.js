const Author = require('../entities/Author')

module.exports = class AuthorBuilder {
    constructor(name, nationality, bio) {
        this.author = new Author(name, nationality, bio);
    }

    build() {
        return this.author;
    }
}