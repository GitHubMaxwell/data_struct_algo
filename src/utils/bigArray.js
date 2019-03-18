export default function(arrSize, missing) {
  let bigArray = [];
  for (let i = 0; i < arrSize; i++) {
    if (i === missing) continue; // missing number
    bigArray.push(i);
  }
  return bigArray;
}
