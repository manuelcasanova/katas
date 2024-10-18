// Kata: Product of Array Except Self
// Problem:
// Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Constraints:
// You must write an algorithm that runs in O(n) time and uses only constant space (output array does not count as extra space).
// Guidelines:
// You should avoid using division to calculate the product.

function productExceptSelf(array) {

  let outputArray = new Array(array.length).fill(1);
  let leftProduce = 1;
  let rightProduce = 1;

  for (let i = 0; i < array.length; i++) {
    outputArray[i] = leftProduce

    leftProduce *= array[i]
  }

  for (let i = array.length - 1; i >= 0; i--) {
    outputArray[i] *= rightProduce
    rightProduce *= array[i]
  }

  return outputArray


}

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([2, 3, 4, 5])); // Output: [60, 40, 30, 24]
