//Chapter 5 - Linked Lists

//Setup Linked List Class
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Example ListNodes for testing
let head = new ListNode(1);
head = new ListNode(2, head);
head = new ListNode(3, head);
head = new ListNode(4, head);
head = new ListNode(5, head);

// Function to print list for demonstration
function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

//List: Add Front
console.log('List: Add Front')
//Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer
//to the new head node.

function addAtHead(head, val) {
    let newNode = new ListNode(val);
    newNode.next = head;
    return newNode;
}

// Adding a new value at the head
head = addAtHead(head, 0);

printList(head);

//List: Contains
console.log('\nList: Contains');
//Given a ListNode pointer and a val, return whether val is found in any node in the list.

function searchInList(head, val) {
    let current = head;

    // Traverse the linked list
    while (current !== null) {
        if (current.val === val) {
            return true;
        }
        current = current.next;
    }
    return false;
}

console.log(searchInList(head, 2));
console.log(searchInList(head, 4));
console.log(searchInList(head, 8));
console.log(searchInList(head, 16));

//List: Remove Front
(console.log('\nList: Remove Front'))
//Given a pointer to the first node in a list, remove the head node and return the new list head node. If list is empty,
//return null.

function removeHead(head){
    if (head === null) {
        return null;
    }
    return head.next;
}

head = removeHead(head); // Remove the head node
printList(head);

//List: Front
console.log('\nList: Front');
//Return the value (not the node) at the head of the list. If list is empty, return null.

function front(head) {
    if(head === null) {
        return null;
    }
    return head.val;
}

let frontVal = front(head);
console.log(frontVal);

//Singly Linked Lists - SLinks
//SList: Length
console.log('\nSList: Length')
//Create a function that accepts a pointer to the first list node, and returns number of nodes in that list.

function sListLength(head) {
    let length = 0;
    let current = head
    while( current !== null) {
        length++;
        current = current.next;
    }
    return length;
}

console.log(sListLength(head));

//SList: Display
console.log('\nSList: Display')
//Create display(node) for debugging that returns a string containing all list values.

function display(node) {
    let str = '';
    while(node !== null) {
        if(node.next === null) {
            str+=`${node.val}`;
        }
        else {
            str+=`${node.val}, `;
        }
        node=node.next;
    }
    return str;
}

console.log(display(head));

//SList: Max
console.log("\nSList: Max")
//Create a function max(node) to return the largest value.

function max(node) {
    if(node === null) {
        return null;
    }
    let max = node.val;
    while(node !== null) {
        if(node.val > max) {
            max = node.val;
        }
        node=node.next;
    }
    return max;
}

console.log(max(head));

//SList: Min
console.log("\nSList: Min")
//Create a function min(node) to return the smallest value.

function min(node) {
    if(node === null) {
        return null;
    }
    let min = node.val;
    while(node !== null) {
        if(node.val < min) {
            min = node.val;
        }
        node=node.next;
    }
    return min;
}

console.log(min(head));

//SList: Average
console.log("\nSList: Average")
//Create a function average(node) to return the average value.

function average(node) {
    if(node === null) {
        return null;
    }
    let total = 0;
    let count = 0;
    while(node !== null) {
        total+=node.val;
        count++;
        node=node.next;
    }
    return(total/count);
}

console.log(average(head));

//SList: Back
console.log('\nSList: Back')
//Create a function that accepts a ListNode pointer and returns the last value in the list.

function back(node) {
    if(node === null) {
        return null;
    }
    while(node.next !== null) {
        node=node.next;
    }
    return(node.val);
}

console.log(back(head));

//SList: Remove Back
console.log('\nSList: Remove Back')
//Create a standalone function that removes the last ListNode in the list and returns the new list.

function removeBack(node) {
    if(node === null || node.next === null) {
        return null;
    }
    let list = node;
    while(node.next.next !== null) {
        node=node.next;
    }
    node.next = null;
    return list;
}

console.log(removeBack(head));