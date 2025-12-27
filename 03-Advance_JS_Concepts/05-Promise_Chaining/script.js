/* ===============================
Promise Chaining
=============================== */

console.log("Fetching the data from the server ...");

const p1 = new Promise((resolve, reject) => { // Initial promise
    setTimeout(() => {
        resolve({
            name: "Vin Diesel",
            age: 45
        });
        console.log("Promise Resolved after 2 seconds");
    }, 2000);
})

p1.then(val => { // Getting the value of the Initial Promise
    console.log(val);

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Paul Walker",
                age: 51
            })
            console.log("Promise Resolved after 3 seconds");
        }, 3000);
    })

    return p2;  // Returning a New Promise, stored in variable.
}).then(val => { // Getting the value of the previous Promise
    console.log(val);

    return new Promise((resolve, reject) => { // Returning another New Promise directly with return keyword
        setTimeout(() => {
            resolve({
                name: "Dwayne Johnson",
                age: 50
            })
            console.log("Promise Resolved after 1 seconds");
        }, 1000);
    })
}).then(val => { // Getting the value of the previous Promise
    console.log(val);
    return "Data retrieved successfully !"; // Returning a constant
}).then(val => { // Getting the value of the previous Promise
    console.log(val);
}).catch(err => { // Catching the error of the Promise Chaining if any occurs
    console.log(`Error : ${err}`);
})