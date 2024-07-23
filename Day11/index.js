console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);}
);

promise.then((message) => {
    console.log(message);
});

// Task 2: Create a promise that resolves with a message after a 2-second timeout and handle the error using catch().
const promise2 = new Promise((resolve, reject) => {
    let success = false;
    setTimeout(() => {
        if (!success) {
            reject("Promise rejected after 2 seconds");
        } else {
            resolve("Promise resolved after 2 seconds");
        }
    }, 2000);}  
);

promise2.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

