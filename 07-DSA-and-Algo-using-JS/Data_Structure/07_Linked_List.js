/* ----------------------
// Linked-List
---------------------- */

class Node { // Creating a Node Class...
    constructor(data) {
        this.data = data;
        this.nextNodeAdd = null;
    }
}

class LinkedList { // Creating a Linked-List Class...
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtStart (data) {
        const myNode = new Node(data);

        if (this.head === null && this.tail === null) {
            this.head = myNode; // Head points to the first Node.
            this.tail = myNode; // Tail points to the first Node.
            return;
        }

        myNode.nextNodeAdd = this.head;
        this.head = myNode;
    }

    insertAtLast (data) {
        const myNode = new Node(data); // Add of new Node

        if (this.head === null && this.tail === null) {
            this.head = myNode; // Head points to the first Node.
            this.tail = myNode; // Tail points to the first Node.
            return;
        }

        this.tail.nextNodeAdd = myNode;
        this.tail = myNode;
    }

    deleteAtStart () {
        if (this.head === null) {
            return `No Elements in Linked-List !`;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.head = this.head.nextNodeAdd;
    }

    deleteAtEnd () {
        if (this.head === null) {
            return `No Elements in Linked-List !`;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return
        }

        let current = this.head;

        while (current.nextNodeAdd !== this.tail) {
            current = current.nextNodeAdd;
        }

        current.nextNodeAdd = null;
        this.tail = current;
    }

    length () {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            count++;
            current = current.nextNodeAdd;
        }

        return `Length : ${count}`;
    }

    search (val) {
        let current = this.head;

        while (current !== null) {
            if (current.data === val) {
                return `Match Found : ${current.data}`;
            }
            current = current.nextNodeAdd;
        }

        return `Match Not Found !`;
    }

    traverse () {
        if (this.head === null && this.tail === null) {
            return `List is Empty !`;
        }

        let listStr = "";
        let current = this.head;

        while (current !== null) {
            listStr += `[${current.data}] -> `;
            current = current.nextNodeAdd;
        }

        const result = listStr.slice(0, -4);

        return result;
    }
}

// ----------------------
// Create a Linked List
// ----------------------
const myList = new LinkedList();

// ----------------------
// Insert elements at the end
// ----------------------
myList.insertAtLast(7);
myList.insertAtLast(10);
myList.insertAtLast(15);

// ----------------------
// Insert element at the start
// ----------------------
myList.insertAtStart(1);

// ----------------------
// Traverse the list
// ----------------------
console.log("Linked List:", myList.traverse());

// ----------------------
// Delete first element
// ----------------------
myList.deleteAtStart();
console.log("After deleting at start:", myList.traverse());

// ----------------------
// Delete last element
// ----------------------
myList.deleteAtEnd();
console.log("After deleting at end:", myList.traverse());

// ----------------------
// Search for elements
// ----------------------
console.log(myList.search(7));
console.log(myList.search(100)); // not present

// ----------------------
// Length of the linked list
// ----------------------
console.log(myList.length());