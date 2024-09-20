// Problem: Find the First Non-Repeating Character
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// For example:

// Input: "leetcode"

// Output: 0 (because 'l' is the first character that doesn't repeat).

// Input: "loveleetcode"

// Output: 2 (because 'v' is the first non-repeating character).

// Input: "aabb"

// Output: -1 (because every character repeats).

// Instructions:
// Write a function firstUniqChar(s) that takes a string s and returns the index of the first non-repeating character, or -1 if no such character exists.

function firstUniqChar(s) {

  let object = {}

  for (c of s) {
    if (object[c]) {
      object[c] += 1
    } else {
      object[c] = 1
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (object[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}





console.log(firstUniqChar("leetcode"));     // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb"));         // Output: -1
