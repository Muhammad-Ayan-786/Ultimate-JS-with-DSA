/* <--------- B I N A R Y  SEARCH ALGO ---------> */

// Time Complexity : O(log n)
// Space Complexity : O(1)

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

// Variable Declaration, Function Call
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const length = arr.length

const target = 7;

const result = binarySearch(arr, length, target);
console.log(result);