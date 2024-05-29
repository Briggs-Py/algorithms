//Chapter 11 - Trees

//Set up a Binary Tree Node
class BTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  //Binary Search Tree: Add
  //Create an add(val) method on the BST object to add a new value to the tree. This entails creating a BTNode with this
  //value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate
  //values.
  add(val){
    const newNode = new BTNode(val);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root
    while (true) {
      if (val < current.value) {
        if (current.left === null) {
            current.left = newNode;
            return;
        }
        current = current.left;
      } else {  // Allow duplicates to go to the right side
        if (current.right === null) {
            current.right = newNode;
            return;
        }
        current = current.right;
      }
    }
  }
}

let bst = new BST();
bst.add(15);
bst.add(10);
bst.add(20);
bst.add(8);
bst.add(12);
bst.add(10);

function printInOrder(node) {
    if (!node) return;
    printInOrder(node.left);
    console.log(node.value);
    printInOrder(node.right);
}

printInOrder(bst.root);