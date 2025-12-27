const p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        resolve(1);
    }, 2000);
})

p1.then(() => {
    console.log("Congratulations, promise is resolved !");
})

p1.then(() => {
    console.log("Promise is fulfilled");
})

// These handlers will be executed only when the promise is resolved, and run independently.