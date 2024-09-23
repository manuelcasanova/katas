// Problem: Maximum Product of Three Numbers
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// For example:

// Input: [1, 2, 3]

// Output: 6 (since 1 * 2 * 3 = 6)

// Input: [-10, -10, 5, 2]

// Output: 500 (since -10 * -10 * 5 = 500)

// Instructions:
// Write a function maximumProduct(nums) that returns the maximum product of three numbers from the array.

// function maximumProduct(nums) {
//   nums.sort()

//   if (nums.length >= 3) {

//     if (nums.some(n => n < 0)) {


//       return "negative"




//     } else {
//       let sliced = nums.slice(-3)

//       let produce = nums.reduce((prod, num) => prod * num, 1); 

// return produce

//     }
//   }
//   return "not valid"
// }


function maximumProduct(nums) {
  nums.sort((a, b) => a - b)

  if (nums.length >= 3) {



    let produceWnegatives = nums[0] * nums[1] * nums[nums.length - 1]


    let productNoNegatives = nums.slice(-3).reduce((prod, num) => prod * num, 1);


    return produceWnegatives >= productNoNegatives ? produceWnegatives : productNoNegatives


  }

  return "Array has less than three numbers"

}








console.log(maximumProduct([1, 2]));            // Output: -1
console.log(maximumProduct([1, 2, 3]));            // Output: 6
console.log(maximumProduct([-10, -10, 5, 2]));     // Output: 500
console.log(maximumProduct([1, 2, 3, 4]));     // Output: 24
