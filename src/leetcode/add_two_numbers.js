import LinkList from '../utils/linkList';

// given two link lists representing non negative integers
// 5 -> 6 -> 4 -> null = 465;

//ALGO
// function take in two LLs
// iterate through each LL and concat toString
// parseInt strings
// add together
// toString answer
// iterate over string and build new LL
// return LL

// ASSUMPTIONS
// are LLs always the same length?

// MY SOLUTION
function addTwoNums(lL1, lL2) {
  let num1 = '';
  let num2 = '';
  let current = lL1.head;
  while (current) {
    num1 = current.val.toString() + num1;
    current = current.next;
  }
  current = lL2.head;
  while (current) {
    num2 = current.val.toString() + num2;
    current = current.next;
  }
  num1;
  num2;
  let sum = (parseInt(num1) + parseInt(num2)).toString();
  parseInt(num1) + parseInt(num2); //?
  sum;
  let newLL = new LinkList();

  for (let i = sum.length - 1; i >= 0; i--) {
    newLL.append(parseInt(sum[i]));
  }
  newLL.head; //?
  return newLL;
}

// SOLUTION 2
// var addTwoNums = function(l1, l2) {
//   let res = new LinkList();
//   let cur = res;
//   let remainder = 0;
//   while (l1 || l2) {
//     cur.next = new LinkList();
//     cur.next = new LinkList();
//     cur = cur.next;
//     let left = l1 ? l1.val : 0;
//     let right = l2 ? l2.val : 0;
//     let sum = left + right + remainder;
//     if (sum >= 10) {
//       remainder = 1;
//       cur.val = sum % 10;
//     } else {
//       remainder = 0;
//       cur.val = sum;
//     }
//     l1 = l1 ? l1.next : null;
//     l2 = l2 ? l2.next : null;
//   }
//   if (remainder === 1) cur.next = new LinkedList(1);

//   return res.next;
// };

// SOLUTION 3
// var addTwoNums = function(l1, l2) {
//   let List = new LinkList();
//   // need this?
//   // List.append(0);
//   List; //?
//   //   var head = List;
//   var sum = 0;
//   var carry = 0;

//   var current1 = l1.head;//?
//   var current2 = l2.head;//?

//   while (current1 !== null || current2 !== null || sum > 0) {
//     if (current1 !== null) {
//       sum = sum + current1.val;
//       current1 = current1.next;
//       sum;
//     }
//     if (current2 !== null) {
//       sum = sum + current2.val;
//       current2 = current2.next;
//       sum;
//     }
//     if (sum >= 10) {
//       carry = 1;
//       sum = sum - 10;
//     }

//     // head.next = new LinkedList(sum);
//     List;
//     sum;
//     List.append(sum);
//     List = List.next;

//     sum = carry;
//     carry = 0;
//   }
//   return List.head; //?
// };

// SOLUTION 4
// function addTwoNumbers(l1, l2) {
//   const before = new ListNode();
//   let tail = before;
//   let c = 0;

//   while (l1 || l2 || c) {
//     const v1 = l1 ? l1.val : 0;
//     const v2 = l2 ? l2.val : 0;
//     const v = v1+v2+c;

//     tail.next = new ListNode(v%10);
//     tail = tail.next;
//     c = v >= 10 ? 1 : 0;
//     l1 = l1&&l1.next;
//     l2 = l2&&l2.next;
//   }

//   return before.next;
// }

// let LL1 = new LinkList();
// LL1.append(2);
// LL1.append(4);
// LL1.append(3);

// let LL2 = new LinkList();
// LL2.append(5);
// LL2.append(6);
// LL2.append(4);

// addTwoNums(LL1,LL2);

export default addTwoNums;
