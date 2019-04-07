// Given a singly linked list, determine if it is a palindrome.

// challenge
// O(n) time O(1) space
// mine is is O(n) time and space
// how to handle

// ERROR
// i needed to adda "continue" to inside the if conditional so that i dont push the value i just used to pop off a value from the stack into that very stack
// odd lengthed LL where they are
// single length or no node === true apparently

function isPalindrome(node) {
  if (node.head === null || node.head.next === null) return true;
  let stack = [];
  let current = node.head;
  // in the question i dont have to specify .head
  //   let current = node;

  while (current) {
    if (current.val === stack[stack.length - 1]) {
      // or if the current.next
      stack.pop();
      continue;
    } else if (current.next.val === stack[stack.length - 1]) {
      //
    } else {
      stack.push(current.val);
    }
    current = current.next;
  }

  return stack.length === 0 ? true : false;
  //   return stack.length < 2 ? true : false;
}

export default isPalindrome;
