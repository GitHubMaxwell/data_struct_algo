class TreeNode {
  constructor(val) {
    this.value = val;
    this.children = [];
    // this.amount = this.children.length;
    this.amount = 0;
    // this.amount = Object.keys(this.children).length;
    // how many children this node has / per
  }
}
// what is held in children because in a Binary Tree you literally had this.left and this.right so in this.child there should be an object whos size will change

class NaryTree {
  constructor(limit) {
    this.limit = limit;
    // amount of children allowed per node
    this.root = null;
  }
  add(val) {
    let node = this.root;
    if (!node) {
      this.root = new TreeNode(val);
      return;
    } else {
      // check this.children to see how many children are on the node already versus how many are allowed
      if (node.amount < this.limit) {
        // if the amount of children on this node is less then the amount of children allowed on nodes then push node here else iterate to the next bottom left ndoe and repeat the check
        let newNode = new TreeNode(val);
        node.children.push(newNode);
        node.amount = node.children.length;
        node.amount; //?
        return;
      } else {
        // check the node.amount to see if its full or can fit
        // change to next node
        node.children.length; //?
        for (let i = 0; i < node.children.length; i++) {
          if (node.amount < 3) {
            // node = node.children[i];
            // let newNode = new TreeNode(val);
            // node.children.push(newNode);
            node;
            return;
          } else {
            // switch to sibling if possible
            // node = node.children[i];
            node.children; //?
          }
        }
      }
    }
  }
}

let tree = new NaryTree(3);
tree; //?

tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);

console.log(JSON.stringify(tree)); //?

export default NaryTree;

/*
TreeNode : {
    this.value = 4;
    this.amount = 3;
    this.children = [
        TreeNode : {
            this.children = {...}
            this.value = 2;
            this.amount = <length of this.children>;
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
