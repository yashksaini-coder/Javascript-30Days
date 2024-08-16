console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.

function findMedianSortedArrays(nums1, nums2) {
    const merge = (a, b) => {
        const result = [];
        let i = 0, j = 0;
        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) result.push(a[i++]);
            else result.push(b[j++]);
        }
        return result.concat(a.slice(i)).concat(b.slice(j));
    };

    const merged = merge(nums1, nums2);
    const len = merged.length;
    if (len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else {
        return merged[Math.floor(len / 2)];
    }
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4])); 
console.log(findMedianSortedArrays([0, 0], [0, 0])); 
console.log(findMedianSortedArrays([], [1])); 
console.log(findMedianSortedArrays([2], [])); 


console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each sorted in ascending order, and merges them into one sorted linked list.
// Create a few test cases with linked lists and log the merged list.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    const mergeTwoLists = (l1, l2) => {
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
        current.next = l1 === null ? l2 : l1;
        return dummy.next;
    };

    if (lists.length === 0) return null;

    while (lists.length > 1) {
        const mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            if (i + 1 < lists.length) {
                mergedLists.push(mergeTwoLists(lists[i], lists[i + 1]));
            } else {
                mergedLists.push(lists[i]);
            }
        }
        lists = mergedLists;
    }

    return lists[0];
}

// functions to create and print linked list
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
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

const list1 = createLinkedList([1, 4, 5]);
const list2 = createLinkedList([1, 3, 4]);
const list3 = createLinkedList([2, 6]);
console.log(printLinkedList(mergeKLists([list1, list2, list3]))); 



console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map, where the width of each bar is 1, and computes how much water it can trap after raining.
// Log the amount of trapped water for a few test cases.

function trap(height) {
    const n = height.length;
    if (n === 0) return 0;

    let left = 0;
    let right = n - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); 
console.log(trap([4,2,0,3,2,5])); 
console.log(trap([1,2,3,4,5,6,7,8,9])); 
console.log(trap([5,4,1,2])); 


console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an n x n chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// Log the distinct solutions for a few test cases.

function solveNQueens(n) {
    const result = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    };

    const backtrack = (row) => {
        if (row === n) {
            result.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    };

    backtrack(0);
    return result;
}

console.log(solveNQueens(4)); 
console.log(solveNQueens(2)); 
console.log(solveNQueens(3)); 
console.log(solveNQueens(5)); 


console.log("-------------------------------------------------");
console.log("Activity 5: ");

// Task 5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word. Each transformation can only change one letter, and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.

function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]];

    while (queue.length > 0) {
        const [word, length] = queue.shift();
        if (word === endWord) return length;

        for (let i = 0; i < word.length; i++) {
            for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
                const newWord = word.substring(0, i) + String.fromCharCode(c) + word.substring(i + 1);
                if (wordSet.has(newWord)) {
                    wordSet.delete(newWord);
                    queue.push([newWord, length + 1]);
                }
            }
        }
    }

    return 0;
}

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); 
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); 
console.log(ladderLength("hit", "hit", ["hot","dot","dog","lot","log","cog"])); 
console.log(ladderLength("a", "c", ["a", "b", "c"])); 

console.log("-------------------------------------------------");
