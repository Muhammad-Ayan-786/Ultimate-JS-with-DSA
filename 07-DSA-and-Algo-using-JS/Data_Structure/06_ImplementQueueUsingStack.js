/*
<------------ Implement Queue Using Stack ------------->

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
*/

class Stack {
    constructor() {
        this.stack1 = []; // input stack
        this.stack2 = []; // output stack
    }

    // Add element to the queue
    enqueue(val) {
        this.stack1.push(val);
    }

    // Remove element from the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Underflow!");
            return;
        }

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    // Get front element of queue
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return;
        }

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2[this.stack2.length - 1];
    }

    // Check if queue is empty
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// ----------------------
// Create Queue (using Stacks)
// ----------------------
const myQueue = new Stack();

// ----------------------
// Check if queue is empty
// ----------------------
console.log("Is queue empty?", myQueue.isEmpty());

// ----------------------
// Enqueue elements
// ----------------------
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

// ----------------------
// Get front element
// ----------------------
console.log("Front element:", myQueue.front()); // 10

// ----------------------
// Dequeue element
// ----------------------
myQueue.dequeue();

// ----------------------
// Final empty check
// ----------------------
console.log("Is queue empty finally?", myQueue.isEmpty()); // false