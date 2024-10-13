// Kata: Find the Single Number
// Problem: Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// You must implement a solution with O(n) time complexity and O(1) space complexity.


// function singleNumber(nums) {

// const set = new Set();

// for (n of nums) {
//   if (set.has(n)) {
//     set.delete(n)
//   } else {
//     set.add(n)
//   }
// }

// return set

// }

// Your approach is simple and ensures O(n) time complexity. However, it uses O(n) space because you need to store the numbers in the set.

function singleNumber(nums) {
  let xor = 0;

for (num of nums) {
  xor ^= num
}

return xor

}



// Examples:

console.log(singleNumber([2, 2, 1]));
// Output: 1

console.log(singleNumber([4, 1, 2, 1, 2]));
// Output: 4

console.log(singleNumber([1]));
// Output: 1
