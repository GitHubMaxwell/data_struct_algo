// leetcode # 589 easy

import naryTree from '../../utils/naryTree';

function preOrder(tree) {
  return tree;
}

let tree = new naryTree(3);
tree.add(1);
tree.add(2);
tree.add(2);
tree.add(2);
tree.add(3);
console.log(JSON.stringify(tree));

export default preOrder;
