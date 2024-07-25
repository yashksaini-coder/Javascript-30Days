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