console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.


function add(a, b) {
    return a + b;
}

module.exports = add;

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const person = {
    name: "John",
    age: 25,
    greet: function() {
        return "Hello, I am " + this.name;
    }
}

module.exports = person;

console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

module.exports = {
    multiply,
    divide
}

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

function subtract(a, b) {
    return a - b;
}

module.exports = subtract;

console.log("-------------------------------------------------");
console.log("Activity 3: ");