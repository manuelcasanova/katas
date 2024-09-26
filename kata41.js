// Problem: Sum of Two Numbers
// You are given an array of integers and a target number. Write a function that returns the indices of the two numbers in the array that add up to the target.

// Instructions:
// Write a function twoSum(nums, target) that takes an array nums and a number target and returns an array containing the indices of the two numbers that add up to target.


// function twoSum(nums, target) {
//   let hashMap = {}

  // for (num of nums) {
  //     hashMap[num] = nums.indexOf(num)
  // } 
  //The problem with this is that only gets the index of the first ocurrance, so if the array is [3, 3] only gets index 0, but not 1

  //to fix:

  // for (num of nums) {

  //   const indexes = []

  //   let index = nums.indexOf(num)
  //   while (index !== -1) {
  //     indexes.push(index)
  //     index = nums.indexOf(num, index + 1)
  //   }

  //   return indexes

  // }

  //but in the above case it only take the ones that are repeated, opposite as before. So, how to account for both cases?


  // return hashMap

// }
function twoSum(nums, target) {
  const hashMap = {}; 

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // console.log(complement)
  
    if (complement in hashMap) {
      return [hashMap[complement], i];
    }

    hashMap[nums[i]] = i; // Store the current number and its index in the hashMap / object

    // console.log(hashMap)

  }

  return null; // If no solution is found
}


// Example:

console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1]  (because 2 + 7 = 9)

console.log(twoSum([3, 2, 4], 6));
// Output: [1, 2]  (because 2 + 4 = 6)

console.log(twoSum([3, 3], 6));
// Output: [0, 1]  (because 3 + 3 = 6)


// Approach Hints:
// Hash Map for Fast Lookup: You can use a hash map (object) to store each number's index as you iterate through the array.
// Find Complement: For each number num, check if target - num exists in the hash map. If it does, return the indices.