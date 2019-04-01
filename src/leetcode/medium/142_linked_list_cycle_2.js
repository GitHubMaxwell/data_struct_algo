// leetcode #142 medium

import LinkList from '../../utils/linkList';

//given a link list, return the node where the cycle begins
// if there is no cycle then return null

// NOTES
// you ge the head of the node
// can i leave bread crumbs on the link list?
// without adding extra space so i assume not

// ALGO
// iterate though the link list
// if a node's next has already been traversed
// return that node
// if you reach null
// two pointers start
// one moving at one .next at a time and the other at twice .next.next at a time
// if the value of the two iterators is the same then they are on the start of the cycle

var detectCycle = function(head) {
  return 'need to do';
};

let arr = [0, 1, 2, 3];

let newLL = new LinkList();
newLL.append(arr); //?

console.log(JSON.stringify(newLL));

export default detectCycle;
