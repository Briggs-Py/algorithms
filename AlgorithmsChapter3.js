//Array: Push Front
console.log("Array: Push Front")
function pushFront(arr, val){
    for(let idx=arr.length; idx>0;idx--){
        arr[idx]=arr[idx-1];
    }
    arr[0]=val;
    console.log(arr);
}
pushFront([1,2,3,4,5,6], 0)

//Array: Pop Front
console.log("\nArray: Pop Front")
function popFront(arr){
    for(let idx=0; idx<arr.length-1;idx++){
        arr[idx]=arr[idx+1];
    }
    arr.pop();
    console.log(arr);
}
popFront([1,2,3,4,5,6,7,8])

//Array: Insert At
console.log("\nInsert At")
function insertAt(arr, index, val){
    for(let idx=arr.length; idx>index;idx--){
        arr[idx]=arr[idx-1];
    }
    arr[index]=val;
    console.log(arr);
}
insertAt([1,2,3,4,6,7,8,9], 4, 5);

//Array: Remove At
console.log("\nArray: Remove At")
function removeAt(arr, index){
    for(let idx=index; idx<arr.length-1;idx++){
        arr[idx]=arr[idx+1];
    }
    arr.pop();
    console.log(arr);
}
removeAt([1,2,3,4,5,6,7,8], 2);

//Array: Swap Pairs
console.log("\nArray: Swap Pairs")
function swapPairs(arr){
    let isOdd=0;
    if(arr.length%2!==0){
        isOdd=1
    }
    for(let idx=0;idx<arr.length-isOdd;idx+=2){
        let temp = arr[idx];
        arr[idx]=arr[idx+1];
        arr[idx+1]=temp;
    }
    console.log(arr);
}
swapPairs([1,2,3,4,5,6,7,8,9])

//Array: Remove Duplicates (Assumes a sorted array)
console.log("\nRemove Duplicates");
function removeDuplicates(arr){
    let uniqueArr=[],
        index=0;
    for(let idx=0; idx<arr.length;idx++){
        if(arr[idx]!==arr[idx+1]){
           uniqueArr[index]=arr[idx];
           index++;
        }
    }
    console.log(uniqueArr);
}
removeDuplicates([1,2,2,2,2,2,5,6,6,6,6,6,6,7,8])

//Array: Min to Front
console.log("\nArray: Min to Front");
function minToFront(arr){
    let min=arr[0],
        index=0;
    for(let idx=0; idx<arr.length; idx++){
        if(arr[idx]<min){
            min=arr[idx];
            index=idx;
        }
    }
    for(let idx=index; idx>0; idx--){
        arr[idx]=arr[idx-1];
    }
    arr[0]=min;
    console.log(arr);
    return arr;
}
let newArr123=[6,3,7,2,9,1,7,6,7];
minToFront(newArr123);

//Array: Reverse
console.log("\nArray: Reverse");
function reverse(arr){
    let invIdx=arr.length-1
    for(let idx=0;idx<arr.length/2; idx++){
        let temp=arr[idx];
        arr[idx]=arr[invIdx];
        arr[invIdx]=temp;
        invIdx--;
    }
    console.log(arr)
}
reverse([1,2,3,4,5,6,7,8,9,10,11])

//Array: Rotate
console.log("\nArray: Rotate")
function arrayRotate(array, shiftBy) {
    const arrayLength = array.length;
    // Normalize the shiftBy value to ensure it's within the array bounds
    // This also converts negative shifts into their positive equivalents
    shiftBy = ((shiftBy % arrayLength) + arrayLength) % arrayLength;

    // Function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            let temp = array[start];
            array[start] = array[end];
            array[end] = temp;
            start++;
            end--;
        }
    }

    // Step 1: Reverse the whole array
    reverse(0, arrayLength - 1);
    // Step 2: Reverse the first 'shiftBy' elements
    reverse(0, shiftBy - 1);
    // Step 3: Reverse the remaining 'n - shiftBy' elements
    reverse(shiftBy, arrayLength - 1);

    return array;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
console.log(arrayRotate(array1, 2)); // Should output [4, 5, 1, 2, 3]

const array2 = [1, 2, 3, 4, 5];
console.log(arrayRotate(array2, -2)); // Should output [3, 4, 5, 1, 2]
// The reversal method takes advantage of the fact that a rotation can be achieved by reversing specific portions
// of the array, thus avoiding the need to shift elements one by one, which would be inefficient for large arrays
// or large shift values.


//Array: Filter Range
console.log("\nArray: Filter Range")
function filterArrayInRange(arr, min, max) {
  let count = 0; // Counter for the number of elements within the range

  // First pass: Move elements within the range to the start of the array
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] >= min && arr[idx] <= max) {
      arr[count++] = arr[idx];
    }
  }

  // Adjust the length of the array to remove out-of-range elements
  arr.length = count;

  return arr;
}
console.log(filterArrayInRange([1,2,3,4,5,6,7,8,9,1,5,4,2,5,3], 3, 7));

//Array: Concat
console.log("\nArray: Concat")
function concatArr(arr1, arr2){
    let newArr=[],
        index=0;
    for(let idx=0; idx<arr1.length; idx++){
        newArr[index]=arr1[idx];
        index++;
    }
    for(let idx=0; idx<arr2.length; idx++){
        newArr[index]=arr2[idx];
        index++;
    }
    return(newArr);
}
console.log(concatArr([3,4],[1,2]));

//Array: Remove Negatives
console.log("\nArray: Remove Negatives")
function removeNegatives(arr){
    let newArr=[],
        index=0;
    for(let idx=0; idx<arr.length; idx++){
        if(arr[idx]>=0){
            newArr[index]=arr[idx];
            index++;
        }
    }
    return newArr;
}
console.log(removeNegatives([1,2,3,4,5,-1,-2,-3,-4,-5,-6]))
let shiftBy = (-21%5)
console.log(shiftBy)