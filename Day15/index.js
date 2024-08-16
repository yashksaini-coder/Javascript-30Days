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

function createFunctions(n){
    const functions = [];
    for(let i = 0; i < n; i++){
        functions.push(function(){
            console.log(i);
        });
    }
    return functions;
}

const functions = createFunctions(3);
functions.forEach(func => func());


console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function createModule(){
    const items = [];
    return {
        add: function(item){
            items.push(item);
        },
        remove: function(index){
            items.splice(index, 1);
        },
        list: function(){
            return items;
        }
    };
}

// const module = createModule();
// module.add("Apple");
// module.add("Banana");
// module.add("Cherry");
// console.log(module.list());
// module.remove
// module.remove
// module.remove
// console.log(module.list());
console.log("Completed Actviity-4");


console.log("-------------------------------------------------");
console.log("Activity 5: ");

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(func){
    const cache = {};
    return function(n){
        if(cache[n] === undefined){
            cache[n] = func(n);
        }
        return cache[n];
    };
}

function factorial(n){
    if(n === 0){
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));

// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoizeFactorial(n){
    if(n === 0){
        return 1;
    }
    return n * memoizeFactorial(n - 1);
}

const memoizedFactorial1 = memoize(memoizeFactorial);
console.log(memoizedFactorial1(5));

