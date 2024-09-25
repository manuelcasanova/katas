// Problem: Reverse Words in a String
// Given a string s, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space, and your output should not have leading or trailing spaces. If there are multiple spaces between words, reduce them to a single space in the output.

// Instructions:
// Write a function reverseWords(s) that takes a string s and returns the string with the words in reverse order.

function reverseWords(s) {
  const split = s.split(' ')
  
let noSpace = []

  for (word of split) {
    if (word !== '') {
noSpace.push(word)
    }
  }

  let reverse = []

for (i = noSpace.length -1; i >= 0; i--) {
  reverse.push(noSpace[i])
}


   return reverse.join(" ")

}


// Simplified Version:
// You can avoid using the for loops by chaining the array methods for splitting, filtering, and reversing. Here's an optimized version:


// function reverseWords(s) {
//   return s
//     .split(' ')              // Split the string into an array of words
//     .filter(word => word)     // Filter out empty strings (extra spaces)
//     .reverse()                // Reverse the array of words
//     .join(' ');               // Join the words back into a single string
// }
// Explanation:
// split(' ') splits the string into an array by spaces.
// filter(word => word) removes any empty strings caused by extra spaces.
// reverse() reverses the array.
// join(' ') joins the reversed array back into a string with a single space between words.

// Example:

console.log(reverseWords("the sky is blue"));         // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));         // Output: "world hello"
console.log(reverseWords("a good   example"));        // Output: "example good a"


// Approach Hints:
// Split and Reverse: You can split the string by spaces into an array of words, reverse the array, and then join the words back into a single string.
// Trim Extra Spaces: Make sure to remove any extra spaces before splitting the string.