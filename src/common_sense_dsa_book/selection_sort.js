// ALGO
// go from left to right
// holding the index location of the lowest value and if theres a value thats lower than re assign the variable that index
// once we reach the end we swap that value with the index that we started the passthrough with
// repeat steps until data is sorted =

export function selectionSort(a) {
  let smallest, temp;
  let j;
  for (let i = 0; i < a.length; i++) {
    smallest = i;
    for (j = i + 1; j < a.length; j++) {
      if (a[j] < a[i]) {
        smallest = j;
      }
      // SWAP
      // conditional to prevent swapping unless its been re assigned by the inner loop because otherwise whats currently "smallest" (a[i]) is where it needs to be / what if there are duplicates
      // if (swap) {
      if (smallest != i) {
        temp = a[i];
        a[i] = a[smallest];
        a[j] = temp;
      }
    }
  }
  return a; //?
}

// let arr = [2, 1];
let arr = [3, 2, 1];
selectionSort(arr); //?

// ERROR
// not storing the index (storing the value of the outer loop's )
// the SWAP has to be inside the inner loop? - No i was swapping the wrong values thats why it wasnt working
// -- ** the biggest error was
/*
if (smallest != i) {
      let temp = a[i];
      a[i] = a[smallest];
      // a[j] = temp;
      // ERROR -> a[j] = temp
      a[smallest] = temp;
}
*/

// VER.2 - from Book

export function selectionSortBook(a) {
  //   let j;
  for (let i = 0; i < a.length; i++) {
    let smallest = i;
    // for (j = i + 1; j < a.length; j++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[smallest]) {
        smallest = j;
      }
    }
    if (smallest != i) {
      let temp = a[i];
      a[i] = a[smallest];
      // a[j] = temp;
      // ERROR -> a[j] = temp
      a[smallest] = temp;
    }
  }
  return a;
}

function selectSort(array) {
  for (var i = 0; i < array.length; i++) {
    var lowestNumberIndex = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    if (lowestNumberIndex != i) {
      var temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  return array;
}

let array = [3, 2, 1];
// selectSort(array); //?

selectionSortBook(array); //?
