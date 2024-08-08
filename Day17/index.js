console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
console.log(node1);
console.log(node2);
console.log(node3);
console.log(node4);
console.log(node5);


// Task 2: Implement a LinkedList class with properties head and tail.

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

const linkedList = new LinkedList();

console.log(linkedList);

console.log("-------------------------------------------------");
console.log("Activity 2: ");