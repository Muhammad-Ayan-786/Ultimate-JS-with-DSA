class Node {
    constructor(data) {
        this.data = data;
        this.nextNodeAddress = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null; // B1
        this.tail = null; // B2
        this.currentNode = null; // B2
    }

    insert(data) {

        const myNode = new Node(data);

        if (this.head === null && this.tail === null) {
            this.head = myNode; // B1
            this.tail = myNode; // B2
            this.currentNode = this.head; // B2
            return;
        }

        this.tail = myNode; // B3
        this.currentNode.nextNodeAddress = myNode;// B1 -> B2
        this.currentNode = myNode; // B2

    }

}
const list1 = new LinkedList();
console.log('list', list1);
list1.insert('a');
// console.log('list after inserting a', list1);
list1.insert('b');
// console.log('list after inserting b', list1);
list1.insert('c'); 
console.log('list after inserting c', JSON.stringify(list1)); 