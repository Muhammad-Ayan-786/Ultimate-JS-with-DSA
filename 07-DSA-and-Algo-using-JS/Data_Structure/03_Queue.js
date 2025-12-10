/* ----------------------
// Queue Class
---------------------- */

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue (val) {
        this.queue.push(val);
    }

    denqueue () {
        if (this.isEmpty()) {
            return `Underflow !`;
        }

        return this.queue.shift();
    }

    front () {
        if (this.isEmpty()) {
            return `Queue is empty !`;
        }

        return this.queue[0];
    }

    isEmpty () {
        return this.queue.length === 0;
    }

    printQueue () {
        let queueStr = "";

        for (let i = 0; i < this.queue.length; i++) {
            queueStr += `${this.queue[i]} `;
        }

        console.log(`Queue : ${queueStr}`);
    }
}

// ----------------------
// Create a new Queue
// ----------------------
const myQueue = new Queue();

// ----------------------
// Enqueue initial elements
// ----------------------
myQueue.enqueue(23);
myQueue.enqueue(10);
myQueue.enqueue(56);

// Check if queue is empty
console.log("Is queue empty?", myQueue.isEmpty());

// Print the whole queue safely
console.log("Current queue array:", myQueue.queue);

// Print current queue (front → back)
myQueue.printQueue();

// Check again if queue is empty
console.log("Is queue empty now?", myQueue.isEmpty());

// ----------------------
// Enqueue more elements
// ----------------------
myQueue.enqueue(550);
myQueue.enqueue(670);
myQueue.enqueue(900);

console.log("Current queue array:", myQueue.queue);

// ----------------------
// Dequeue (remove from front)
// ----------------------
const popped = myQueue.denqueue();
console.log("Dequeued element:", popped);

// ----------------------
// Peek at the front element
// ----------------------
const frontElement = myQueue.front();
console.log("Front element now:", frontElement);

// ----------------------
// Final queue state
// ----------------------
console.log("Final queue array:", myQueue.queue);