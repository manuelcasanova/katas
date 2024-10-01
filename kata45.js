// Problem: Find the Longest series of numbers without a repeating number
// Given a group of numbers, find the length of the longest subgroup that contains no repeating numbers.

// For example:

// Input: "1231456"
// Output: 3 (the longest substring is "", which has a length of 3).

function lengthOfLongestGroup (num) {
  if (num === undefined) {
    return 0
  }

const distinctElements = new Set()

let left = 0;
let maxLength = 0;

num = num.toString()

for (let right = 0; right < num.length; right ++) {
  while(distinctElements.has(num[right])) {
    distinctElements.delete(num[left])
    left++
  } 

distinctElements.add(num[right])

maxLength = Math.max(maxLength, right - left + 1)

}

return maxLength

}

console.log(lengthOfLongestGroup(12312212));  // Output: 3
console.log(lengthOfLongestGroup(11111));     // Output: 1
console.log(lengthOfLongestGroup(122344));    // Output: 3
console.log(lengthOfLongestGroup());          // Output: 0