console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

const bubbleSort = (arr) => {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort: ", bubbleSort(arr));

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

const selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Selection Sort: ", selectionSort(arr2));


// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

let arr3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Quick Sort: ", quickSort(arr3));

console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr4 = [64, 34, 25, 12, 22, 11, 90];
let target = 22;

console.log("Linear Search: ", linearSearch(arr4, target));

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let arr5 = [11, 12, 22, 25, 34, 64, 90];
let target2 = 22;

console.log("Binary Search: ", binarySearch(arr5, target2));

console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Write a function to count the occurrences of each character in a string. Log the character counts.

const countCharacters = (str) => {
    let charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}

let str = "hello";
console.log("Character Count: ", countCharacters(str));

//  Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

const longestSubstring = (str) => {
    let longest = 0;
    let start = 0;
    let charIndex = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charIndex[char] >= start) {
            start = charIndex[char] + 1;
        }
        charIndex[char] = i;
        longest = Math.max(longest, i - start + 1);
    }
    return longest;
}

let str2 = "abcabcbb";
console.log("Longest Substring: ", longestSubstring(str2));

console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Task 8: Write a function to rotate an array by k positions. Log the rotated array.

const rotateArray = (arr, k) => {
    k = k % arr.length;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[(i + k) % arr.length]);
    }
    return result;
}

let arr6 = [4, 2, 9, 5, 1, 3, 6, 8, 7];
let k = 3;
console.log("Rotate Array: ", rotateArray(arr6, k));

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

const mergeArrays = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

let arr7 = [1, 3, 5, 7];
let arr8 = [2, 4, 6, 8];
console.log("Merge Arrays: ", mergeArrays(arr7, arr8));

console.log("-------------------------------------------------");
console.log("Activity 5: ");

// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

const fibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

let n = 10;
console.log("Fibonacci: ", fibonacci(n));

//  Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

const knapsack = (weights, values, capacity) => {
    let n = weights.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

let weights = [2, 3, 4, 5];
let values = [3, 4, 5, 6];
let capacity = 5;
console.log("Knapsack: ", knapsack(weights, values, capacity));

console.log("-------------------------------------------------");
