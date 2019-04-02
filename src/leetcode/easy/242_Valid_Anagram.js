// given two strings, return boolean if they are anagrams

// ASSUMPTIONS
// only lowercase chars

// ALGO
// iterate over string s and t and build hash
// if all key values are even % 2 === 0
// then they are anagrams
// return true

// VER.1 incomplete
// trying to get to has maps and compare

// function isAnagram(s, t) {
//   if (s.length != t.length) return false;
//   let hash = {};
//   let hash2 = {};
//   for (let i = 0; i < s.length; i++) {
//     if (hash[s[i]]) {
//       hash[s[i]]++;
//     } else {
//       hash[s[i]] = 1;
//     }
//     // if (hash[t[i]]) {
//     //   hash[t[i]]++;
//     // } else {
//     //   hash[t[i]] = 1;
//     // }
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (hash2[t[i]]) {
//       hash2[t[i]]++;
//     } else {
//       hash2[t[i]] = 1;
//     }
//   }
//   //   for (let key in hash) {
//   //     if (hash[key] % 2 !== 0) return false;
//   //   }
//   hash2; //?
//   hash; //?
//   // if all values in hash map are even
//   return true;
// }

// VER.2
// per character from s delete from t turned into an array until
// my solution is 843ms
// function isAnagram(s, t) {
//   // iterate over one string and see if the other has the same value - indexOf
//   // if it does - remove the letter from both
//   // - if it doesnt return false
//   if (s.length != t.length) return false;
//   let newT = t.split('');
//   let i = 0;
//   while (newT.length !== 0) {
//     if (newT.indexOf(s[i]) === -1) {
//       return false;
//     }
//     newT.splice(newT.indexOf(s[i]), 1);
//     i++;
//   }
//   return true;
// }

// VER.3 76ms (vs my previous VER.2 843ms)
// hash table build and then erase
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]]++;
    } else {
      hash[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]]) {
      hash[t[i]]--;
      if (hash[t[i]] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

// VER.2 hash table
// Do we need two counter tables for comparison? Actually no, because we could increment the counter for each letter in ss and decrement the counter for each letter in tt, then check if the counter reaches back to zero.
// build it up and then delete the values

export default isAnagram;
