import sortNums from '../utils/sortNumbers';

// ALGO
// is the a[center] the target
// else if is it larger
// - call the function again except with a spliced array
//   a.forEach((val, idx) => {
//     console.log(val, idx);
//   });

// VER.1 - ERRORS
// forgot to return the recursive calls as in
// -- i was doing this: binarySearch(larger, target);
// -- instead of this: return binarySearch(larger, target);

// VER.1 - recursively
export function binarySearchRec(a, target) {
  if (a.length === 0 || (a.length === 1 && a[0] != target)) {
    return false;
  }

  if (typeof target != 'number') {
    return false;
  }

  a.sort(sortNums);
  let center = Math.floor(a.length / 2);

  if (a[center] === target) {
    return true;
  } else if (a[center] > target) {
    return binarySearchRec(a.slice(0, center), target);
  } else if (a[center] < target) {
    return binarySearchRec(a.slice(center), target);
  }
}

// VER.2 - Iteratively
export function binarySearchIt(a, target) {
  if (a.length === 0 || typeof target != 'number') {
    return false;
  }
  a.sort(sortNums);

  let lower = 0;
  let upper = a.length - 1;
  let mid;

  while (lower <= upper) {
    mid = Math.floor((upper + lower) / 2);
    if (a[mid] === target) {
      return true;
    } else if (a[mid] > target) {
      // if the value at a[mid] is larger than the target then change the array selection's end value from the end of the array to the
      upper = mid - 1;
    } else if (a[mid] < target) {
      lower = mid + 1;
    }
  }
  return false;
}

// VER.2 ERRORS
// forgot to sort the array
// mid calculation needs to be INSIDE the while loop to be calculated each iteration
// when calculating mid i needed to put upper + lower in parenthesis
// in the while loop if conditionals i needed to switch the > and <
