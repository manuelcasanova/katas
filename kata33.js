// Kata: Find the Missing Number
// Problem Statement
// You are given an array containing n distinct numbers taken from 0 to n. The array is missing exactly one number from this range. Your task is to find the missing number.

// Implement the function findMissingNumber that takes an array of integers as input and returns the missing number.

// Function Signature



// function findMissingNumber(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i + 1] - 1 !== arr[i]) {
//       return arr[i] + 1
//     }
//   }
// }

// My solution assumes the array is sorted, but won't work if it's not. So, I should sort it first.


function findMissingNumber(arr) {
  arr.sort((a,b) => a - b)
  for (i = 0; i < arr.length; i++) {
    if (arr[i + 1] - 1 !== arr[i]) {
      return arr[i] + 1
    }
  }
}

// Considerations CHATGPT
// Time Complexity: The sorting operation has a time complexity of O(n log n), and the iteration through the array is O(n). So the overall time complexity is dominated by the sorting step, i.e., O(n log n).
// Space Complexity: The space complexity is O(1) as we are only using a constant amount of extra space (apart from the input array).
// This method works well but is not as efficient as the O(n) solution that uses the sum formula. If you need a more efficient solution (O(n) time complexity with O(1) space complexity), consider using the sum-based approach I shared earlier:

function findMissingNumber(arr) {
  const n = arr.length;
  
  // Sum of numbers from 0 to n
  const expectedSum = (n * (n + 1)) / 2;
  
  // Sum of numbers in the array
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
  // The missing number is the difference
  return expectedSum - actualSum;
}

// Example usage
const inputArray = [0, 1, 3];
console.log(findMissingNumber(inputArray)); // Output: 2



console.log(findMissingNumber([0, 1, 2, 3, 13, 5, 6, 7, 8, 9, 10, 11, 4]))






