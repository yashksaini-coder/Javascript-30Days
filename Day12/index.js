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