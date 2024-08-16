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

const sessionStorage = new LocalStorage('./session');

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
const stringValue = "Hello, Node.js!";
sessionStorage.setItem('greeting', stringValue);

// Retrieve and log the string value from sessionStorage
const retrievedString2 = sessionStorage.getItem('greeting');
console.log('Retrieved string from sessionStorage:', retrievedString2);

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

// Task 6: Save an object to sessionStorage by converting it to a JSON string
const userObject = {
    name: "Yash K. Saini",
    email: "yashkumarsaini101@gmail.com",
    age: 20
};

// Convert object to JSON string and save to sessionStorage
sessionStorage.setItem('user', JSON.stringify(userObject));

// Retrieve and parse the object from sessionStorage
const retrievedObjectJSON = sessionStorage.getItem('user');
const retrievedObject2 = JSON.parse(retrievedObjectJSON);

console.log('Retrieved object from sessionStorage:', retrievedObject2);

console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log("\nTask Completed!");

console.log("-------------------------------------------------");
console.log("Activity 5: ");

function saveToStorage(key, value) {
    // Save to localStorage
    localStorage.setItem(key, value);
    // Save to sessionStorage
    sessionStorage.setItem(key, value);

    // Retrieve and log the values from both storage mechanisms
    const localStorageValue = localStorage.getItem(key);
    const sessionStorageValue = sessionStorage.getItem(key);

    console.log(`Value from localStorage: ${localStorageValue}`);
    console.log(`Value from sessionStorage: ${sessionStorageValue}`);
}

// Example usage
saveToStorage('username', 'Yash K. Saini');

function clearAllStorage() {
    // Clear all data from localStorage
    localStorage.clear();
    // Clear all data from sessionStorage
    sessionStorage.clear();

    // Verify that both storages are empty
    console.log('localStorage after clear:', JSON.stringify(localStorage, null, 2));
    console.log('sessionStorage after clear:', JSON.stringify(sessionStorage, null, 2));
}

// clearAllStorage(); This will clear all the data from both localStorage and sessionStorage

console.log("-------------------------------------------------");