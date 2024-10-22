// Kata: Find the Elements That Appear More Than N/3 Times
// Given an integer array nums, return all the elements that appear more than n/3 times, where n is the size of the array.

// Task:
// Find all the elements that occur more than n / 3 times in the array.
// There can be multiple valid answers.
// Plan (No code):
// Step 1: Count the frequency of each element using an object or map.
// Step 2: Iterate through the object and collect elements that have a count greater than n / 3.
// Step 3: Return the array of elements that meet the criteria.

// Example:

console.log(findMajorityElements([3, 2, 3]));      // Output: [3]
console.log(findMajorityElements([1, 1, 1, 3, 3, 2, 2, 2]));  // Output: [1, 2]
console.log(findMajorityElements([1, 2]));         // Output: [1, 2]

