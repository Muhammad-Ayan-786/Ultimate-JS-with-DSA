/* <--------- I N S E R T I O N  S O R T  A L G O ------> */

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

const InsertionSort = (arr, n) => { // Function for Insertion Sort.
    for (let i = 0; i < n; i++)
    {
        let currentElem = arr[i];
        let prev = (i - 1);

        while (prev >= 0 && arr[prev] > currentElem)
        {
            arr[prev + 1] = arr[prev];
            prev--;
        }

        arr[prev + 1] =  currentElem;
    }
}



/* -------------- Variable Declaration, Function Call --------------- */

let arr = [444, 222, 777, 555, 333];
const n = arr.length;

console.log(
    `Origional arr of (Insertion Sort): ${printArray(arr, n)} \n`
);

// Insertion SORT CALL ...
InsertionSort(arr, n);

console.log(
    `Sorted arr (Insertion Sort): ${printArray(arr, n)} \n`
);