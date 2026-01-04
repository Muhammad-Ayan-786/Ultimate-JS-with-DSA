const promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456);
        }, 2000);
    })
}
/*
<-------------- Way 1 (Long Way) --------------->
const asyncFuncCall = async function () {
    const a = await promise();
    console.log(a);
    const b = await promise();
    console.log(b);
    const c = await promise();
    console.log(c);
}
asyncFuncCall();
*/

// <------------ Way 2 (Short Way) ------------>
(async function () {
    console.log("This is with IIFE");
    const a = await promise();
    console.log(a);
    const b = await promise();
    console.log(b);
    const c = await promise();
    console.log(c);
})()