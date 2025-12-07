/* <--------- B U B U B B L E   S O R T   A L G O ------> */

// Time Complexity : O(n^2)
// Space Complexity : O(1)

// Function Declaration
const BubbleSort = (arr, n) => {
    let isSorted = false;

    for (let i = 0; i < n - 1; i++)
    {
        isSorted = false;

        for (let j = 0; j < (n-i-1); j++)
        {
            if (arr[j] > arr[j + 1])
            {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                isSorted = true;
            }
        }

        console.log(i);

        if (!isSorted) {
            break;
        }
    }
}

// Variable Declaration, Function Call
// const arr = [4, 6, 2, 3, 5, 1, 8, 11];
const arr = [1, 3, 2, 4, 5];
const length = arr.length

console.log(`Original Array:`);
console.log(arr, `\n`);

BubbleSort(arr, length);

console.log(`Sorted Array:`);
console.log(arr);