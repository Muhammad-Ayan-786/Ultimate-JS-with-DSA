/* <--------- B U B U B B L E   S O R T   A L G O ------> */

// Time Complexity : O(n^2)
// Space Complexity : O(1)

/* -------------- Function Declaration --------------- */

const printArray = (arr, n) => { // Function to print array.
    let str = "[";

    for (let i = 0; i < n; i++) {
        if (i > 0) str += ", ";
        str += arr[i];
    }

    str += "]";
   
    return str;
}

const BubbleSort = (arr, n) => { // Function for Bubble Sort.
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

        console.log(`Pass: ${i + 1}`); // To print passes.

        if (!isSorted) {
            break;
        }
    }

    console.log(""); // To print empty line.
}


/* -------------- Variable Declaration, Function Call --------------- */

// const arr = [4, 6, 2, 3, 5, 1, 8, 11];
const arr = [1, 3, 2, 4, 5];

const n = arr.length;

console.log(
    `Origional arr of (Bubble Sort): ${printArray(arr, n)} \n`
);

// BUBBLE SORT CALL ...
BubbleSort(arr, n);

console.log(
    `Sorted arr (Bubble Sort): ${printArray(arr, n)} \n`
);