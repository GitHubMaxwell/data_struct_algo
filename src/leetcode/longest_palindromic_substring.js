// question #5 - medium
// given a string return the longest plandromic substring in the string

// ALGO
// take in string
// declare "pali" to hold palindrome
// have two pointers "left" "right" - they hold the indexes they start at
// -- "left" start and str[0] and "right" starts at str[str.length-1]
// iterate over string keeping "left" where it is and bringing "right" left by one until a match is found
// -- if you iterate all the way (while loop left < right) past left then without finding a duplicate under "right" then move "left" to right one space and start "right" from the end of the str and move left by one again
// once a match is found
// -- hold left and right index
// move "left" right by one "right" left by one (this is the new starting point for the right pointer)
// -- if new pointers are not the same

var longestPalindrome = function(s) {
  if (s.length === 1) return s;
  if (s.length === 0) return 0;
  // what if no string given
  let left = 0;
  let right = s.length - 1;
  let sub1 = left;
  let sub2 = right;
  let pali = false;
  while (left < right) {
    // nested while
    while (s[right] === s[left]) {
      s[right]; //?
      s[left]; //?
      // left;
      // right;
      left++;
      right--;
    }
    right--;
    // left++;
    sub2 = right; //?
    sub1 = left; //?
  }

  // if pali false && right is past left
  // reset right to end of string
  // move left forward one
  return s.substring(sub1, sub2 + 1);
};

// let str = 'babad';
// returns 'bab'
let str = 'dabab';
// returns 'aba'
longestPalindrome(str); //?
