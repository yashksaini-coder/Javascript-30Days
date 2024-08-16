console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
  throw new Error("This is an error message");
}

try {
  throwError();
} catch (error) {
  console.log(error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function diverror(){
  try {
    let a = 10;
    let b = 0;
    if (b==0) {throw new Error("Divide by zero error");};
    console.log(c);
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

diverror();

console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try{
    console.log("Start of try runs");
    unicycle;
    console.log("End of try runs");
}catch(err){
    console.log("Error has occured: " + err);
}finally{
    console.log("This is always run");
}

console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Task 4:  Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

function customError() {
  throw new CustomError("This is a custom error");
}

try {
  customError();
} catch (error) {
  console.log(error.message);
}   

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}   

function validateInput(input) {
    if (input === "") {
        throw new ValidationError("Input cannot be empty");
    }
}

try {
    validateInput("");
    console.log("Validating input...");
}catch(error){
    console.log(error.message);
}

console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

let promise = new Promise((resolve, reject) => {
  let random = Math.random();
  if (random < 0.5) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});


// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

let promise2 = new Promise((resolve, reject) => {
    let random = Math.random();
    if (random < 0.5) {
      resolve("Success");
    } else {
      reject("Error");
    }
});
  
promise2.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

async function randomPromise() {
    try {
      let result = await promise2;
      console.log(result);
    } catch (error) {
        console.log(error);
    }
}

randomPromise();

console.log("-------------------------------------------------");
console.log("Activity 5: ");

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch("https://jsonplaceholder.typicode.")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error: " + error));

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
    try {
      let response = await fetch("https://r.typicocom/posts");
      let data = await response.json();
      console.log(data);
    } catch (error) {
        console.log("Error: " + error);
    }
}