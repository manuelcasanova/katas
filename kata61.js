// Kata: "Find the Missing Number"
// Problem Statement: You are given an array of n distinct numbers, taken from the range 0 to n. Since the array only contains n numbers, one number from this range is missing. Your task is to find the missing number in the array.



// Requirements:

// The function should run in O(n) time.
// It should use O(1) extra space, aside from the input array.
// Hints:

// You can think about using mathematical formulas (like the sum of an arithmetic progression).
// Alternatively, think about XOR properties (which could help cancel out numbers).

// function missingNumber(array) {


//   array.sort((a, b) => a - b)
//   for (n of array) {

//     if (array[n + 1] - 1 !== array[n]) {
//       return array[n] + 1
//     }

//   }
// }

// This solution works because it sorts the array and then checks for any gaps between consecutive numbers. The idea is that if the difference between two consecutive numbers is not exactly 1, then the current number plus 1 is the missing number. However, this solution doesn't comply with the requirements for two main reasons:

// Time Complexity: Sorting the array takes O(n log n) time, while the requirement specifies O(n) time. Sorting is slower than a linear scan, which violates the time complexity constraint.

// Space Complexity: While this solution doesn't use any extra data structures, sorting the array may modify the input. Even though sorting is in-place, it's still not considered to meet the O(1) extra space requirement, as manipulating the input array like this isn't acceptable in some scenarios.

// In summary, the solution's logic is correct, but it is inefficient for large inputs and doesn't meet the constraints set by the problem (linear time and constant extra space).


// Note by Manuel: Investigating the hint "think about using mathematical formulas (like the sum of an arithmetic progression)", I believe the shorted array would be an "arithmetic progression, or arithmetic sequence" with a "common difference" of 1. If an array has length 3. the sum of the three numbers from 0 to length would be 1 + 2 + 3 = 6. The actual sum of the array [0, 1, 3] would be 0 + 1 + 3 = 4. The difference would be two, the missing number. Code below:

function missingNumber(array) {

//   array = array.sort((a,b) => a - b)
// console.log(array)
  const n = array.length

  const sum = (n * (n + 1)) / 2; //works to calculate the sum of the numbers from 0 to length

  const actualSum = array.reduce((sum, num) => sum + num, 0)

  return sum - actualSum



}

// Example:

console.log(missingNumber([3, 0, 1]));        // Output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));  // Output: 8
console.log(missingNumber([0, 1]));            // Output: 2
console.log(missingNumber([0, 1, 2, 10]));            // Output: 3

// The reason you're getting -3 in the last example is because the input array does not contain a complete set of numbers from 0 to n. The Sum Formula approach assumes that the array contains exactly n numbers in the range 0 to n, with exactly one number missing.

// If your input array contains extra numbers, numbers outside the range 0 to n, or if a number appears more than once, this approach will give incorrect results. This is because the formula (n * (n + 1)) / 2 calculates the expected sum for exactly n consecutive integers, and any deviation from this assumption will lead to wrong calculations.

// For example, if your input array has more numbers or duplicates, the actualSum might exceed the expected sum (causing a negative result). If a number outside the 0 to n range is included, the difference between sum and actualSum won't correctly identify the missing number.

// How to fix it:
// Make sure that:

// The input array has exactly n elements.
// The numbers in the array are within the range 0 to n.
// There is exactly one missing number in the array.
// If these conditions are met, the formula will work as expected.

// To avoid errors in cases where input may be malformed (e.g., numbers outside the range or duplicates), you could add checks or validations before applying the formula.
// // 