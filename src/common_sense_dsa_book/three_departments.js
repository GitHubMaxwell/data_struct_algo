// create combinations of 3 department numbers
// must sum to 12
// one department must only be even numbers
// must be different numbers

// VER.1
// function threeDepts() {
//   let arr = [];

//   for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//       for (let k = 0; k < 10; k++) {
//         if (i != j && i != k && j != k) {
//           if (i + j + k === 12) {
//             if (j % 2 === 0) {
//               arr.push(`${i} - ${j} - ${k}`);
//             }
//           }
//         }
//       }
//     }
//   }

//   return arr;
// }

// VER.2 - move the if logic into a function for readability

function isValidPerm(i, j, k) {
  if (i != j && i != k && j != k) {
    if (i + j + k === 12) {
      if (j % 2 === 0) {
        return true;
      }
    }
  }
}

export function threeDepts() {
  let arr = [];

  for (let i = 1; i < 8; i++) {
    for (let j = 1; j < 8; j++) {
      for (let k = 1; k < 8; k++) {
        if (isValidPerm(i, j, k)) {
          arr.push(`${i} - ${j} - ${k}`);
        }
      }
    }
  }

  return arr;
}

// VER.3 optimizations
//  calculate the sanitation number by subtracting the sum of the other two numbers from 12, thus eliminating the innter loop
//  force the police department to be even, as he did in the earlier attempt.

function isValidPerm2(i, j, k) {
  if (i != j && i != k && j != k) {
    // if (i + j + k === 12) {
    //   if (j % 2 === 0) {
    return true;
    //   }
    // }
  }
}

export function threeDepts2() {
  let arr = [];
  let k;

  for (let i = 1; i < 8; i++) {
    for (let j = 2; j < 8; j += 2) {
      //   for (let k = 0; k < 10; k++) {
      if (12 - (i + j) > 0 && 12 - (i + j) < 8) {
        k = 12 - (i + j);
        k; //?
        if (isValidPerm2(i, j, k)) {
          arr.push(`${i} - ${j} - ${k}`);
        }
      }
      //   }
    }
  }

  return arr;
}

// let one = threeDepts(); //?
// let two = threeDepts2(); //?

// one.length; //?
// two.length; //?

// one === two; //?
// console.log(threeDepts()); //?
// console.log(threeDepts2()); //?
