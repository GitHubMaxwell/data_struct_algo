// function openLocks(deadends, target) {
//   let dead = {};
//   let steps = 0;
//   let combo;
//   let temp;
//   for (let d = 0; d < deadends.length; d++) {
//     if (!dead[deadends[d]]) {
//       dead[deadends[d]] = true;
//     }
//   }

//   dead; //?
//   for (let a = 0; a < 10; a++) {
//     for (let b = 0; b < 10; b++) {
//       for (let c = 0; c < 10; c++) {
//         for (let d = 0; d < 10; d++) {
//           combo = `${a}${b}${c}${d}`;
//           console.log(combo);
//           steps++;
//           if (combo === target) {
//             combo; //?
//             steps; //?
//             return steps;
//           }
//           temp = (parseInt(combo) + 1).toString();
//           if (dead[temp]) {
//             // increment one ahead
//           }
//         }
//       }
//     }
//   }
//   return -1;
// }

function convertDigit(digit) {
  let plusOne = digit + 1;
  let minusOne = digit - 1;
  if (plusOne === 10) plusOne = 0;
  if (minusOne === -1) minusOne = 9;
  return [plusOne, minusOne];
}

function neighbour(target) {
  const neighbours = [];
  for (let i = 0; i < target.length; i++) {
    const [plusOne, minusOne] = convertDigit(Number(target[i]));
    neighbours.push(`${target.substring(0, i)}${plusOne}${target.substring(i + 1, target.length)}`);
    neighbours.push(
      `${target.substring(0, i)}${minusOne}${target.substring(i + 1, target.length)}`
    );
  }
  return neighbours;
}

function openLock(deadends, target) {
  const visited = new Set();
  for (let i = 0; i < deadends.length; i++) {
    visited.add(deadends[i]);
  }
  const queue = [];
  let steps = -1;
  if (!visited.has('0000')) {
    queue.push('0000');
    visited.add('0000');
  }
  while (queue.length) {
    steps += 1;
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const current = queue.shift();
      if (current === target) return steps;
      const neighbours = neighbour(current);
      for (let n of neighbours) {
        if (!visited.has(n)) queue.push(n);
        visited.add(n);
      }
    }
  }
  return -1;
}

// let deadends = ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'];
// let target = '8888';
let deadends = ['0201', '0101', '0102', '1212', '2002'];
let target = '0202';
openLock(deadends, target); //?
