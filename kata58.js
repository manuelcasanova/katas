// Kata: "Container with Most Water"
// Problem:
// You are given an array of positive integers where each integer represents the height of a vertical line drawn at the corresponding index. You want to find two lines, which together with the x-axis form a container that holds the most water.

// Return the maximum amount of water a container can store.

// Constraints:
// The array length will be at least 2.
// You may not slant the container, and the width between two lines is the difference in their indices.
// Approach:
// Use two pointers, one at the start and one at the end of the array.
// Calculate the area between these two lines.
// Move the pointer pointing to the shorter line towards the center, and repeat until the two pointers meet.


//I think I can use the two pointers technique

function maxArea(array) {
  let left = 0;
  let right = array.length - 1
  let maxArea = 0;

  while (left < right) {
    let width = right - left
    let height = Math.min(array[left], array[right])
    const area = width * height
    maxArea = Math.max(maxArea, area)
    if (array[left] < array[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49

// Explanation:

// The two lines are at indices 1 and 8 with heights 8 and 7. The width between these two lines is 7 (index 8 - index 1), so the area is min(8, 7) * 7 = 49.