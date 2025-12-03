/* <------------ while Loop ------------> */
let n = 5;
let i = 0;

while (i < n) {
    console.log(i);
    i++;
}
console.log(`\n`);

// Quick Quiz : Print even numbers from 2 to 10
let num = 2;

while (num <= 10) {
    console.log(num);
    num += 2;  // add 2 each time
}

console.log(`\n`);

/* <------------ do-while Loop ------------> */
let j = 0;
let m = 5;

do {
    console.log(j);
    j++;
} while (j < m);

// Quick Quiz : Sum of first 5 numbers
let k = 1;
let sum = 0;

do {
    sum += k;   // add i to sum
    k++;
} while (k <= 5);

console.log("Total sum:", sum);