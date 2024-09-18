// Problem: Find the Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring that contains no repeating characters.

// For example:

// Input: "abcabcbb"
// Output: 3 (the longest substring is "abc", which has a length of 3).
// Instructions:
// Write a function lengthOfLongestSubstring(s) that takes a string s and returns the length of the longest substring without repeating characters.


function lengthOfLongestSubstring(s) {

  //sliding window technique

  const distinctElements = new Set();
let leftWindow = 0;
let maxLength = 0;

for (let rightWindow = 0; rightWindow < s.length; rightWindow ++) {
  while(distinctElements.has(s[rightWindow])) {
    distinctElements.delete(s[leftWindow])
    leftWindow++
  }


distinctElements.add(s[rightWindow])

maxLength = Math.max(maxLength, rightWindow - leftWindow + 1)

}

return maxLength

}

// Example:

console.log(lengthOfLongestSubstring("abcabcbb"));  // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));     // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));    // Output: 3
console.log(lengthOfLongestSubstring(""));          // Output: 0

// Approach Hints:
// Use two pointers to represent a sliding window, tracking the longest substring as you iterate over the string.
// Use a set or a map to store the characters and ensure there are no repeats.
// Slide the window (adjust the pointers) whenever you encounter a repeated character.