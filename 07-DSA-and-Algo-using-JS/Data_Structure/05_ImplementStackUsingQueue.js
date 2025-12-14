/*
<------------ Implement Stack using Queue ------------->

Implement a last -in -first -out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

*/

class Queue {
    constructor() {
        this.stack = [];
        this.tempArr = [];
    }

    push (val) {
        while (this.stack.length > 0) {
            this.tempArr.push(this.stack.shift());
        }

        this.stack.push(val);

        while (this.tempArr.length !== 0) {
            this.stack.push(this.tempArr.shift());
        }
    }

    pop () {
        if (this.isEmpty()) {
            console.log("Underflow !");
            return;
        }

        return this.stack.shift();
    }

    top () {
        if (this.isEmpty()) {
            console.log("Stack is empty !");
            return;
        }

        return this.stack[0];
    }

    isEmpty () {
        return this.stack.length === 0;
    }
}

// ----------------------
// Create Stack (using Queues)
// ----------------------
const myStack = new Queue();

// ----------------------
// Check if stack is empty
// ----------------------
console.log("Is stack empty?", myStack.isEmpty());

// ----------------------
// Push elements
// ----------------------
myStack.push(4);
myStack.push(6);
myStack.push(2);

// ----------------------
// Check again if stack is empty
// ----------------------
console.log("Is stack empty now?", myStack.isEmpty());

// ----------------------
// Pop top element
// ----------------------
myStack.pop();

// ----------------------
// Peek top element
// ----------------------
console.log("Top element:", myStack.top());

// ----------------------
// Final empty check
// ----------------------
console.log("Is stack empty finally?", myStack.isEmpty());