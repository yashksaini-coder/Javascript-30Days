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

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello")); // olleh

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.substr(1, str.length - 2));
}

console.log(isPalindrome("Dad")); // true

console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, start, end) {
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
    return binarySearch(arr, target, mid + 1, end);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 5, 0, arr.length - 1)); // 4

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr, target, n) {
    if (n < 0) return 0;
    return (arr[n] === target ? 1 : 0) + countOccurrences(arr, target, n - 1);
}

console.log(countOccurrences([1, 2, 3, 4, 5, 4, 3, 2, 1], 3, 8)); // 2
