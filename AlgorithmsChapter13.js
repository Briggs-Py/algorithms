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