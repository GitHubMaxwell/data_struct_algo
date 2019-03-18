import LinkedList from '../utils/linkList';

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
  let sum = (parseInt(num1) + parseInt(num2)).toString();
  let newLL = new LinkedList();
  for (let i = sum.length - 1; i >= 0; i--) {
    newLL.append(parseInt(sum[i]));
  }
  newLL.head; //?
  return newLL;
}

export default addTwoNums;
