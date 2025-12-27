/* ========================
Promise.all()
======================== */
const p1 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 1"), 1000));
const p2 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 2"), 2000));
const p3 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 3"), 3000));

let promise_all = Promise.all([p1, p2, p3]);
promise_all.then((val) => {
    console.log(val);
})

/* ========================
Promise.allSettled()
======================== */
const p4 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 1"), 1000));
const p5 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Promise Rejected")), 2000));
const p6 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 3"), 3000));

let promise_allSettled = Promise.allSettled([p4, p5, p6]);
promise_allSettled.then((val) => {
    console.log(val);
})

/* ========================
Promise.race()
======================== */
const p7 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 1"), 5000));
const p8 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 2"), 6000));
const p9 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 3"), 4000));

let promise_race = Promise.race([p7, p8, p9]);
promise_race.then((val) => {
    console.log(val);
})

/* ========================
Promise.any()
======================== */
const p10 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 1"), 7000));
const p11 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Promise Rejected")), 6000));
const p12 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 3"), 8000));

let promise_any = Promise.any([p10, p11, p12]);
promise_any.then((val) => {
    console.log(val);
}).catch(err => console.log(err));

/* ========================
Promise.resolve()
======================== */

let promise_resolve = Promise.resolve(3);
promise_resolve.then((val) => {
    console.log(val);
})

/* ========================
Promise.reject()
======================== */ 

let promise_reject = Promise.reject(new Error(404));
promise_reject.catch((val) => {
    console.log(val);
})


/*
-------- One by One Execution --------
const p1 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 1"), 1000));
const p2 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 2"), 2000));
const p3 = new Promise((resolve, reject) => setTimeout(() => resolve("Value 3"), 3000));

promise1.then((val) => {console.log(val);})
promise2.then((val) => {console.log(val);})
promise3.then((val) => {console.log(val);})
*/