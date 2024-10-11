// Kata: Majority Element
// Problem: Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(nums) {
  let n = nums.length
  let t = n / 2


  let frequency = {}

  for (n of nums) {
    if (frequency[n]) {
      frequency[n] += 1
    } else {
      frequency[n] = 1
    }
  }

  for (key in frequency) {
    if (frequency[key] > t) {
      return key
    }
  }


}


console.log(majorityElement([3, 2, 3]));
// Expected Output: 3

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// Expected Output: 2


// ANother solution

// Boyer-Moore Voting Algorithm (Optional Optimization):
// This algorithm solves the problem in O(n) time and O(1) space without using extra storage like the frequency object.

// The idea is:

// Candidate Selection: Iterate through the array and keep track of a potential majority element (candidate). You also maintain a count which tracks how frequently this candidate appears relative to other numbers.
// Verification: By the end of the array, the candidate is guaranteed to be the majority element.
// Here’s how it can be implemented:

function majorityElem(nums) {
  let candidate = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
}

// Example:
console.log(majorityElem([3,2,3]));  // Output: 3
console.log(majorityElem([2,2,1,1,1,2,2]));  // Output: 2

// This version uses constant space (except for the output) and solves the problem in linear time.

// Let me know if you want more explanation on the Boyer-Moore algorithm or if you’re happy with your current approach!