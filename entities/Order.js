module.exports = class Order {
    #total
    #items
    #user

    constructor(items, user) {
        items.forEach(({product, amount}) => {
            if (amount > product.imStock) {
                throw new Error('Insufficient amount in stock')
            }
        })

        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum, {product, amount}) => sum + (product.price * amount),0)
    }

    get data() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}