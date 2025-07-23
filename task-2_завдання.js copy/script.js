class Person {
    constructor({ name, age, followers }) {
        this.name = name;
        this.age = age;
        this.followers = followers
    }

    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    }
}

let person = new Person({ name: "Jacson", age: 2, followers: 10000000 })
console.log(person.getInfo())