// New Kata: Subarray Sum Equals K
// Problem:
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Objective:
// Implement a function that returns the number of subarrays whose sum equals k.
// Constraints:
// You need to find all the subarrays that sum to k, and they must be contiguous.
// The function should ideally run in O(n) time complexity.
// Hints/Ideas:
// A brute-force solution would check all possible subarrays, but that would be inefficient (O(n²)).
// Think about using a hash map to store the cumulative sum at each index. This can help in reducing the time complexity to O(n).

function subarraySum(array, integer) {
  let sum = 0
  let sumCount = {0: 1}
  let result = 0

  for (let n of array) {
    sum += n
    

// console.log("sum", sum, "here", sumCount[sum - integer])

    if (sumCount[sum - integer]) {
      result += sumCount[sum - integer];
    }

    sumCount[sum] = (sumCount[sum] || 0) + 1;

  }

  return {
    // sum, sumCount, 
    result}



}



// Example of the Hash Map Approach:

function subarraySum2(nums, k) {
  let cumulativeSum = 0;
  let sumCount = { 0: 1 }; // This accounts for the case where a subarray starts from index 0.
  let result = 0;

  for (let num of nums) {
    cumulativeSum += num;
    
    // If (cumulativeSum - k) exists in sumCount, it means we found a subarray that sums to k
    if (sumCount[cumulativeSum - k]) {
      result += sumCount[cumulativeSum - k];
    }

    // Update the sumCount map with the current cumulativeSum
    sumCount[cumulativeSum] = (sumCount[cumulativeSum] || 0) + 1;
  }

  return result;
}




console.log(subarraySum([1, 1, 1], 2));        // Output: 2
// Explanation: The subarrays that sum to 2 are [1, 1] (starting at index 0) and [1, 1] (starting at index 1).

console.log(subarraySum([1, 2, 3], 3));        // Output: 2
// Explanation: The subarrays that sum to 3 are [3] (at index 2) and [1, 2] (from index 0 to 1).

console.log(subarraySum([2, 3, 4], 7));        // Output: 1
// Explanation: The subarray that sums to 7 is [3, 4] (from index 1 to 2).

console.log(subarraySum([0, 0, 0, 0], 0));     // Output: 10
// Explanation: Multiple subarrays sum to 0, including single-element subarrays, two-element subarrays, and so on.

console.log(subarraySum([1, -1, 1, -1], 0));   // Output: 4
// Explanation: Subarrays that sum to 0 are [1, -1] (two times), [1, -1, 1, -1], and [-1, 1].

console.log(subarraySum([1, 2, 3, -2, 5], 6)); // Output: 2
// Explanation: Subarrays that sum to 6 are [1, 2, 3] and [3, -2, 5].



console.log(subarraySum2([1, 1, 1], 2)); 