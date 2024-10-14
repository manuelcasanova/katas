// Kata: "Longest Consecutive Sequence"
// Problem Statement:
// Given an unsorted array of integers, find the length of the longest consecutive sequence of numbers in the array. Your algorithm should run in O(n) time.

// Example:

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive sequence is [1, 2, 3, 4]. Therefore, the length is 4.

// Constraints:
// The algorithm should run in O(n) time.
// Can you do it without sorting the array?


function longestConsecutiveSequence(array) {

  const set = new Set(array)

  let longestStreak = 0

  for (i of array) {
    if (!set.has(i - 1)) {
      let currentNum = i
      currentStreak = 1

      while (set.has(currentNum + 1)) {
        currentNum += 1
        currentStreak += 1
      }

      longestStreak = Math.max(longestStreak, currentStreak)

    }


  }

  return longestStreak


}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]))