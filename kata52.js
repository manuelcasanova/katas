// Kata: Find All Duplicates in an Array
// Problem: Given an array of integers, where 1 ≤ a[i] ≤ n (n is the size of the array), some elements appear twice and others appear once. Find all the elements that appear twice in this array.

// You must solve this problem without using extra space (besides the output array) and in O(n) runtime.

// Constraints:
// Your algorithm should ideally run in O(n) time and use O(1) extra space, excluding the output array.

// function findDuplicates(array) {

//   let count = {}
//   let duplicates = []

//   for (n of array) {
//     if (count[n]) {
//       count[n] += 1
//     } else {
//       count[n] = 1
//     }
//   }

// for (key in count) {
//   if (count[key] > 1) {
//     duplicates.push(key)
//   }
// }

// return duplicates

// }

// Your solution works, but it uses a hash map (object) to store the counts, which means it takes O(n) extra space for the count object. The challenge of the kata is to solve it without using extra space (besides the output array) and in O(n) time.

// Key Idea:
// Since the values in the array are in the range 1 ≤ a[i] ≤ n, where n is the size of the array, we can mark elements by modifying the input array itself to track duplicates.

// Approach:
// Iterate through the array.
// For each number x you encounter, mark the position x-1 as negative. This means "we’ve seen this number before."
// If a position is already negative when you visit it again, it means that the number has appeared more than once.
// This avoids using additional space besides the output array.

function findDuplicates(array) {
  let duplicates = []
  for (x of array) {
    let absolute_x = Math.abs(x)
    if (array[absolute_x - 1] < 0) {
      duplicates.push(absolute_x)
    } else {
      array[absolute_x - 1] = -Math.abs(array[absolute_x - 1]);
    }

  }

  return duplicates

}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
// Output: [2, 3]

console.log(findDuplicates([1, 1, 2]));
// Output: [1]

console.log(findDuplicates([1]));
// Output: []
