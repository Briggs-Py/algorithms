//Chapter 6 - Queues and Stacks

//Setup
class SLNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SLQueue {
  constructor() {
    this.head = null; // Front of the queue
    this.tail = null; // End of the queue
  }

  //SLQueue: Enqueue
  //Create SLQueue method enqueue(val) to add the given value to end of our queue.
  enqueue(val) {
    let newNode = new SLNode(val);

    if (this.tail === null) {
      // If the queue is empty, new node becomes both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Append new node to the end of the queue and update the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  //SLQueue: dequeue
  //create a method dequeue to remove and return value at front of queue.
  dequeue() {
    if (this.head === null) {
        return null;
      }
      let removedValue = this.head.val;
      this.head = this.head.next; // Move the head pointer to the next node
      if (this.head === null) {
        this.tail = null; // If the queue becomes empty, set the tail to null too
      }
      return removedValue;
  }

  //SLQueue: Front
  //Create a method front() to return the value at front of the queue, without removing it.
  front() {
    return this.head.val;
  }

  //SLQueue: Contains
  //Create method contains(val) to return whether given value is found within our queue.
  contains(val) {
    let current = this.head;
    while (current !== null) {
      if (current.val === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  //SLQueue: Is Empty
  //Create SLQueue method isEmpty() that returns whether our queue contains no value.
  isEmpty() {
    return !(this.head && this.tail);
  }

  //SLQueue: Size
  //Create SLQueue method size() that returns the number of values in the queue.
  size() {
    let current = this.head;
    let size = 0;
    while (current !== null) {
      size++;
      current = current.next;
    }
    return size;
  }

  // Helper function to print queue contents
  printQueue() {
    let current = this.head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
}

//SLQueue: Compare Queues
//Given two SLQueue objects, create a standalone function that returns whether they are equal elements in identical
//order. Allocate no other object, and return the queues in their original condition upon exit.
function areQueuesEqual(queue1, queue2) {
  let current1 = queue1.head;
  let current2 = queue2.head;
    while (current1 !== null) {
      if(current2 === null) {
        return false;
      }
      if(current1.val !== current2.val) {
        return false;
      }
      current1 = current1.next;
      current2 = current2.next;
    }
    return current2 === null;
}

//SLQueue: Remove Minimums
//Create a standalone function to remove an SLQueue's lowest value, otherwise leaving values in the same sequence.
//Use only local variables; allocate no other objects. Remove all duplicates of this value.
function removeMinimums(queue) {
  if (queue.head === null) {
        return null;
  }
  let current = queue.head;
  let minimum = queue.head;

    //Locate minimum value.
    while (current !== null) {
      if (current.val < minimum.val) {
        minimum = current.val;
      }
      current = current.next;
    }

    // Remove all nodes with the minimum value.
    let dummyHead = new SLNode(0); // Temporary dummy node to simplify edge cases
    dummyHead.next = queue.head;
    let prev = dummyHead;
    current = queue.head;
    while (current) {
        if (current.val === minimum) {
            prev.next = current.next;
            if (current === queue.tail) {
                queue.tail = prev; // Update the tail if necessary
            }
        } else {
            prev = current;
        }
        current = current.next;
    }
    queue.head = dummyHead.next; // Update the real head of the queue

    if (!queue.head) { // Update the tail if necessary
        queue.tail = null;
    }
}

//Create New Queue and Test Logs
let queue = new SLQueue();
let queue2 = new SLQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);

console.log("\nAre queues equal:");
console.log(areQueuesEqual(queue, queue2));

console.log("Queue contents:");
queue.printQueue();

queue.dequeue();
console.log("\nQueue contents after 1 dequeue:");
queue.printQueue();

console.log("\nFront value of queue:");
console.log(queue.front());

console.log("\nDoes queue contain value:");
console.log(queue.contains(4));
console.log(queue.contains(3));
console.log(queue.contains(2));
console.log(queue.contains(1));

console.log("\nis the queue empty:");
console.log(queue.isEmpty());

console.log("\nSize of queue:");
console.log(queue.size());

console.log("\nAdding nodes to queue 1.");
queue.enqueue(1);
queue.enqueue(1);
queue.enqueue(1);
console.log("\nQueue 1 contents:");
queue.printQueue();

console.log("\nRemove the minimum values for queue 1:");
removeMinimums(queue);
queue.printQueue();