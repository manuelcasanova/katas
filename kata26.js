// Kata: Rotate Array
// Problem Description
// You are given an array of integers and a number k. Your task is to write a function called rotateArray that rotates the array to the right by k positions.

// For example, if the array is [1, 2, 3, 4, 5] and k is 2, the array after rotation should be [4, 5, 1, 2, 3].

function rotateArray(array, k) {


if (!array.length) return array
if (k === 0) return array

k = k % array.length //in case k is larger than array.length. For example, in an array of 5 items, k = 7 === k = 2

// console.log(k)

//divide the array in two parts, by index
// arr1 = array.slice(k + 1)
// arr2 = array.slice(0, k + 1)


//Chatgpt correction:
let arr1 = array.slice(-k);  // Last k elements
let arr2 = array.slice(0, -k);  // Elements before the last k elements

// Issues with Original Code:
// array.slice(k + 1) gets elements starting from index k + 1 to the end, which is not what you want for rotating the array.
// array.slice(0, k + 1) gets elements from the start of the array up to index k + 1, which is not the correct split for rotation.
// Correct Slicing Approach:
// For rotating the array to the right by k positions:

// First Part: The last k elements of the array.
// Second Part: The elements from the start of the array up to the position where the last k elements start.


return arr1.concat(arr2)


}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
// returns [4, 5, 1, 2, 3]

console.log(rotateArray([1, 2, 3, 4, 5], 7));
// returns [4, 5, 1, 2, 3]  // since rotating by 7 is equivalent to rotating by 2

console.log(rotateArray([1, 2, 3, 4, 5], 0));
// returns [1, 2, 3, 4, 5]  // no rotation needed

console.log(rotateArray([], 3));
// returns []  // empty array remains empty
