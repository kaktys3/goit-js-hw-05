class Car {
    car = {
        maxSpeed: 0,
        speed: 0,
        isOn: false,
        distance: 0,
        price: 0
    };

    constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
        this.car.maxSpeed = maxSpeed;
        this.car.speed = speed;
        this.car.isOn = isOn;
        this.car.distance = distance;
        this.car.price = price;
    }

    static getSpecs(car) {
        console.log(`Max speed: ${car.car.maxSpeed}, Speed: ${car.car.speed}, Is on: ${car.car.isOn}, Distance: ${car.car.distance}, Price: ${car.car.price}`);
    }

    turnOn() {
        let questions = prompt("Ви хочете завести автомобіль? (так/ні)");
        this.car.isOn = questions === "так";
    }

    turnOff() {
        let questions = prompt("Ви хочете заглушити автомобіль? (так/ні)");
        if (questions === "так") {
            this.car.isOn = false;
            this.car.speed = 0;
        }
    }

    accelerate(speed) {
        if (this.car.isOn && speed <= this.car.maxSpeed) {
            this.car.speed = speed;
        }
    }

    drive(hours) {
        if (this.car.isOn) {
            this.car.distance += hours * this.car.speed;
        }
    }

    get price() {
        return this.car.price;
    }

    set price(newPrice) {
        this.car.price = newPrice;
    }
}


const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(100);
mustang.drive(2);
Car.getSpecs(mustang);