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

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const nodeA = new TreeNode("A");
const nodeB = new TreeNode("B");
const nodeC = new TreeNode("C");
const nodeD = new TreeNode("D");
const nodeE = new TreeNode("E");
const nodeF = new TreeNode("F");
const nodeG = new TreeNode("G");
nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;
nodeC.right = nodeG;
console.log(nodeA);
console.log(nodeB);
console.log(nodeC);
console.log(nodeD);
console.log(nodeE);
console.log(nodeF);
console.log(nodeG);


// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        return;
                    }
                    current = current.right;
                }
            }
        }
    }

    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);

binaryTree.inOrderTraversal(binaryTree.root);

console.log("-------------------------------------------------");
console.log("Activity 5: ");

//Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

class Graph {
    constructor() {
        this.vertices = [];
        this.edges = {};
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
    }

    bfs(startingVertex) {
        const visited = {};
        const queue = [startingVertex];
        visited[startingVertex] = true;
        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);
            for (let i = 0; i < this.edges[currentVertex].length; i++) {
                const neighbor = this.edges[currentVertex][i];
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("C", "G");
graph.bfs("A");


// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

const network = new Graph();
network.addVertex("Router");
network.addVertex("Switch");
network.addVertex("Server");
network.addVertex("Laptop");
network.addVertex("Printer");
network.addVertex("Smartphone");
network.addVertex("Tablet");
network.addEdge("Router", "Switch");
network.addEdge("Router", "Server");
network.addEdge("Switch", "Laptop");
network.bfs("Router");

console.log("-------------------------------------------------");