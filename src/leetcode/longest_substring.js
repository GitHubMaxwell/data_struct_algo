// question # 3 - medium
// given a string, find the longest SUBSTRING that doesnt contain characters
// shortest is 1

// ALGO
// take in string
// declare map with key being the substring and the length being the value
// declare temp variable to hold current string
// iterate of string add/concat to "temp" and each time iterating check to see if "temp" contains the the letter
// -- if it does then its a duplicat and you should then compare "temp" with whats held in the map
// compare with map
// -- if map doesnt hav string at all (first iteration) put first "temp" in
// -- if it does have a string compare the lengths and replace accordingly

// var lengthOfLongestSubstring = function(s) {
//   if (s.length === 0) return 0;
//   let largest = '';
//   let temp = s[0];

//   for (let j = 1; j < s.length; j++) {
//     if (temp.includes(s[j])) {
//       if (largest.length === 0) {
//         largest = temp;
//         if (s[j - 1] !== s[j]) {
//           temp = s[j - 1] + s[j];
//         } else {
//           temp = s[j];
//         }
//       } else if (temp.length > largest.length) {
//         largest = temp;
//         if (s[j - 1] !== s[j]) {
//           temp = s[j - 1] + s[j];
//         } else {
//           temp = s[j];
//         }
//       }
//     } else {
//       temp = temp + s[j];
//     }
//   }
//   if (temp.length > largest.length) {
//     largest = temp;
//   }
//   largest;
//   return largest.length; //?
// };

// ISSUES
// its returning SUBSEQUENCES
// -- werent resetting temp to '' on updating;
// not handling if entire string is unique
// once duplicate found you need to start the temp string from one letter before the letter found at current iteratation -> temp = s[j - 1] + s[j];

// MY SOLUTION 2
// nested for loops
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  let temp = '';
  let largest = '';

  for (let i = 0; i < s.length - 1; i++) {
    temp = s[i];
    // temp;

    // for (let j = 1; j < s.length; j++) {
    for (let j = i + 1; j < s.length; j++) {
      if (temp.includes(s[j])) {
        // if its a duplicate
        if (largest.length === 0) {
          largest = temp;
          // temp = s[j];
          if (s[j - 1] !== s[j]) {
            temp = s[j - 1] + s[j];
          } else {
            temp = s[j];
          }
          break;
        } else if (temp.length > largest.length) {
          largest = temp;
          // temp = s[j];
          if (s[j - 1] !== s[j]) {
            temp = s[j - 1] + s[j];
          } else {
            temp = s[j];
          }
          break;
        }
      } else {
        temp = temp + s[j];
      }
      if (temp.length > largest.length) {
        largest = temp;
      }
    }
    // console.log(temp);
  }
  // temp;
  // largest;
  // if (temp.length > largest.length) {
  //   largest = temp;
  // }
  largest;
  return largest.length; //?
};

// TESTS
// let str = 'bbbbbb';
// returns 1 'b'
let str = 'pwwkew';
// returns 3 'wke'
// let str = 'abcabcbb';
// returns 3 'abc'
// let str = 'b';
// return 1 b;
// let str = 'abcdefghijklmnopqrstuvwxyz';
// return 26 - whole string unique
// str.length; //?
// let str = 'dvdf';
// return 3 - vdf
// let str = 'anviaj';
// return 5

lengthOfLongestSubstring(str); //?
