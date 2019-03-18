// ================= //
//     QUESTION
// ================= //

// given a positive integer N, find the largest subset of 0's in the binary conversion of said number (zeros in between 1's)

// 10010001
// largest = '000';

// ALGO
// function takes in positve integer
// convert to binary number/ needs to be string for this
// declare "length" which we will add to during iteration
// declare "temp" which will hold the current length of 0's
// iterate over string
//// what if binary string starts with 0 or ends with zero (ends shouldnt be a problem) then you dont have a way to stop
// you start counting and per occurence/match of 1 reset counter to 0
// return the length = "length" of the longest

function countBinary(num) {
  let binary = num.toString(2); //?
  let length = 0;
  let temp = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      if (temp > length) {
        length = temp;
      }
      temp = 0;
      continue;
    }
    temp++;
    if (temp > length) {
      length = temp;
    }
  }
  return length;
}

const number = 1041;
countBinary(number); //?
