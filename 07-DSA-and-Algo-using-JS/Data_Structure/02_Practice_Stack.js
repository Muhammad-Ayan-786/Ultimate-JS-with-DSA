/*
Ouestion 01 : Given an input string s, reverce the order of the words.

INPUT: "the sky is blue"        ----->>>>>      OUTPUT: "blue is sky the"
INPUT: "   hello world  "       ----->>>>>      OUTPUT: "world hello"
INPUT: "a good   example"       ----->>>>>      OUTPUT: "example good a"
*/
class ReverseStack {
    constructor() {
        this.stack = [];
    }

    // Private: converts string to array of words removing extra spaces
    #convertStrToArr(s) {
        return String(s).trim().split(/\s+/);
    }

    // Private: push words onto stack
    #stringArrIntoStack(string) {
        const arr = this.#convertStrToArr(string);
        for (let word of arr) {
            this.stack.push(word);
        }
    }

    reverceString(str) {
        this.stack = [];                 // Clear old data
        this.#stringArrIntoStack(str);   // Push words into stack

        let result = [];

        while (this.stack.length > 0) {
            result.push(this.stack.pop());
        }

        return result.join(" ");
    }
}

// Testing
const string = "the sky is blue";
const reverseStringObj = new ReverseStack();

console.log(reverseStringObj.reverceString(string));