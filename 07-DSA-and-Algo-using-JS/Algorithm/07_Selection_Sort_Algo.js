/* <--------- S E L E C T I O N   S O R T  A L G O ------> */

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

const SelectionSort = (arr, n) => { // Function for Selection Sort.
    for (let i = 0; i < (n-1); i++)
    {
        let currentIdx = i;

        for (let j = (i+1); j < n; j++)
        {
            if (arr[j] < arr[currentIdx]) {
                currentIdx = j;
            }
        }

        [arr[i], arr[currentIdx]] = [arr[currentIdx], arr[i]];
    }
}



/* -------------- Variable Declaration, Function Call --------------- */

let arr = [22, 55, 11, 66, 44];
const n = arr.length;

console.log(
    `Origional arr of (Selection Sort): ${printArray(arr, n)} \n`
);

// Selection SORT CALL ...
SelectionSort(arr, n);

console.log(
    `Sorted arr (Selection Sort): ${printArray(arr, n)} \n`
);