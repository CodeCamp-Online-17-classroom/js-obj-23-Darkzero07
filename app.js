class Calculator {
    constructor(value) {
        this.value = value
    }
    add(number) {
        return this.value += number
    }
    subtract(number) {
        return this.value -= number
    }
    multiply(number) {
        return this.value *= number
    }
    divide(number) {
        return this.value /= number
    }
    show() {
        console.log(this.value)
    }
}

let cal = new Calculator(10);
console.log(cal.add(5))
console.log(cal.subtract(3))
console.log(cal.multiply(5))
console.log(cal.divide(2))
cal.show()