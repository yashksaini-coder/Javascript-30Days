console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.


function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6));      
console.log(twoSum([3, 3], 6));         
console.log(twoSum([1, 5, 3, 4], 8));   


console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases.

function reverseInteger(x) {
    const isNegative = x < 0;
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));

    if (reversed > 2**31 - 1) {
        return 0;
    }

    return isNegative ? -reversed : reversed;
}

console.log(reverseInteger(123));    
console.log(reverseInteger(-123));   
console.log(reverseInteger(120));    
console.log(reverseInteger(0));      
console.log(reverseInteger(1534236469));  



console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// Log the result for a few test cases, including edge cases like negative numbers.

function isPalindrome(x) {
    if (x < 0) return false;
        const str = x.toString();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome(101));   
console.log(isPalindrome(1012));  
console.log(isPalindrome(10070010));    
console.log(isPalindrome(23456543));


console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    // Attach the remaining nodes
    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

// function to create a linked list from an array
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print linked list as an array
function printLinkedList(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);
const mergedList = mergeTwoLists(list1, list2);
console.log(printLinkedList(mergedList));

const list3 = createLinkedList([5, 6, 7]);
const list4 = createLinkedList([1, 2, 8]);
const mergedList2 = mergeTwoLists(list3, list4);
console.log(printLinkedList(mergedList2));

const list5 = createLinkedList([]);
const list6 = createLinkedList([0]);
const mergedList3 = mergeTwoLists(list5, list6);
console.log(printLinkedList(mergedList3));


console.log("-------------------------------------------------");
console.log("Activity 5: ");

// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters '(', ')', '[', ']', '{', '}', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.

function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (stack.length > 0 && stack[stack.length - 1] === map[char]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"));        
console.log(isValid("()[]{}"));    
console.log(isValid("(]"));        
console.log(isValid("([)]"));      
console.log(isValid("{[]}"));      

console.log("-------------------------------------------------");