// given
// youre given X integer which is the
// earliest time (index of array) that you can make it to X if each index, starting from

// ASSUMPTIONs
// - lowest value is 1 to infinty
// - length is 1 - 100,000
// - X destination is 1 to 100,000
// order doesnt matter all that mattes is that if given X = 5 you need the elements 1 - 5
// indexOf
// ALGO
// function take in array
// declare map
// iterate over array
// input elements into map (which handles the finding of the elements)
// once map size is same as X
// -check which element has the largest index and return that

function frogRiverOne(arr, x) {
  let map = {};
  // start at one
  let earliest = -1;
  // start at -1 indicated from the get go that
  for (let i = 0; i < arr.length; i++) {
    if (!map[i + 1] && arr.indexOf(i + 1) !== -1) {
      map[i + 1] = arr.indexOf(i + 1);
      if (arr.indexOf(i + 1) > earliest) {
        earliest = arr.indexOf(i + 1); //?
      }
    }
  }
  if (Object.keys(map).length !== x) {
    // if the map doest have all the values then the other side cant be reached - should return -1
    return -1;
  }

  earliest;
  map;
  return earliest;
}
// let array = [1, 3, 1, 4, 2, 3, 5, 4];
// let dest = 5;
// // return 6
// let array = [6, 5, 4, 3, 2];
// let dest = 6;
// // return -1
let array = [1];
let dest = 6;
// return -1
// let array = [1, 1, 2];
// let dest = 2;
// // return 2
frogRiverOne(array, dest); //?
