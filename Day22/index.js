console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked lists and log the sum as a linked list.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummy.next;
}

function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function printLinkedList(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

const l1 = createLinkedList([2, 4, 3]); 
const l2 = createLinkedList([5, 6, 4]); 
const sum = addTwoNumbers(l1, l2);
console.log(printLinkedList(sum)); 

const l3 = createLinkedList([0]);
const l4 = createLinkedList([0]);
const sum2 = addTwoNumbers(l3, l4);
console.log(printLinkedList(sum2)); 

const l5 = createLinkedList([9, 9, 9]);
const l6 = createLinkedList([1]);
const sum3 = addTwoNumbers(l5, l6);
console.log(printLinkedList(sum3)); 

console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.

function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); 
console.log(lengthOfLongestSubstring("bbbbb"));    
console.log(lengthOfLongestSubstring("pwwkew"));   
console.log(lengthOfLongestSubstring(""));         
console.log(lengthOfLongestSubstring("au"));       


console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that, together with the x-axis, form a container such that the container holds the most water.
// Log the maximum amount of water for a few test cases.

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); 
console.log(maxArea([1,1]));                
console.log(maxArea([4,3,2,1,4]));          
console.log(maxArea([1,2,1]));              
console.log(maxArea([10,9,8,7,6,5,4,3,2,1])); 



console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Task 4: Solve the "3Sum" problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which sum to zero.
// Log the triplets for a few test cases, including edge cases.

function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; 

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; 
                while (left < right && nums[right] === nums[right - 1]) right--; 
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
console.log(threeSum([0, 0, 0, 0]));         
console.log(threeSum([1, 2, -2, -1]));       
console.log(threeSum([-4, -1, -1, 0, 1, 2])); 
console.log(threeSum([]));                   



console.log("-------------------------------------------------");
console.log("Activity 5: ");

// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.

function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"])) 
console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx", "yxz"])); 
console.log(groupAnagrams(["rat", "tar", "art", "car", "arc"])); 


console.log("-------------------------------------------------");