// count the minimal number of jumps that the frog must perform to reach its target

// given three integers X, Y, D, reutrns the minimal number of jumps from position X to a position equal to or greater than Y
// X is you rstarting point
// Y is your destination
// D is the amount you move per jump

// NOTES (just see what the Math looks like)
// Y - X / D
// Y = 85
// X = 10
// D = 30
(85 - 10) / 30; //?
30 * 3; //?

// ALGO
// function that takes three params
// calculate how many jumps it will take and round up

function frogJump(x, y, d) {
  let result = Math.ceil(y / d); //?
  result * d + x; //?
  return result;
}

let start = 10;
let dest = 85;
let jump = 30;

frogJump(start, dest, jump); //?
