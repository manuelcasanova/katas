// Kata: Longest Subarray with Distinct Elements

// Problem Statement:
// Given an array of integers, find the length of the longest subarray where all the elements are distinct.

// Input:
// arr (Array<number>): An array of integers where 1 <= arr.length <= 10^5 and -10^9 <= arr[i] <= 10^9.
// Output:
// Returns a number representing the length of the longest subarray with all distinct elements.

function longestDistinctSubarray(arr) {

  //first subarray, two elements
  const base = 2;
  let subarray = []

  //length of the first subarray without duplicates

  for (let index = 0; index < base; index++) {
    if (!subarray.includes(arr[index])) {
      subarray.push(arr[index])
    }
  }

  //Apply sliding windown technique


  return subarray.length

}



console.log(longestDistinctSubarray([1, 2, 3, 4, 5, 3, 2, 1]))
// Output: 5 Explanation: The longest subarray with all distinct elements is [1, 2, 3, 4, 5].


console.log(longestDistinctSubarray([1, 2, 3, 4, 5, 5, 5, 7, 8, 9, 10, 11, 12]))

console.log(longestDistinctSubarray([1, 1, 1, 1, 1]))
// Output: 1 Explanation: The longest subarray with all distinct elements is [1].

// Notes:
// Utilize the sliding window technique to keep track of the current subarray.
// Use a set to maintain distinct elements and their indices.
// Consider edge cases with small arrays or arrays with repeating elements.