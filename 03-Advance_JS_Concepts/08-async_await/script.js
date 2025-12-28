/* =======================================
Async & Await
======================================= */

async function getTemp() {
    const Joburg_Temp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Johannesburg",
                temp: "30 Deg"
            })
        }, 4000);
    })

    const Cape_Temp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Cape Town",
                temp: "25 Deg"
            })
        }, 7000);
    })

    /*
    <------------ In this way, we have to use .then() method ------------>
    Joburg_Temp.then(val => console.log(val));
    Cape_Temp.then(val => console.log(val));
    */
    
    /* Can be this way as well by using async await (More Efficient) */
    console.log("Fethching Johannesburg Weather Please Wait ...");
    let Joburg = await Joburg_Temp; // Wait for the Promise to fulfill (could be either resolved or rejected) & then store it in a variable
    console.log("Fetched Johannesburg Weather :", Joburg);

    console.log("Fethching Cape Town Weather Please Wait ...");
    let Cape = await Cape_Temp; // Wait for the Promise to fulfill (could be either resolved or rejected) & then store it in a variable
    console.log("Fetched Cape Town Weather :", Cape);

    return [Joburg, Cape];
}

console.log("Welcome To Weather Control Room.");
const results = getTemp(); // getTemp() returns a promise.

results.then((val) => {
    console.log(val);
    console.table(val);
})

// console.log(results); // Promise { <pending> }


/*
async function num() {
    return 5;
}
num().then((value) => {
    console.log(value);
})

// async function always returns a promise, even if u return a constant. So we can always use .then() on async function.
*/