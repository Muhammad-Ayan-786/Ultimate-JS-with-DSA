/* <--------- L I N E A R SEARCH  ALGO ---------> */

// Time Complexity : O(n)
// Space Complexity : O(1)

// Function Declaration
function linearSearch (arr, n, target) {
    for (let i = 0; i < n; i++)
    {
        if (arr[i] === target)
        {
            return {
                value: arr[i],
                index: i
            };
        }
    }
    
    return -1;
}

// Variable Declaration, Function Call
const arr = [1, 5, 2, 3, 7, 9, 0, 8, 6, 4];
const length = arr.length

const target = 15;

const result = linearSearch(arr, length, target);
console.log(result);