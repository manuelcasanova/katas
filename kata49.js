// Kata: Find All Duplicates in an Array
// Problem: Given an integer array nums where each integer appears once or twice, return an array of all the integers that appear twice. You must write an algorithm that runs in O(n) time and uses only constant extra space (excluding the output array).


function findDuplicates(nums) {

const count = {}
let duplicates = []

for (n of nums) {
  if (count[n]) {
    count[n] += 1
  } else {
    count[n] = 1
  }
}

for (key in count) {
  if (count[key] > 1) {
    duplicates.push(key)
  }
}

return duplicates

}

// Your current solution using the count object doesn't fully meet the requirement of constant extra space because you're using an additional object (count) to store the frequency of each number. This means that your solution uses O(n) extra space, which exceeds the required O(1) space complexity.

// Efficient Approach — In-Place Modification:
// Here’s how you can achieve O(1) space using in-place marking:

// Use the index of the array to track frequencies:

// The problem constraints say that each number is between 1 and n (where n is the length of the array). You can leverage this by treating each number as an index and modifying the array in place to track visited elements.
// Mark the array elements:

// As you loop through the array, for each number you encounter, mark the element at the corresponding index as negative. If you encounter a number whose corresponding index is already negative, you know that number is a duplicate.
// Code for the In-Place Marking Approach:
// js
// Copiar código
// function findDuplicates(nums) {
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     const index = Math.abs(nums[i]) - 1;  // Get the index corresponding to the value

//     if (nums[index] < 0) {
//       // If the number is already negative, it means it's a duplicate
//       result.push(Math.abs(nums[i]));
//     } else {
//       // Mark the number as visited by negating it
//       nums[index] = -nums[index];
//     }
//   }

//   return result;
// }
// Explanation:
// Marking Numbers: By negating the number at the index corresponding to the current number, you can track whether you've seen that number before.
// Checking for Duplicates: If you come across a number whose corresponding index is already negative, you know it's a duplicate.
// Why This Works:
// Time Complexity: This solution still runs in O(n) because you're only iterating through the array once.
// Space Complexity: This solution uses O(1) space because you're modifying the input array in place rather than using an additional data structure (excluding the output array).
// This approach fully meets the requirement of O(n) time and O(1) space

console.log(findDuplicates([4,3,2,7,8,2,3,1])) // 2, 3

