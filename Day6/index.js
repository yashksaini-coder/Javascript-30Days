console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr = [1,2,3,4,5];
console.log("The Array is:- "+arr);

// Task 2:- Access the first and last elements of the array and log them to the console.
console.log("The first element of the array is:- "+arr[0]);
console.log("The last element of the array is:- "+arr[arr.length-1]);


console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 3: Use the `push` method to add a new number to the end of the array and log the updated array.
arr[5] = arr.push(6);
console.log("The Array is:- "+arr);

// Task 4: Use the `pop` method to remove the last element from the array and log the updated array.
arr.pop();
console.log("The Array is:- "+arr);

// Task 5: Use the `shift` method to remove the first element from the array and log the updated array.
arr.shift();
console.log("The Array is:- "+arr);

// Task 6: Use the `unshift` method to add a new number to the beginning of the array and log the updated array.
arr.unshift(1);
console.log("The Array is:- "+arr);


console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Task 7: Use the `map` method to create a new array where each number is doubled and log the new array.

let mapArr = arr.map((num) => num*2);
console.log("The new mapped Array is:- "+mapArr);

// Task 8: Use the `filter` method to create a new array with only even numbers and log the new array.

let filterarr = arr.filter((num) => num%2 == 0);
console.log("The new filtered Array is:- "+filterarr);

// Task 9: Use the `reduce` method to calculate the sum of all numbers in the array and log the result.

let reducearr = arr.reduce((acc, num) => acc+num, 0);
console.log("The sum of all the numbers in the array is:- "+reducearr);


console.log("-------------------------------------------------");
console.log("Activity 4: ");




console.log("-------------------------------------------------");
console.log("Activity 5: ");