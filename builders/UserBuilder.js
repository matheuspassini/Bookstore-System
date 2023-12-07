const User = require("../entities/User")

module.exports = class UserBuilder {
    constructor(name, email, password) {
        this.user = new User(name, email, password);
    }

    build() {
        return this.user;
    }
}