const Author = require('../entities/Author')

module.exports = class AuthorBuilder {
    setName(name) {
        this.name = name
        return this // Return this instead of name
    }

    setNationality(nationality) {
        this.nationality = nationality
        return this
    }

    setBio(bio) {
        this.bio = bio
        return this
    }

    build() {
        return new Author(
            this.name,
            this.nationality,
            this.bio
        )
    }
}
