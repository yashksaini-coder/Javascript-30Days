console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
localStorage.setItem('myStringKey', 'Hello, World!');
const retrievedString = localStorage.getItem('myStringKey');
console.log(retrievedString); // Output: Hello, World!



// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

// Define an object
const myObject = {
    name: 'Yash',
    age: 24,
    profession: 'Software Engineer'
};
localStorage.setItem('myObjectKey', JSON.stringify(myObject));
const retrievedObject = JSON.parse(localStorage.getItem('myObjectKey'));
console.log(retrievedObject); 


console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
console.log("\nTask Completed!");

console.log("-------------------------------------------------");
console.log("Activity 3: ");



console.log("-------------------------------------------------");
console.log("Activity 4: ");



console.log("-------------------------------------------------");
console.log("Activity 5: ");



console.log("-------------------------------------------------");