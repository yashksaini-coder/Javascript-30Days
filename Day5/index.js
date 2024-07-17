console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Write a function to check if a number is even or odd and log the result to the console.
function checker(num){
    if (num % 2 ==0) console.log(num + " is even.");
    else console.log(num + " is odd.");
}

checker(2);
checker(3);

// Task 2: Write a function to calculate the square of a number and return the result.

function square(num){
    console.log("Square of " + num + " is " + num*num);
}

square(2);
square(3);


console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

let max = function(num1, num2){
    if (num1 > num2) console.log(num1 + " is greater than " + num2);
    else console.log(num2 + " is greater than " + num1);
}

max(2,3);


// Task 4: Write a function expression to concatenate two strings and return the result.

let concat = function(str1, str2){
    return str1 + " " + str2;
}

console.log(concat("Hello", "World"));

console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Task 4: Write an arrow function to calculate the sum of two numbers and return the result.

sum = (num1, num2) => num1 + num2;

console.log(sum(2,3));

// Task 5: Write an arrow function to check if a string contains a specific character and return a boolean value.

contains = (str, char) => str.includes(char);

console.log(contains("Hello", "e"));
console.log(contains("Hello", "a"));



console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function product(num1, num2 = 2){
    return num1 * num2;
}

console.log(product(5,3));
console.log(product(5));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(str, age = 18){
    return "Hello " + str + ". You are " + age + " years old.";
}

console.log(greet("Deepanshu", 20));
console.log(greet("Paras"));

console.log("-------------------------------------------------");
console.log("Activity 5: ");