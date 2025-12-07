/* <--------- B I N A R Y  SEARCH ALGO ---------> */

/*
<--- Binary Search --->
Time Complexity : O(log n)
Space Complexity : O(1)

<--- Binary Search Recursive --->
Time Complexity : O(log n)
Space Complexity : O(log n)
*/

// Function Declaration
const binarySearch = (arr, n, target) => {
    let st = 0, end = n - 1;

    while (st <= end)
    {
        let mid = Math.floor(st + (end - st) / 2);

        if (target > arr[mid]) {
            st = mid + 1;
        }
        else if (target < arr[mid]) {
            end = mid - 1;
        }
        else {
            return {
                value: arr[mid],
                index: mid
            };
        }
    }

    return -1; 
}

function binarySearchRecursive(arr, target, start, end) {
    if (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (target > arr[mid]) {
            return binarySearchRecursive(arr, target, mid + 1, end);
        } 
        else if (target < arr[mid]) {
            return binarySearchRecursive(arr, target, start, mid - 1);
        } 
        else {
            return {
                value: arr[mid],
                index: mid
            };
        }
    }

    return -1; // not found
}


// Variable Declaration, Function Call

/* <--------- B I N A R Y  SEARCH ALGO ---------> */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const length = arr.length

const target = 7;

const result = binarySearch(arr, length, target);
console.log(result);


/* <--------- B I N A R Y  SEARCH RECURSIVE ALGO ---------> */
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const length2 = arr.length

const target2 = 7;

const result2 = binarySearchRecursive(arr2, target2, 0, length2 - 1);
console.log(result2);