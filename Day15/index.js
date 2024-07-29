console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1:  Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction(){
    let message = "Hello, World!";
    function innerFunction(){
        console.log(message);
    }
    return innerFunction;
}

const innerFunction = outerFunction();
innerFunction();

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function counter(){
    let count = 0;
    return {
        increment: function(){
            count++;
        },
        getCount: function(){
            return count;
        }
    };
}

const counter1 = counter();
counter1.increment();
counter1.increment();
console.log(counter1.getCount());


console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generateID(){
    let id = 0;
    return function(){
        id++;
        return id;
    };
}

const idGenerator = generateID();
console.log(idGenerator());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function greetUser(name){
    return function(){
        console.log(`Hello, ${name}!`);
    };
}

const greet = greetUser("John");
greet();


console.log("-------------------------------------------------");
console.log("Activity 3: ");


// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.


// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

// Activity 5: Memoization

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
// Task 8: Create a memoized version of a function that calculates the factorial of a number.
