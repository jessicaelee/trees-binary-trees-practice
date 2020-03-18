/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let toAddStack = [this.root];

    let total = 0;

    while (toAddStack.length) {
      let current = toAddStack.pop();
      total += current.val;

      if (current.children) {
        for (let child of current.children) {
          toAddStack.push(child)
        }
      }
    }
    return total;

  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let toAddStack = [this.root];

    let count = 0;

    while (toAddStack.length) {
      let current = toAddStack.pop();

      if (current.val % 2 === 0) {
        count++;
      }

      if (current.children) {
        for (let child of current.children) {
          toAddStack.push(child);
        };
      };
    };
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let toAddStack = [this.root];

    let count = 0;

    while (toAddStack.length) {
      let current = toAddStack.pop();

      if (current.val > lowerBound) {
        count++;
      }

      if (current.children) {
        for (let child of current.children) {
          toAddStack.push(child);
        }
      }
    }
    return count;
  }

}

module.exports = { Tree, TreeNode };
