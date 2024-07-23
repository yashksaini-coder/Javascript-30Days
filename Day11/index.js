console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);}
);

// promise.then((message) => {
//     console.log(message);
// });


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


console.log("-------------------------------------------------");
console.log("Activity 2: ");


// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First data received from server");
    }, 2000);
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second data received from server");
    }, 2000);
});

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Third data received from server");
    }, 2000);
});

promise3.then((message) => {
    console.log(message);
    return promise4;
}).then((message) => {
    console.log(message);
    return promise5;
}).then((message) => {
    console.log(message);
});

console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

let promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise after 5 seconds");
    },5000);
})

async function asyncFunc(){
    let result = await promise6;
    console.log(result);
}

asyncFunc();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

promise8= new Promise((resolve, reject) => {
    setTimeout(() =>{
        reject("Promise rejected after 5 seconds");
    },5000);
})

async function asyncFunc2(){
    try{
        let result = await promise8;
        console.log(result);
    } catch(error){
        console.log(error);
    }
}

asyncFunc2();