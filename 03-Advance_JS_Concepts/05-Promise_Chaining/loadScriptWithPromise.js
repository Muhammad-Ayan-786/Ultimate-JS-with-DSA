/* =======================================
Writing the loadScript()
with Promise Chaining
========================================= */

const loadScript_Promise = src => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;

        script.onload = () => {
            resolve(`Script Loaded Successfully : ${src}`);
        }

        script.onerror = () => {
            reject(`Error in Loading Script with src : ${src}`);
        }

        document.head.appendChild(script);
    })
}

let filesCount = 0;

const promise = loadScript_Promise("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");

console.log("Loading the Script from the Server with Promise ...");

promise.then(val => {
    console.log(++filesCount + " " + val);
    return loadScript_Promise("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js");
}).then(val => {
    console.log(++filesCount + " " + val);
    return loadScript_Promise("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js");
}).then(val => {
    console.log(++filesCount + " " + val);
    return loadScript_Promise("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");
}).then(val => {
    console.log(++filesCount + " " + val);
    return loadScript_Promise("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js");
}).then(val => {
    console.log(++filesCount + " " + val);
}).catch(err => {
    console.log(err);
})