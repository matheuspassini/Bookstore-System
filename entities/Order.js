module.exports = class Order {
    #total
    #items
    #user

    constructor(items, user) {
        items.forEach(({ product, amount }) => {
            if (!product || !product.inStock || amount > (product.inStock || 0)) {
                throw new Error('Invalid product or insufficient amount in stock')
            }
        })

        this.#items = items
        this.#user = user
        try {
            this.#total = items.reduce((sum, { product, amount }) => sum + (product.price * amount), 0)
        } catch (error) {
            console.error('Error calculating total:', error)
        }
    }

    get data() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}
