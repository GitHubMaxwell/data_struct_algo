//IF/ ELSE statement to determine which for loop
// 4 directions

function spiral(A) {
  let l = 0;
  let u = 0;
  let r = A[0].length - 1;
  let d = A.length - 1;
  let newA = [];

  l;
  r;
  while (u <= d && l <= r) {
    // so that the points never intersect

    for (let i = l; i <= r; i++) {
      newA.push(A[u][i]);
      A[u][i]; //?
    }
    u++;
    // u;
    // d;
    for (let i = u; i <= d; i++) {
      A[i][r]; //?
      newA.push(A[i][r]);
    }
    r--;
    r;
    l;
    for (let i = r; i >= l; i--) {
      A[d][i]; //?
      newA.push(A[d][i]);
    }
    d--;
    u;
    d;
    for (let i = d; i >= u; i--) {
      A[i][l]; //?
      newA.push(A[i][l]);
    }
    l++;
  }
  return newA;
}
// let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let array = [[1], [2], [3]];
let array = [[1], [2]];
// let array = [[1]];
spiral(array); //?
//------------------[ 1, 2, 3 ];
//----------------- [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ];
