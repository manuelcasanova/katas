// Kata: "Longest Subsequence with Unique Elements"
// Problem Statement
// You are given an array of integers. Your task is to find the length of the longest subsequence where all elements are unique.

// A subsequence can be derived by removing some or none of the elements from the array without changing the order of the remaining elements.

// Function Signature

// function longestUniqueSubsequence(arr: number[]): number
function longestUniqueSubsequence (array) {
  let uniqueArray = []
  array.map(n => {
    if (!uniqueArray.includes(n)) {
      uniqueArray.push(n);
    }
  });
  console.log(uniqueArray.length)
}


// Example 1
longestUniqueSubsequence([1, 2, 3, 4, 5]);
// Output: 5
// Explanation: The entire array has unique elements, so the length of the longest subsequence with unique elements is 5.

// Example 2
longestUniqueSubsequence([1, 2, 2, 3, 4, 4, 5]);
// Output: 5
// Explanation: The longest unique subsequence is [1, 2, 3, 4, 5], so the length is 5.

// Example 3
longestUniqueSubsequence([1, 1, 1, 1, 1]);
// Output: 1
// Explanation: The only unique element is 1, so the length of the longest subsequence with unique elements is 1.

// Example 4
longestUniqueSubsequence([4, 1, 3, 3, 5, 1, 6]);
// Output: 5
// Explanation: The longest unique subsequence is [4, 1, 3, 5, 6], so the length is 5.


longestUniqueSubsequence([-1, -1, -4, 5]);

// Constraints
// The array can contain both positive and negative integers.
// The array length will be between 0 and 10^5.
// The integers in the array will be between -10^5 and 10^5.
// Notes
// The goal is to find the longest subsequence where all elements are unique.
// Efficient solutions are preferred given the constraints.

