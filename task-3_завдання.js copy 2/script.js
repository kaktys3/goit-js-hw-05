let products = ["apple", "banana", "kivi", "orange"]

class Storage {
    constructor({ items }) {
        this.items = items
    }

    addItem(item) {
        this.items.push(item)
        return this.items
    }

    removeItem(item) {
        for (let i = 0; i < this.items.length; i++) {
            if (item === this.items[i]) {
                this.items.splice(i, 1)
                return this.items
            }
        }
        return this.items
    }

    getItems() {
        return this.items
    }
}

let listProducts = new Storage({ items: products })

console.log(listProducts.addItem("banana"))