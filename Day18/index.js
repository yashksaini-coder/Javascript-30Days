console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

const bubbleSort = (arr) => {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort: ", bubbleSort(arr));

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

const selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Selection Sort: ", selectionSort(arr2));


// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

let arr3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Quick Sort: ", quickSort(arr3));

console.log("-------------------------------------------------");
console.log("Activity 2: ");

console.log("-------------------------------------------------");
console.log("Activity 3: ");

console.log("-------------------------------------------------");
console.log("Activity 4: ");

console.log("-------------------------------------------------");
console.log("Activity 5: ");