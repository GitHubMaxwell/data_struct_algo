// QUESTION
// given string S = phone number
// reformat S
// contains digits, spaces, dashes
// ignore all but numbers
// give back number in blocks of 3 separated by dashes
// if theres a lone number at the end make it XX-XX instead of XXX-X

function gemma(S) {
  let regex = /[0-9]/g;
  let matched = S.match(regex);
  let newStr = '';

  for (let i = 0; i < matched.length; i++) {
    if (newStr.length !== 0 && (i + 1) % 3 === 0 && i !== matched.length - 1) {
      newStr = newStr + matched[i] + '-';
      continue;
    }
    newStr = newStr + matched[i];
  }
  // go back through number and if theres a dash before the last number
  // if newStr[newStr.length - 2] === '-';

  // 022-198-532-4
  let newArr = newStr.split('');

  if (newArr[newArr.length - 2] === '-') {
    let temp = newArr[newArr.length - 3];
    newArr[newArr.length - 3] = newArr[newArr.length - 2];
    newArr[newArr.length - 2] = temp;
  }
  let string = newArr.join('');
  string.toString();

  return string;
}

export default gemma;
