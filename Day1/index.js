// Task 1: Using var
var num = 42;
console.log("The value of the variable 'num' is:-" + num); 

console.log("\n");
// Task 2: Using let
let greeting = "Hello, world!";
console.log("The string is:- " + greeting); 

console.log("\n");
// Task 3: Using const
const isLearning = true;
console.log("The value of `isLearning` is:- " + isLearning); 

console.log("\n");
// Task 4: Different data types
let number = 10;
let text = "JavaScript";
let isTrue = false;
let person = { name: "John", age: 30 };
let numbers = [1, 2, 3, 4];

console.log("The type of the object is:- " + typeof number); // Output: number
console.log("The type of the object is:- " + typeof text); // Output: string
console.log("The type of the object is:- " + typeof isTrue); // Output: boolean
console.log("The type of the object is:- " + typeof person); // Output: object
console.log("The type of the object is:- " + typeof numbers); // Output: object (arrays are objects in JavaScript)

console.log("\n");
// Task 5: Reassigning let variable
let language = "JavaScript";
console.log("The language is:- " + language); // Output: JavaScript
language = "Python";
console.log("The language is:- " + language); // Output: Python

console.log("\n");
// Task 6: Attempting to reassign const variable
const pi = 3.14;
console.log("The value of 'pi' is:- " + pi); // Output: 3.14
// pi = 3.14159; // Uncommenting this line will cause an error