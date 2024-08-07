console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55

console.log("-------------------------------------------------");
console.log("Activity 2: ");