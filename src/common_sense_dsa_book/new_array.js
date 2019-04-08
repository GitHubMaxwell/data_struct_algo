// given an array create a new array using only taking from the ven indexes of the given array

// VER.1 - optimized to not check the array index but rather just iterate every other index
export function newArr(a) {
  let newArray = [];
  for (let i = 0; i < a.length; i += 2) {
    newArray.push(a[i]);
  }
  return newArray;
}

// VER.2 - less eficient where we go to each index and check if the index is even
export function newArrAll(a) {
  let newArray = [];
  // the iteration is one at a time instead of 2 at a time
  for (let i = 0; i < a.length; i++) {
    // have this extra even-check step
    if (i % 2 === 0) {
      newArray.push(a[i]);
    }
  }
  return newArray;
}

// VER.3 - use a while loop instead of a for loop - same as VER.2 in efficiency
export function newArrWhile(a) {
  let newArray = [];
  // the iteration is one at a time instead of 2 at a time
  let i = 0;
  while (i < a.length) {
    // have this extra even-check step
    if (i % 2 === 0) {
      newArray.push(a[i]);
    }
    i++;
  }
  return newArray;
}

// VER.4 - optimized while loop
export function newArrWhileFast(a) {
  let newArray = [];
  let i = 0;
  while (i < a.length) {
    newArray.push(a[i]);
    i += 2;
  }
  return newArray;
}

// VER.5 - foreach loop
export function newArrForEach(a) {
  let newArray = [];

  a.forEach((ele, idx) => {
    if (idx % 2 === 0) {
      newArray.push(ele);
    }
  });
  return newArray;
}
