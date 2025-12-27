const resolvedPromise = new Promise((resolve, reject) => {
    console.log("Promise is Pending");

    setTimeout(() => {
        resolve(true);
    }, 3000);
})

const rejectedPromise = new Promise((resolve, reject) => {
    console.log("Promise is Pending");

    setTimeout(() => {
        reject(new Error("I'm a promise, & I'm rejected"));
    }, 3000);
})

// To get the value
resolvedPromise.then((val) => {
    console.log(`Promise is fulfilled with value : ${val}`);
})

// To catch the error
rejectedPromise.catch((err) => {
    console.log(`Promise is rejected with error : ${err}`);
})

/* // Can also catch the error like this
rejectedPromise.then((val) => {
    console.log(val);
}, (error) => {
    console.log(error);
});
*/

console.log(resolvedPromise);
console.log(rejectedPromise);

/*
// Alerting the value of the promise using .then()
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
    }, 6000);
})
promise.then(alert); // Promise val will be alerted.
*/