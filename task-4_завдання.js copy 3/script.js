class StringBuilder {
    constructor({ value }) {
        this.value = value
    }

    get text() {
        return this.value
    }

    append(str) {
        this.value += str
    }

    prepend(str) {
        this.value = str += this.value
    }

    pad(str) {
        this.value = str += this.value += str
    }
}

let textChanges = new StringBuilder({ value: "a" })
textChanges.pad("b")
console.log(textChanges.text)
