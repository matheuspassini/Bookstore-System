const Order = require("../entities/Order")

module.exports = class OrderBuilder {
    constructor(items, user) {
        this.order = new Order(items, user)
    }

    build() {
        return this.order
    }
}