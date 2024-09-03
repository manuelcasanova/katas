// Kata: Array Transformation
// Problem Statement:

// You are given an array of integers. Your task is to implement the following transformations on the array:

// Sum of Even Numbers: Calculate the sum of all even numbers in the array.
// Product of Odd Numbers: Calculate the product of all odd numbers in the array.
// Array Without Duplicates: Return a new array with all duplicate values removed.
// Sorted Array: Return a new array where the original array is sorted in ascending order.

function arrayTransformations(arr) {
  let evenNumbers = [];
  let oddNumbers = [];
  let noDuplicates = [];

  for (num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num)
    }
  }

  const initialValue = 0;

  // const sum = evenNumbers.reduce(
  //   (acc, currentValue) => acc + currentValue, initialValue
  // )

  const sum = evenNumbers.reduce(
    (sum, num) => sum + num, 0
  )

  for (num of arr) {
    if (num % 2 !== 0) {
      oddNumbers.push(num)
    }
  }

  const productOfOdds = oddNumbers.reduce(
    (product, num) => product * num, 1
  )

  for (num of arr) {
    if (!noDuplicates.includes(num)) {
      noDuplicates.push(num)
    }
  }

  const sortedArray = arr.sort((a, b) => a - b)


  return {
    sum,
    productOfOdds,
    noDuplicates,
    sortedArray
  }

}


// Output:

// An object with four properties:
// sumOfEvens: Sum of all even numbers in the array.
// productOfOdds: Product of all odd numbers in the array (if no odd numbers, return 1).
// arrayWithoutDuplicates: New array with duplicate values removed.
// sortedArray: New array sorted in ascending order.

const array = [3, 4, 4, 5, 5, 6, 7];
const array2 = [4, 4, 6];
const array3 = [3, 5, 5, 7];
const array4 = [3];
const array5 = [4, 4, 5, 5, 6, 6];
const array6 = [-3, -4, -4, 4, 5, 5, 6, 7];

console.log(arrayTransformations(array));
console.log(arrayTransformations(array2));
console.log(arrayTransformations(array3));
console.log(arrayTransformations(array4));
console.log(arrayTransformations(array5));
console.log(arrayTransformations(array6));



// console.log(result);
// Output should be:
// {
//   sumOfEvens: 14,          // 4 + 4 + 6 = 14
//   productOfOdds: 525,      // 3 * 5 * 5 * 7 = 525
//   arrayWithoutDuplicates: [3, 4, 5, 6, 7],
//   sortedArray: [3, 4, 4, 5, 5, 6, 7]
// }

// Constraints:

// Ensure that your function handles arrays with no odd or even numbers appropriately.
// Make sure to test your function with edge cases, such as arrays with only one element, arrays with all duplicates, and arrays with a mix of positive and negative numbers.