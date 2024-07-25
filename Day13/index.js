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

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

const PI = 3.14;
const E = 2.71;

function square(x) {
    return x * x;
}   

function cube(x) {
    return x * x * x;
}

module.exports = {
    PI,
    E,
    square,
    cube
}

console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

const _ = require('lodash');
const arr = [1, 2, 3, 4, 5];
console.log(_.sum(arr));

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.log(error);
});

console.log("-------------------------------------------------");
console.log("Activity 5: ");