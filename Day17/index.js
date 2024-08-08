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

console.log("-------------------------------------------------");

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {

    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeNode() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    displayNodes() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

}

const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);
linkedList.displayNodes();
linkedList.removeNode();
linkedList.removeNode();
linkedList.displayNodes();



console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());


// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(str) {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversedStr = "";
    while (stack.stack.length > 0) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

console.log(reverseString("Hello World!"));

console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        return this.queue.shift();
    }

    front() {
        return this.queue[0];
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.front());


// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

function printerQueue(jobs) {
    const queue = new Queue();
    for (let i = 0; i < jobs.length; i++) {
        queue.enqueue(jobs[i]);
    }
    while (queue.queue.length > 0) {
        console.log("Processing job: " + queue.dequeue());
    }
}

printerQueue(["Job 1", "Job 2", "Job 3", "Job 4", "Job 5"]);

console.log("-------------------------------------------------");
console.log("Activity 4: ");