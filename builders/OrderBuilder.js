const Order = require("../entities/Order")

module.exports = class OrderBuilder {

    setItems(items) {
        this.items = items
        return this
    }

    setUser(user) {
        this.user = user
        return this
    }

    build() {
        return new Order(
            this.items,
            this.user
        )
    }
}
