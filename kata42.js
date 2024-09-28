// Problem: Move Zeroes

// Given an array nums, write a function to move all 0s to the end of it while maintaining the relative order of the non-zero elements. You must do this in-place without making a copy of the array.
// Instructions:

// Write a function moveZeroes(nums) that takes an array nums and moves all the zeroes to the end while keeping the order of non-zero elements.

function moveZeroes(nums) {

  let removedZeros = 0

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      
      nums.splice(i, 1)
     i-- //length of array is -1 when removing a zero
     removedZeros++
      
    }
  }

while (removedZeros > 0) {
  nums.push(0)
  removedZeros--
}

  return nums
}


// Approach Hints:

//     Two-Pointer Approach: You can use two pointers to efficiently solve this in a single pass. One pointer keeps track of where the next non-zero element should go, and the other pointer iterates over the array.
//     In-Place Operation: Ensure that you're modifying the input array directly.

// Corrected Version with Two-Pointer Technique:

function moveZeroes(nums) {
  let j = 0; // pointer to track the next non-zero element's position

  // First pass: Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  // Second pass: Fill the rest of the array with zeroes
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums; // modified in-place
}
// Explanation:

//     First Loop: You loop through the array and move non-zero elements to the front by assigning them to nums[j] and then increment j each time.
//     Second Loop: Once all non-zero elements are moved to the front, the remaining elements from j to the end of the array are set to 0.

console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
console.log(moveZeroes([0, 0, 1]));        // Output: [1, 0, 0]

