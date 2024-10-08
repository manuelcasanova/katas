// Problem: Find the Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], find the one number that is missing from the array.

// Instructions:
// Write a function findMissingNumber(nums) that takes an array nums and returns the missing number from the range.

//SUM FORMULAR APPROACH

// function findMissingNumber (array) {

//   const n = array.length;
//   const sum = (n * (n + 1)) / 2
//   const actualSum = array.reduce((sum, num) => sum + num, 0); 
//   const missingNumber = sum - actualSum
  
// return missingNumber

// }

//XOR APPROACH

function findMissingNumber (array) {

  let xorAll = 0; // XOR for all numbers from 0 to n
  let xorNums = 0; // XOR for all numbers in the array
  const n = array.length;

    // XOR all numbers from 0 to n
    for (let i = 0; i <= n; i++) {
      xorAll ^= i;
    }
  
    // XOR all numbers in the array
    for (let num of array) {
      xorNums ^= num;
    }
  
// return {xorAll, xorNums}

    // XOR the results of both to get the missing number
     return xorAll ^ xorNums;


}


// Example:

console.log(findMissingNumber([3, 0, 1]));    // Output: 2
console.log(findMissingNumber([9,6,4,2,3,5,7,0,1])); // Output: 8
console.log(findMissingNumber([0, 1]));       // Output: 2

// Approach Hints:
// Sum Formula: You can calculate the expected sum of the numbers in the range [0, n] using the formula for the sum of the first n natural numbers:

// sum
// =
// 𝑛(𝑛+1) /
// 2

 
// Subtract the sum of the elements in the array from this expected sum to find the missing number.

// XOR Approach: Another clever way to solve this is by using the XOR operator (^). XORing all the numbers from 0 to n with the numbers in the array will cancel out all the duplicates, leaving the missing number.