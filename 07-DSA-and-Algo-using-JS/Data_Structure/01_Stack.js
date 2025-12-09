/* ----------------------
// Stack Class
---------------------- */

class Stack {
    constructor(stack) {
        this.stack = [];
    }

    #size () {
        return this.stack.length
    }

    push (val) {
        this.stack.push(val);
    }

    pop () {
        if (this.#size() === 0) {
            return `No elements in Stack to pop !`
        }
        return this.stack.pop();
    }

    top () {
        if (this.#size() === 0) {
            return `Stack is Empty !`
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty () {
        return this.#size() === 0;
    }

    /*
    printAndEmptyStack () {
        while (this.#size() != 0) {
            console.log(this.stack.pop());
        }
        console.log(`Stack is Empty now !\n`);
    }
    */

    printStack() {
        if (this.isEmpty()) {
            console.log("Stack is Empty !");
            return;
        }

        console.log("Stack elements (top → bottom):");
        // Loop from last element to first
        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log(`|${this.stack[i]}|`);
        }
        console.log("");
    }
}

// ----------------------
// Create a new Stack
// ----------------------
const stack = new Stack();

// ----------------------
// Push initial elements
// ----------------------
stack.push(23);
stack.push(10);
stack.push(56);

// Check if stack is empty
console.log("Is stack empty?", stack.isEmpty());

// Print the whole stack safely
console.log("Current stack array:", stack.stack);

// Print current stack
stack.printStack();

// Check again if stack is empty
console.log("Is stack empty now?", stack.isEmpty());

// ----------------------
// Push more elements
// ----------------------
stack.push(550);
stack.push(670);
stack.push(900);

// Print the whole stack safely
console.log("Current stack array:", stack.stack);

// ----------------------
// Pop the top element
// ----------------------
const popped = stack.pop();
console.log("Popped element:", popped);

// ----------------------
// Peek at the top element
// ----------------------
const topElement = stack.top();
console.log("Top element now:", topElement);

// ----------------------
// Final stack state
// ----------------------
console.log("Final stack array:", stack.stack);