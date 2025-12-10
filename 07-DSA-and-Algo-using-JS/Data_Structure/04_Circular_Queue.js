/*
<--------- Circular Queue Implementation --------->

Design your implementation of the circular Queue. The circular queue is a linear data structure in which the operations are performed based on the First In First Out (FIFO) principle, and the last position is connected back to the first position to make a circle.
*/

class CircularQueue {
    constructor (size) {
        this.circularQ = [];
        this.size = size;
    }

    enqueue (val) {
        if (this.circularQ.length === this.size) {
            console.log(`Circular Queue Is Full !`);
            return;
        }

        this.circularQ.push(val);
    }

    denqueue () {
        if (this.circularQ.length === 0) {
            return `Circular Queue Is Empty !`
        }

        return this.circularQ.shift();
    }

    front () {
        if (this.circularQ.length === 0) return -1;

        return this.circularQ[0];
    }

    rear () {
        if (this.circularQ.length === 0) return -1;

        return this.circularQ[this.circularQ.length - 1];
    }

    isEmpty () {
        return this.circularQ.length === 0;
    }

    isFull () {
        return this.circularQ.length === this.size;
    }
}

// ----------------------
// Create a Circular Queue of size 3
// ----------------------
const myCircQ = new CircularQueue(3);

// ----------------------
// Enqueue elements
// ----------------------
myCircQ.enqueue(2);
myCircQ.enqueue(5);
myCircQ.enqueue(7);

// Trying to enqueue when full
myCircQ.enqueue(14);

// ----------------------
// Print current circular queue
// ----------------------
console.log("Circular Queue array:", myCircQ.circularQ);

// ----------------------
// Check if empty or full
// ----------------------
console.log("Is Circular Queue empty?", myCircQ.isEmpty());
console.log("Is Circular Queue full?", myCircQ.isFull());

// ----------------------
// Front & Rear elements
// ----------------------
console.log("Front element:", myCircQ.front());
console.log("Rear element:", myCircQ.rear());