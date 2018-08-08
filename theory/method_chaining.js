class Calculator {
    constructor() {
        this.result = 0
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }
}

const calculator = new Calculator();
const test = calculator.add(5).subtract(6).add(10);

console.log("[Client debug] test.result", test.result)
console.log("[Client debug] test", test)