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

  //BST: Contains
  //Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the
  //BST structure to make this a much more rapid operation than SList.contains() would be.

  contains(val) {
    let current = this.root;
    while(current !== null) {
      if( current.value === val) {
        return true;
      }
      else if (val < current.value) {
        current = current.left;
      }
      else {
        current = current.right;
      }
    }
    return false;
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

console.log("BST: Add");
printInOrder(bst.root);

console.log("\nBST: Contains");
console.log(bst.contains(12));
console.log(bst.contains(20));
console.log(bst.contains(5));