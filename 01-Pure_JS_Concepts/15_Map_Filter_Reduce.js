/*
<------------ Map() ------------>
• Creates a new array by performing some operations on each array element.

• Does not change the original array.

• It takes 3 arguments: map( () => {} )
1. value
2. index
3. array

• Returns a new array;

NOTE: We use map when we want to create a new array from an existing array. And we use foreach when we want to perform some operation on existing array element.
*/

const arr1 = [2, 4, 6];

const mapResult = arr1.map((elem, index, arr) => {
    console.log("Elem", elem, "Index", index, "Array", arr);

    return elem * 2;
});

console.log(mapResult);

console.log("");

/*
<------------ Filter() ------------>
• Filters an array with value that passes a test. Creates a new array.

• Does not change the original array.

• Returns a new array;
*/

const arr2 = [54, 13, 66, 22, 6];

const filterResult = arr2.filter((elem) => {
    return elem > 20;
});

console.log(filterResult);

console.log("");

/*
<------------ Reduce() ------------>
• Reduces an array to a single value.

• Does not change the original array.

• Returns a single value;
*/

const arr3 = [1, 2, 3, 5, 1, 2];

const reduceResult = arr3.reduce((val1, val2) => {
    return val1 + val2;
});

console.log(reduceResult);