// Kata: Array Balance
// Problem Description
// You are given an array of integers. Your task is to implement a function findBalanceIndex that finds the index in the array where the sum of the elements to the left of that index is equal to the sum of the elements to the right of that index. If such an index exists, return it. If no such index exists, return -1.

function findBalanceIndex(array) {

  const length = array.length
  let left = []
  let right = []

  for (let index = 0; index < length; index++) {

    left = array.slice(0, index)
    right = array.slice(index + 1)

   

    const sumLeft = left.reduce((acc, num) => acc + num, 0);
    const sumRight = right.reduce((acc, num) => acc + num, 0);

    if (sumLeft === sumRight) {
    return index
    }
  }

  return -1

}

// At first, I was trying this:

// if (sumLeft === sumRight) {
//   return index;
// } else {
//   return -1;
// }

// but it returns -1 because it returns after the first loop.

console.log(findBalanceIndex([1, 2, 3, 4, 6]));  // Output: 3
console.log(findBalanceIndex([1, 2, 3, 4, 5]));  // Output: -1
console.log(findBalanceIndex([10, 5, 2, 3, 1, 7, 1]));  // Output: -1
console.log(findBalanceIndex([27, 27, 1, 29, 25]));  // Output: 2
