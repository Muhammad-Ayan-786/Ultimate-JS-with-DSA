/* ------ 1. delete -> deletes the elem at the specified index. ------ */
{
    let nums = [1, 2, 3, 4, 5];

    delete nums[0]; // length remains same.
    console.log(nums, `Length ${nums.length}`);

    // Note: deleting an elem from an array, does not change the length of the array.
}

/* ------ 2. concat() -> joins two or more arrays. ------ */
{
    let nums = [1, 2, 3, 4, 5];
    let num_more = [11, 12, 13, 14, 15];

    let concat = nums.concat(num_more);
    console.log(concat);

    // Note: concat returns a new array. Does not change the original array.
}

/* ------ 3. sort() -> sorts the array. ------ */
{
    // 1. sort() -> sorts the array alphabetically.
    let nums = [21, 5, 11, 3, 69, 41, 7];
    nums.sort(); // sorts alphabetically.
    console.log(nums);

    // Note: sort() modifies the original array & sort the array alphabetically if comparator is not passed.


    // 2. sort(comparator) -> sorts the array numerically.
    let nums2 = [21, 5, 11, 3, 69, 41, 7];
    // nums2.sort((a, b) => b - a); // sorts numerically in descending order.
    nums2.sort((a, b) => b - a); // sorts numerically in ascending order.
    console.log(nums2);

    /*
    CAN ALSO BE LIKE THIS :

    let compare = (a, b) {
        return a - b; // For ascending (a - b) or descending (b - a)
    }
    arr.sort(compare);
    */

    // Note: sort() modifies the original array & sort the array numerically in ascending order. If you want to sort in descending order, you can pass b-a instead of a-b. You can also write the comparator function locally and then pass the name into sort().
}

/* ------ 4. reverse() -> reverses the array. ------ */
{
    let nums = [1, 2, 3, 4, 5];
    nums.reverse();
    console.log(nums);
}

/* ------ 5. splice -> adds/removes elements from the array. ------ */
{
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let splice = nums.splice(2, 3, 1001, 1002, 1003, 1004);
    console.log(nums, splice);

    /*
    NOTE :
        returns deleted elements & modifies the original array.

        splice() 1 argu : position to add.
        splice() 2 argu : number of elements to remove.
        splice() 3 argu : elements to be added.
    */
}

/* ------ 6. slice -> slice out a piece from an array. It creates a new array. ------ */
{
    let nums = [1, 2, 3, 4, 5, 6, 7, 8];

    let slice1 = nums.slice(3); // start from 2nd index & slice all the elements.
    console.log(slice1);

    let slice2 = nums.slice(2, 6); // start from 2nd index & slice 3 elements but the last index is not included.
    console.log(slice2);

    // Note: slice() does not modify the original array but returns a new array.
}