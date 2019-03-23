class TreeNode {
  constructor(val) {
    this.children = null;
    this.value = val;
    this.amount = Object.keys(this.children).length;
    // how many children this node has / per
  }
}
// what is held in children because in a Binary Tree you literally had this.left and this.right so in this.child there should be an object whos size will change

/*
TreeNode : {
    this.value = 4;
    this.amount = 3;
    // should this.children be an array of object
    this.children = [
        TreeNode : {
            this.children = {...}
            this.value = 2;
            this.amount = ?;
        },
        TreeNode : {
            this.children = {...}
            this.value = 1;
            this.amount = ?;
        },
        TreeNode : {
            this.children = {...}
            this.value = 55;
            this.amount = ?;
        }
    ]
}
*/

class NaryTree {
  constructor(amount) {
    this.root = null;
    this.children = amount;
    // amount of children allowed per node
  }
  add(val) {
    const node = this.head;
    const children = this.children;
    if (!node) {
      this.head = new TreeNode(val);
      return;
    } else {
      // check this.children to see how many children are on the node already versus how many are allowed
      if (this.amount < children) {
        // if the amount of children on this node is less then the amount of children allowed on nodes then place node here else iterate to the next bottom left ndoe and repeat the check
      } else {
        // change to next node
      }
    }
  }
}

export default NaryTree;
