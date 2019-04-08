// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// ALGO
// iterate over

// ASSUMPTIONS
// empty string is considered valid

// function isValid(str) {
//   if (!str) return true;
//   let close = {
//     '}': '{',
//     ']': '[',
//     ')': '('
//   };
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     if (close[str[i]] && close[str[i]] === stack[stack.length - 1]) {
//       close[str[i]]; //?
//       stack[stack.length - 1]; //?
//       // above is equal to the below (it assumes that if weve happened across a closing bracket in the string that the top value and the stack in the cooresponding opening brakcet)
//       // is the current top of the stack the opening
//       stack.pop();
//       continue;
//     } else {
//       // recieved a closing bracket and the top value on the stack isnt the cooresponding opening value
//       //   return false;
//     }
//     stack.push(str[i]);
//   }
//   return stack.length === 0;
// }

var isValid = function(str) {
  if (!str) return true;
  let close = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (close[str[i]] && close[str[i]] === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }
    stack.push(str[i]);
  }
  return stack.length === 0;
};

export default isValid;
