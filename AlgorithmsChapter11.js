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

  //BST: Min
  //Create a min() method on the BST class that returns the smallest value found in the BST.
  min() {
    if(!this.root) {
      return null;
    }

    let current = this.root
    while(current.left !== null) {
      current = current.left
    }
    return current.value
  }

  //BST: Max
  //Create a max() method on the BST class that returns the largest value found in the BST.
  max() {
    if(!this.root) {
      return null;
    }

    let current = this.root
    while(current.right !== null) {
      current = current.right
    }
    return current.value
  }

  //BST: Size
  //Write a size() method that returns the number of nodes (values) contained in the tree.
  size() {
    return this._size(this.root);
  }

  _size(node) {
    if (node === null) {
      return 0;
    }
    return 1 + this._size(node.left) + this._size(node.right);
  }

  //BST: Is Empty
  //Create an isEmpty() method to return whether the BST is empty (whether it contains no values).
  isEmpty() {
    return !this.root;
  }

  //BST: Height
  //Build a height() method on the BST object that returns the total height of the tree - the longest sequence of nodes
  //from root node to leaf node.
  height() {
    return this._height(this.root);
  }

  _height(node) {
    if (node === null) {
      return -1;  // Base case for empty tree or leaf node
    }
    const leftHeight = this._height(node.left);
    const rightHeight = this._height(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }

}

let bst = new BST();
bst.add(15);
bst.add(10);
bst.add(20);
bst.add(8);
bst.add(12);
bst.add(10);
bst.add(35);
bst.add(9);
bst.add(11);
bst.add(24);
bst.add(33);
bst.add(36);
bst.add(45);

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

console.log("\nBST: Min");
console.log(bst.min());

console.log("\nBST: Max");
console.log(bst.max());

console.log("\nBST: Size");
console.log(bst.size());

console.log("\nBST: Is Empty");
console.log(bst.isEmpty());

console.log("\nBST: Height");
console.log(bst.height());