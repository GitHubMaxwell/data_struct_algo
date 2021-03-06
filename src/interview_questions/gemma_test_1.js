// import sorting from '../utils/sortNumbers';
// // given a LL give its length
// // non cyclical and at least one element

// function solution(A) {
//   A.sort(sorting);
//   return A;
// }

// let array = [4, 3, 2, 1];
// solution(array); //?

// given an array A

// ASSUMPTIONS
// sorted in increasing order / smallest
// are dups
// values are INT
// length 1 - 100,000
// value = 0 - 2 billion somethin

// NOTES
// Leader = number that occurs in MORE than half the array size
// keep map that holds occurence of values versus the length of the array
// return -1 if array doesnt contain leader
function solution(A) {
  var n = A.length;
  // ORIGINAL 1
  var L = new Array(n + 1);
  // var L = new Array(n);

  L[0] = -1;
  var i;

  // push all values into new array with -1 being the first
  for (i = 0; i < n; i++) {
    // ORIGINAL 2
    L[i + 1] = A[i];
    // L[i] = A[i];
  }
  // console.log(L);

  var count = 0;

  // ORIGINAL 3 - CHANGED -
  // whatever was in the center of the array is the possible candidate
  var pos = Math.floor((n + 1) / 2); //?
  // var pos = Math.floor(n / 2); //?
  candidate = L[pos]; //?

  // ORIGINAL 4 - CHANGE - to the length of the new array
  // for (i = 1; i <= n; i++) {
  for (i = 0; i < L.length; i++) {
    if (L[i] == candidate) count = count + 1; //?
    // count;
  }
  // count;
  // pos;

  // ORIGINAL 5
  // if (count > pos) return candidate;
  // return -1;
  // A.length; //?

  // CHANGE
  return A.length === 1 ? A[0] : count > pos ? candidate : -1; //?
}

// fails when its more than half in odd numbered length arrays

// PASS
// let array = [2, 2, 2, 2, 2, 3, 4, 4, 4, 6];
// -1

// FAIL -1
// let array = [2, 2, 3];
// 2

// PASS
let array = [1];
// 1

// FAIL -1
// let array = [2, 2, 2, 3, 3];
// 2

// PASS
// let array = [2, 2, 1, 3, 3];
// -1

// PASS
// let array = [2, 2, 2, 2, 2, 3];
// 2

// PASS
// let array = [1,2];
// -1

// PASS
// let array = [1, 1];
// 1

// what is the int that occupies more than have the length of the array
// if none = -1
// if return the number

solution(array); //?
