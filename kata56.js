// New Kata: Minimum Size Subarray Sum
// Problem:
// Given an array of positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum is greater than or equal to s. If there isn't one, return 0 instead.

// Objective:
// Write a function that returns the minimal length of a subarray that meets the sum s or returns 0 if no such subarray exists.
// Constraints:
// The function should have an efficient time complexity. A brute-force O(n²) solution is possible but not ideal.
// Hints/Ideas:
// Consider using the sliding window technique to efficiently find the minimal subarray that satisfies the sum condition.
// Iterate over the array while adjusting the window size (start and end) to minimize the subarray length that meets the sum condition.

function minSubArrayLen(n, array) {

//the minLength could be inifinity, because there's an infiniti number of possibilities, including decimals, to add to n
let minLength = Infinity;
//sliding window technique start, position 0 for left and right
let left = 0;
let right = 0;
let sum = 0;
//the sum of the numbers in the subarray, will be modified. for example in array [1, 2, 3], it will be 1 when left and right are 0, it will be 3 when left 0 and right 1.


//loop the array and while the right window, that will be used as an index of the array, is less than the array of the lenght, modify the sum. at the beginning, the sum is 0, on the first loop it will be array[right], which in the case of array [1, 2, 3], would be 1.

while (right < array.length) {
  sum += array[right];


  // we check if the sum is greater than the n, the target. If that is the case we modify the minimum length. the minimum length is the minimum number when we compare minLength, which is infinity to start, with the right of the window minus the left, plus one. I don't understand this part very well. REVIEW.

  // Then, the sum becomes sum minus the number at array[position left]

  //We move the left window up, one at a time

  while (sum >= n) {
    minLength = Math.min(minLength, right - left + 1);
    sum -= array[left];
    left++;
  }

//move the right window up, one at a time

right++

}

//if the minLength resulting of the previous operations is not infinite, that's the result, otherwise, we return 0, as no subarray sums more than n, target.

return isFinite(minLength) ? minLength : 0;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));  // Output: 2
// Explanation: The subarray [4, 3] has the minimal length under the problem constraints.

console.log(minSubArrayLen(4, [1, 4, 4]));  // Output: 1
// Explanation: The subarray [4] is already greater than or equal to 4.

console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));  // Output: 0
// Explanation: No subarray sums to 11 or more.

// Your understanding of the solution is mostly correct, and you are close to fully grasping the concept. Let me clarify the important parts and provide a bit more detail to make it clearer.

// Step-by-Step Breakdown:
// 1. Initial Setup (minLength = Infinity)
// js
// Copiar código
// let minLength = Infinity;
// You initialize minLength as Infinity because you're looking for the smallest subarray. Infinity is the maximum value possible, and as soon as you find a subarray with a sum greater than or equal to n, you'll replace this with a real subarray length.
// There are not an infinite number of possibilities here (since the array is finite), but you're just using Infinity to ensure that any valid subarray length will be smaller and thus update this value.
// 2. Sliding Window Setup
// js
// Copiar código
// let left = 0;
// let right = 0;
// let sum = 0;
// left and right are pointers representing the start and end of the window. Initially, both are at index 0, so your window starts with just one element.
// sum is the cumulative sum of the numbers within the current window (from left to right).
// 3. Outer while Loop (Expanding the Window)
// js
// Copiar código
// while (right < array.length) {
//   sum += array[right];
// The outer loop iterates while right is less than the length of the array. You're increasing the window's size by moving right and adding array[right] to sum.
// The purpose of this loop is to "grow" the window by expanding it to the right.
// 4. Inner while Loop (Shrinking the Window)
// js
// Copiar código
// while (sum >= n) {
//   minLength = Math.min(minLength, right - left + 1);
//   sum -= array[left];
//   left++;
// }
// When the sum of the current window (from left to right) becomes greater than or equal to the target n, you check if the current window is the smallest one you've found so far by comparing minLength with the length of the current window (right - left + 1).
// After that, you shrink the window from the left by subtracting array[left] from sum and moving left to the right (left++).
// This part is key: you want to find the smallest possible window that satisfies the condition, so after finding one valid window, you check if you can shrink it and still maintain a valid sum.
// Clarification of This Part:
// js
// Copiar código
// minLength = Math.min(minLength, right - left + 1);
// You're comparing the current minLength (which starts as Infinity) with the size of the current window (right - left + 1).
// The size of the current window is calculated as right - left + 1 because:
// right is the index of the current element.
// left is the index of the first element in the current window.
// You add 1 because the window length includes both left and right (inclusive).
// For example:

// If left = 0 and right = 3, the subarray includes the elements at indexes 0, 1, 2, and 3, so its length is right - left + 1 = 4.
// 5. Moving the right Pointer
// js
// Copiar código
// right++;
// After processing the current window, you expand it further by moving right to the right.
// 6. Return the Result
// js
// Copiar código
// return isFinite(minLength) ? minLength : 0;
// If minLength has been updated from Infinity, you return it because it represents the smallest valid subarray length.
// If no valid subarray was found (meaning minLength is still Infinity), you return 0.
// Key Takeaways:
// The outer while loop expands the window by moving right and growing the sum.
// The inner while loop shrinks the window by moving left when the sum becomes greater than or equal to n, ensuring you get the smallest possible subarray.
// The Math.min() function ensures that you keep track of the smallest valid subarray length.
// The technique ensures an O(n) time complexity since both left and right pointers only move in one direction and each element is processed at most twice (once when expanding the window and once when shrinking it).
// Small Correction:
// In your analysis, you said:

// "the minLength could be infinity, because there's an infinity number of possibilities, including decimals, to add to n."

// This part is slightly off. Decimals are not part of the issue here since we're only working with integers. You use Infinity simply to make sure the first valid subarray will replace it.

// Conclusion:
// Your understanding is almost correct! The only part that needed more clarity was the use of Math.min(minLength, right - left + 1), which calculates the current subarray length. Let me know if you'd like more clarification!