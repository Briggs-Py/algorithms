// Chapter 13 - Sets and Priority Queues

//Interleave Arrays
//Given two unsorted arrays, create a new array containing the elements of both, resulting in an unsorted merge of all
//values. When populating the new array alternate values between the two arrays until one is exhausted, then include
//all the others. Example: given [77, 22, 11, 22] and [2, 6, 7, 2, 6, 2] return [77, 2, 22, 6, 11, 7, 22, 2, 6, 2].
function mergeAlternating(array1, array2) {
    let result = [];
    let i = 0, j = 0;

    while (i < array1.length && j < array2.length) {
        result.push(array1[i++]);
        result.push(array2[j++]);
    }

    while (i < array1.length) {
        result.push(array1[i++]);
    }

    while (j < array2.length) {
        result.push(array2[j++]);
    }

    return result;
}

const array1 = [77, 22, 11, 22];
const array2 = [2, 6, 7, 2, 6, 2];
const mergedArray = mergeAlternating(array1, array2);
console.log("Merged array:", mergedArray);
console.log("\n");

//Merge Sorted Arrays
//Efficiently merge two already-sorted arrays into a new sorted array containing the multiset of all values.
//Example: given [1,2,2,2,7] and [2,2,6,6,7], return new array [1,2,2,2,2,2,6,6,7,7].

function mergeSorted(array1, array2) {
    let result = [];
    let i = 0, j = 0;

    while (i < array1.length && j < array2.length) {
        if(array1[i] < array2[j]){
            result.push(array1[i++]);
        }
        else {
            result.push(array2[j++]);
        }
    }

    while (i < array1.length) {
        result.push(array1[i++]);
    }

    while (j < array2.length) {
        result.push(array2[j++]);
    }

    return result;
}

const array3 = [1,2,2,2,7];
const array4 = [2,2,6,6,7];
const mergedSortedArr = mergeSorted(array3, array4);
console.log("Merged array:", mergedSortedArr);
console.log("\n");

//Minimal Three-Array Range
//Given three separately sorted arrays, determine the value from each array that creates the smallest range, and return
//the min and max of that range. All three of the arrays must have a value within the range.
//Example: given ([1,2,4,15], [3,10,12], [5,10,13,17,23]), return {min:3,max:5}.

function findSmallestRange(arr1, arr2, arr3) {
    let minRange = { min: 0, max: Infinity };
    let entries = [
        { value: arr1[0], index: 0, fromArray: 1 },
        { value: arr2[0], index: 0, fromArray: 2 },
        { value: arr3[0], index: 0, fromArray: 3 }
    ];
    let currentMax = Math.max(arr1[0], arr2[0], arr3[0]);

    // Function to get index of the entry with the minimum value
    function getMinIndex(entries) {
        if (entries[0].value <= entries[1].value && entries[0].value <= entries[2].value) return 0;
        if (entries[1].value <= entries[0].value && entries[1].value <= entries[2].value) return 1;
        return 2;
    }

    while (true) {
        let minIndex = getMinIndex(entries);
        let minElement = entries[minIndex];

        // Check if current range is smaller
        let currentRange = currentMax - minElement.value;
        if (currentRange < minRange.max - minRange.min) {
            minRange.min = minElement.value;
            minRange.max = currentMax;
        }

        // Increment index in the array of the minimum element
        if (minElement.fromArray === 1) {
            if (minElement.index + 1 >= arr1.length) break;
            entries[minIndex] = { value: arr1[minElement.index + 1], index: minElement.index + 1, fromArray: 1 };
        } else if (minElement.fromArray === 2) {
            if (minElement.index + 1 >= arr2.length) break;
            entries[minIndex] = { value: arr2[minElement.index + 1], index: minElement.index + 1, fromArray: 2 };
        } else {
            if (minElement.index + 1 >= arr3.length) break;
            entries[minIndex] = { value: arr3[minElement.index + 1], index: minElement.index + 1, fromArray: 3 };
        }

        // Update current maximum if necessary
        currentMax = Math.max(currentMax, entries[minIndex].value);
    }

    return minRange;
}

// Example usage:
const arr1 = [1, 2, 4, 15];
const arr2 = [3, 10, 12];
const arr3 = [5, 10, 13, 17, 23];
const result = findSmallestRange(arr1, arr2, arr3);
console.log("Smallest range:", result); // Should return {min: 3, max: 5}
console.log("\n");

//Intersect Sorted Arrays
//Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two.
//Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7]

function findSortedIntersection(array1, array2) {
    let result= [];
    let i = 0, j = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            i++;
        } else if (array1[i] > array2[j]) {
            j++;
        } else {
            result.push(array1[i]);
            i++;
            j++;
        }
    }
    return result;
}

// Example usage:
const intersection = findSortedIntersection(array3, array4);
console.log("Intersection:", intersection);  // Outputs: [2, 2, 7]
console.log("\n");

