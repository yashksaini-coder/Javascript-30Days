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