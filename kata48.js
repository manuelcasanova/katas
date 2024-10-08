// Kata: Maximum Consecutive Ones
// Problem: You are given a binary array (an array consisting of only 0s and 1s). Your task is to find the maximum number of consecutive 1s in the array.



function findMaxConsecutiveOnes(nums) {

  let maxCount = 0;
  let currentCount = 0;

  for (n of nums) {
    if (n === 1) {
      currentCount += 1
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount
      }
      currentCount = 0
    }

  }

  if (currentCount > maxCount) {
    maxCount = currentCount
  }

  return maxCount

}


console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))