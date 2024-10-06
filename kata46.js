// Problem: Find the Intersection of Two Arrays
// Given two arrays nums1 and nums2, write a function to return an array that contains their intersection. Each element in the result must be unique, and you can return the result in any order.

// Instructions:
// Write a function intersection(nums1, nums2) that takes two arrays and returns their intersection.


// Approach Hints:
// Set: Use JavaScript’s Set to handle unique values. Convert both arrays into sets, then find the common elements between them.
// Filter: Alternatively, you could use the filter method on one array to find the elements that exist in the other array, ensuring uniqueness.

//approach 1

// function intersection(array, array2) {
  
// const uniqueArray1 = new Set(array);
// const uniqueArray2 = new Set(array2);

// const common = []

// for (num of uniqueArray1) {
//   for (num2 of uniqueArray2) {
//     if (num === num2) {
//       common.push(num)
//     }
//   }
// }

// return common

// }

// approach 2

function intersection(array, array2) {

const common = array.filter((num) => array2.includes(num))

const unique = [...new Set(common)]

return unique;


}

console.log(intersection([1, 2, 2, 1], [2, 2]));     // Output: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]
