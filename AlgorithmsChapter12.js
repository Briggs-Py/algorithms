// Chapter 12 - Sorts

// Array: Bubble Sort
// Create a function that uses BubbleSort to sort an unsorted array in-place.
function bubbleSort(array) {
    let n = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (array[i - 1] > array[i]) {
                let temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
                swapped = true;
            }
        }
        // Each pass can secure the last element of the current sub-array
        n--; // Reduce the size of the sub-array for next pass
    } while (swapped); // If no elements were swapped, the array is sorted

    return array;
}

let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(unsortedArray);
console.log("Sorted array:", unsortedArray);

// Array: Selection Sort
// Create a function that uses Selection Sort to sort an unsorted array in-place.
function selectionSort(array) {
    let n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return array;
}

// Example usage:
let unsortedArray2 = [64, 34, 25, 12, 22, 11, 90, 5, 67, 43, 29, 99, 16];
selectionSort(unsortedArray2);
console.log("Sorted array:", unsortedArray2);

// SList: Bubble Sort
// Create a function that uses BubbleSort to sort a linked list. The list nodes contain .val, .next and other attributes
// you should not reference.

// Define ListNode class
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Helper function to create a linked list from an array of values
function createLinkedList(values) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let value of values) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return dummyHead.next;
}

function bubbleSortLinkedList(head) {
    if (!head || !head.next) {
        return head;
    }

    let swapped;
    do {
        swapped = false;
        let current = head;
        while (current.next) {
            if (current.val > current.next.val) {
                let temp = current.val;
                current.val = current.next.val;
                current.next.val = temp;
                swapped = true;
            }
            current = current.next;
        }
    } while (swapped);

    return head;
}

// Helper function to print linked list
function printLinkedList(head) {
    let current = head;
    let result = '';
    while (current) {
        result += current.val + ' -> ';
        current  = current.next;
    }
return result.slice(0, -4);
}

let values = [3, 1, 4, 1, 5, 9, 2, 6, 5];
let head = createLinkedList(values);
console.log("Original list:", printLinkedList(head));
head = bubbleSortLinkedList(head);
console.log("Sorted list:", printLinkedList(head));