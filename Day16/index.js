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

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumOfArray(arr, n) {
    if (n <= 0) return 0;
    return sumOfArray(arr, n - 1) + arr[n - 1];
}

console.log(sumOfArray([1, 2, 3, 4, 5], 5)); // 15

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxOfArray(arr, n) {
    if (n === 1) return arr[0];
    return Math.max(arr[n - 1], maxOfArray(arr, n - 1));
}

console.log(maxOfArray([19, 22, 43, 84, 125], 5)); // 125

console.log("-------------------------------------------------");
console.log("Activity 3: ");