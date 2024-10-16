// Kata: Find the First Missing Positive
// Problem:
// Given an unsorted integer array, find the smallest missing positive integer.



// Objective:
// Implement a function that runs in O(n) time and uses constant extra space (O(1)).
// Constraints:
// Your algorithm should focus on both time efficiency (O(n)) and space efficiency (O(1)).
// Hints/Ideas:
// Think of rearranging the elements in place so that the value of each element corresponds to its index.
// Use the fact that the first missing positive number must be in the range [1, n + 1], where n is the length of the array.

function firstMissingPositive(array) {

  const positive = array.filter((n) => n > 0).sort((a, b) => a - b)

  if (positive[0] !== 1) return 1
  if (positive.length === 0) return 1

    for (i = 0; i < positive.length; i++) {
      if (positive[i + 1] - 1 !== positive[i]) {
        return positive[i] + 1
      }
    }

}


console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Output: 1
console.log(firstMissingPositive([1, 2, 0]));         // Output: 3
console.log(firstMissingPositive([3, 4, -1, 1]));     // Output: 2
console.log(firstMissingPositive([1, 2, 3]));         // Output: 4



