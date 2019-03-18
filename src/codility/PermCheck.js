import bigArray from '../utils/bigArray';
// check whether array A is a permutation
// so i have to check all values up to a given

// ASSUMPTIONS
// non-empty array (at least 1 element which would have to be = 1)
// array size 1 - 100,000
// element value 1 - 1,000,000,000

// FAIL
// missing number
// dups (map to keep counter / if counter on one value is )
// if array s

// NOTES
// checking that an array is a permutation per its length
// array length 5 = [1,2,3,4,5]
// check map if all key values = 1 and size of map is same as array
// indexOf if while iterating any values = -1 return 0 (missing value)
// if key value > 1 return 0 right then and there (prevent dups)

// ALGO
// function takes array
// declare map
// iterate over array
// if value <= arr.length
// - return 0 (all values inthe array have to be between 1 and arr.length)

function permCheck(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    // value isnt a permuation
    if (arr[i] > arr.length) return 0;
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      // if its a duplicate return 0
      return 0;
    }
  }
  // check if
  map;
  Object.keys(map).length; //?
  arr.length; //?
  // if its missing a permutation return 0
  if (Object.keys(map).length < arr.length) return 0;
  // on success return 1;
  return 1;
}

// let array = [4, 1, 3]; // 0 = missing 2
// let array = [4, 1, 3, 2]; // 1
// let array = [4]; // 0 = 4 should be a 1
// let array = [2,2]; // 0 = duplicates
// let array = [3, 2, 1]; // 1
// let array = [11, 22, 44, 55]; // 0 = values arent permutations
let array = bigArray(1000, 300); //?
permCheck(array); //?
