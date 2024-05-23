//Chapter 7 - Arras, Part II

//Setup Array variables
let arr1 = [1,2,3,4,5,6,7,8,9]

//Array: Binary Search
console.log("\nArray: Binary Search");
//Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array.
//Instead, 'divide and conquer', taking advantage of the fact that the array is sorted.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

console.log(binarySearch(arr1, 7))