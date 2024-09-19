// Problem: Group Anagrams
// Given an array of strings, group the anagrams together. You can return the result in any order.

// An anagram is a word formed by rearranging the letters of another, such as "eat", "tea", and "ate".

// For example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
// Instructions:
// Write a function groupAnagrams(strs) that takes an array of strings strs and returns an array of arrays, where each subarray contains strings that are anagrams of each other.


function groupAnagrams(strs) {
let sortedStrings = []

  for (str of strs) {
    sortedStrings.push(str.split("").sort().join(""));
  }
  
console.log(sortedStrings)

let object = {}

for (let i = 0; i < sortedStrings.length; i++) {
  const str = sortedStrings[i]


  if (!object[str]) {
    object[str] = [];
  }

  object[str].push(strs[i])
}

// return object
return Object.values(object)

}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
