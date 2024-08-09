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

console.log("-------------------------------------------------");
console.log("Activity 5: ");