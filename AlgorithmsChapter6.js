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

  // Helper function to print queue contents
  printQueue() {
    let current = this.head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let queue = new SLQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue contents:")
queue.printQueue();

queue.dequeue()
console.log("\nQueue contents after 1 dequeue:")
queue.printQueue();
