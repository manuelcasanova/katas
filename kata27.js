// Kata: Array Transformation
// Problem
// You are given an array of integers. Your task is to implement a function transformArray that performs the following operations:

// Filter: Remove all negative numbers from the array.
// Square: Square each remaining number in the array.
// Sort: Sort the array in ascending order.
// Sum: Return the sum of the elements in the transformed array.

function transformArray(arr) {

return arr = arr.filter((x) => x >= 0)

.map((x) => x * x)

.sort((a, b) => a - b)

.reduce((acc, num) => acc + num, 0);


}

console.log(transformArray([1, -2, 3, -4, 5]));
// Output: 35


console.log(transformArray([1, -2, 7, -4, 5]));
// Output: 75


