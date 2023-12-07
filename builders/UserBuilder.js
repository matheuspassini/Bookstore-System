const User = require("../entities/User")

module.exports = class UserBuilder {

    setName(name) {
        this.name = name
        return this
    }

    setEmail(email) {
        this.email = email
        return this
    }

    setPassword(password) {
        this.password = password
        return this
    }

    build() {
        return new User(
            this.name,
            this.email,
            this.password
        )
    }
}
