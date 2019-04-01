// given num, set for loop iteration to n+1
// if i % 3 === 0 return 'Fizz'
// if i % 5 === 0 return 'Buzz'
// if i % 15 === 0 return 'FizzBuzz'

function fizzBuzz(num) {
  //   // VER.1 Naive
  //   let arr = [];
  //   for (let i = 1; i <= num; i++) {
  //     if (i % 15 === 0) {
  //       arr.push('FizzBuzz');
  //       continue;
  //     }
  //     if (i % 5 === 0) {
  //       arr.push('Buzz');
  //       continue;
  //     }
  //     if (i % 3 === 0) {
  //       arr.push('Fizz');
  //       continue;
  //     }
  //     arr.push(`${i}`);
  //   }
  //   return arr;
  // VER.2
  // NOTES
  // reduces the condition amount in case you add a new condition as in 3,5,15 and 7
  // because now you are checking 3,5,7,3*5,3*7,etc
  // the amount of conditions you check for grows exponentially
  // so you dont check the 3*5 like combination just 3,5,7 and per the condition being truthful you concatenate a string
  // ERRORS
  // i accidentally made it num % 3/5 instead of i
  // i needed to put the booleans inside the for loop for them to recalulate
  //   let arr = [];
  //   let str = '';
  //   for (let i = 1; i <= num; i++) {
  //     let divBy3 = i % 3 === 0 ? true : false;
  //     let divBy5 = i % 5 === 0 ? true : false;
  //     if (divBy3) {
  //       str += 'Fizz';
  //     }
  //     if (divBy5) {
  //       str += 'Buzz';
  //     }
  //     if (str.length === 0) {
  //       str += i.toString();
  //     }
  //     arr.push(str);
  //     str = '';
  //   }
  //   return arr;
  // VER.3
  // hash it
  // if the interviewer tries to introduce too many mappings
  // having a condition for every mapping is not feasible
  // SOLUTION
  // put mappings in a hash table

  // ERRORS
  // in the inner loop i was comparing the i % fbHash[key]
  // -- which equalled the value fizz or buzz not the numerical key value to modulous the value of i to
  // i put the if str.length === 0 in the inner loop which was not the best place to put it as it would add numbers to string that simply werent tested against all tests yet
  // -- so i needed to put it outside in order to "wait and see" if after checking i against all values/keys in the hash if there werent any matches yet

  let fbHash = {
    3: 'Fizz',
    5: 'Buzz'
  };
  let arr = [];
  let str = '';
  for (let i = 1; i <= num; i++) {
    // iterate per given num starting at 1 (per question)
    for (let key in fbHash) {
      // iterate per items in hash
      if (i % key === 0) {
        str += fbHash[key];
      }
    }
    if (str.length === 0) {
      str += `${i}`;
    }
    // push built str into array
    arr.push(str);
    // reset string
    str = '';
  }
  return arr;
}

export default fizzBuzz;
