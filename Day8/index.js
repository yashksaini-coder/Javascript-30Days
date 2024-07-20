console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = "John";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);

// Task 2: Create a multi-line string using template literals and log it to the console.

let multiLineString = `This is a multi-line string.
It is created using template literals.
It is very convenient to use.`;
console.log(`This is multiLineString:- ${multiLineString}`);


console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

arr = [1, 2, 3, 4, 5];
let [first, second] = arr;
console.log(`First element: ${first}, Second element: ${second}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title: "The Alchemist",
    author: "Paulo Coelho"
};

let {title, author} = book;
console.log(`Title: ${title}, Author: ${author}`);


console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];

newarr = [...arr1, ...arr2];
console.log(`New Array: ${newarr}`);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }

console.log(`Sum of 1, 2, 3, 4, 5: ${sum(1, 2, 3, 4, 5)}`);


console.log("-------------------------------------------------");
console.log("Activity 4: ");


// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function product(a, b = 1) {
    return a * b;
}

console.log(`Product of 5 and 2: ${product(5, 2)}`);