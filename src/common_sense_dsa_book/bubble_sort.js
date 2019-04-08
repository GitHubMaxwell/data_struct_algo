// ALGO
// take in array
// declare a variable to tell whether a swap occured (T/F)
// declare left and right pointer
// left = 0 and right = left + 1;
// iterate over array
// -- while loop in a while loop
// -- inner while is while(swap) and outer while sets swap to true
// do while loop to get at least one loop
// -- if a[left] > a[right] = swap AND swap = true
// -- else nothing

// VER.1 - While - For
export function bubbleSort(a) {
  // if no array return whatever
  let swap = true;
  let left, right, temp;
  let length = a.length;

  while (swap) {
    swap = false;
    // for loop of the length of the array
    for (let i = 0; i < length; i++) {
      left = i;
      right = left + 1;
      if (a[left] > a[right]) {
        swap = true;
        // SWAP
        temp = a[left];
        a[left] = a[right];
        a[right] = temp;
      }
    }
    length--;
  }
  return a; //?
}

// VER.2 - Do...While - For
// optimize
// - store a.length in variable and decrement every iteration so that you arent going over the entire array every time
// - dont have to have variables left and right but i think it makes it more readable

export function bubbleSortDo(a) {
  let swap;
  let left, right, temp;
  let length = a.length;

  do {
    swap = false;
    for (let i = 0; i < length; i++) {
      left = i;
      right = left + 1;
      if (a[left] > a[right]) {
        swap = true;
        // SWAP
        temp = a[left];
        a[left] = a[right];
        a[right] = temp;
      }
    }
    length--; //?
  } while (swap);
  return a; //?
}

// VER.3 - Recusive ??

export function bubbleSortRec(a) {
  //
}
// i dont know where to put swap true false assignments
// i need to iterate per the length of the array
