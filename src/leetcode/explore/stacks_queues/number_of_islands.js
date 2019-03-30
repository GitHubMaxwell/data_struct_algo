// given a 2d array of strings 1's and 0's, all edges are surrounded by water
// what are the subproblems and steps being taken

/*

[ [ '1', '1', '1', '1', '0' ],
  [ '1', '1', '0', '1', '0' ],
  [ '1', '1', '0', '0', '0' ],
  [ '0', '0', '0', '0', '0' ] ]

  return 1
*/

// MY ATTEMPT
// function numIsland(a) {
//     let islands = {};
//     let counter = 0;
//     let onLand = false;
//     for(let i = 0; i < a.length ; i++) {
//         // need to know difference between water and land
//         // need to know if STILL on land
//         if(!onLand)
//         if(a[i] === 1 && onLand != true) {
//             if(!islands[a[i]]) {
//                 islands[a[i]] = counter;
//             }
//             onLand = true;
//         }
//         // if onLnd false going to true and island[a[i]] = 1
//         if(counter === 0 && onLand ===true) {
//             counter++;
//             continue;
//         }
//         a[i];//?
//         onLand = false;
//     }
//     return Object.keys(islands).length;//?
//     // return counter;
// }

// DFS SOLUTION
// solution only works with 2d array which makes sense
function numIslands(grid) {
  if (grid.length === 0) return 0;
  const H = grid.length;
  // H = height = how many arrays are in the outer array
  const W = H && grid[0].length;
  // short circuit for double check??
  // W = width = first child's array length
  let count = 0;
  // count for how many islands

  for (let r = 0; r < H; r++) {
    // iterate per Height (r = row = y-axis)
    for (let c = 0; c < W; c++) {
      // iterate per width (c = column = x-axis)
      if (grid[r][c] === '0') continue;
      // if the element you're on contains a '0' then continue to the next W index
      count++;
      // when you land on a '1'
      // add to count
      dfs(r, c);
      // call dfs function with current position = grid[r][c] = that holds a '1'
      // ASSUMING: each dfs call handles 1 island
    }
  }
  return count;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r === H || c === W) return;
    // END CASE #1
    // if any are true
    // look at the order that they are in = with || ORs it matters
    // if r or c LESS THAN 0 OR r or c is equal to the ends of their iteration limits = return

    if (grid[r][c] === '0') return;
    // END CASE #2
    // the next element youve tested is water and you need to go back and recursively call from a different direction

    grid[r][c] = '0';
    // RE ASSIGN the element you've called dfs (either originally or recursively inside the dfs function) on to '0'
    // so it removes essentially the elements that you check so you ont check them again
    // keeps going in either direction until it hits the end of the arrays or outside
    // does

    // It doesnt matter if what you land on after the initial '1' or '0' call as its changed to a '0'
    dfs(r - 1, c);
    // recursively call one to left
    dfs(r + 1, c);
    // recursively call one to right
    dfs(r, c - 1);
    // recursively call one below
    dfs(r, c + 1);
    // recursively call one above
  }
}

// function numIslands(arr) {
//   //iterate through the 2d array to find the first occurence of a 1
//   // from the one go step by step
//   // recursive for when you need to backtracking
// }

// let arr = [0,0,0,1,1,1,0,1];
// let arr = [[0, 0, 0, 1, 1, 1, 0, 0]];

// let arr = [
//   ['1', '1', '1', '1', '0'],
//   ['1', '1', '0', '1', '0'],
//   ['1', '1', '0', '0', '0'],
//   ['0', '0', '0', '0', '0']
// ];
// // returns 1

let arr = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '1', '0']
];
// returns 2
numIslands(arr); //?
