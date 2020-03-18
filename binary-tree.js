/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    let binaryNodes = [this.root]

    let shortestArr = []

    function moveToNextNode(node, shortest = 1) {
      //check if there's no left or right 
      if (node.left === null && node.right === null) {
        shortestArr.push(shortest);
      }
      if (node.left !== null) {
        return moveToNextNode(node.left, shortest += 1)
      } else if (node.right !== null)
        return moveToNextNode(node.right, shortest += 1)
    }

    moveToNextNode(binaryNodes[0]);

    return Math.min(shortestArr)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    let binaryNodes = [this.root];

    let longestArr = [];

    function moveToNextNode(node, longest = 1) {
      if (node.left === null && node.right === null) {
        longestArr.push(longest);
      }

      // if there's a left & right node
      if (node.left && node.right) {
        // move to left node
        return moveToNextNode(node.left, longest += 1);
      }
      else if (node.right !== null) {

        // return moveToNextNode(node.right, longest += 1);
      }
      else {

      }


    }
    moveToNextNode(binaryNodes[0]);
    console.log(binaryNodes[0].left)
    console.log(binaryNodes[0].right)
    console.log(longestArr)
    return Math.max(longestArr);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return;
    let sum = 0;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
