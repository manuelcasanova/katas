// Kata: "Array Transformations - Even Length Words"
// Problem Statement
// You are given an array of strings. Your task is to implement two functions:

// filterEvenLengthWords(arr): This function takes an array of strings and returns a new array containing only the words with an even number of characters. The order of words in the output array should be the same as the order of their first occurrence in the original array.

// transformToUppercase(arr): This function takes an array of strings and returns a new array where each string is converted to uppercase.

// Input
const arr = ["apple", "banana", "kiwi", "date", "pear"];


const newArr = []

// Function to return words with an even length from the array
function filterEvenLengthWords(arr) {
  arr.map(string => {
    if (
      string.length % 2 === 0) {
      newArr.push(string)
    }
  }
  )
  return newArr
}


// Function to return an array with all strings in uppercase
function transformToUppercase(arr) {
  const uppercaseArray = newArr.map(n => n.toUpperCase())
  console.log(uppercaseArray)
}


// Your solution demonstrates a good attempt, but there are some issues and improvements needed:

// Global State: You're using newArr and uppercaseArray outside the function scope. This can lead to unexpected results if functions are called multiple times or if there are other functions manipulating the same variable.

// Using map Incorrectly: The map function is meant for transforming each element in an array and returning a new array, not for side effects like pushing elements into an external array. For filtering elements, you should use filter.

// Function Dependencies: The transformToUppercase function relies on newArr from filterEvenLengthWords, which creates an implicit dependency between the two functions. This is not ideal.

// Here’s how you can refactor your solution to address these issues:

// Function to return words with an even length from the array
function filterEvenLengthWords(arr) {
  // Create a new array for even length words
  return arr.filter(string => string.length % 2 === 0);
}

// Function to return an array with all strings in uppercase
function transformToUppercase(arr) {
  // Create a new array with uppercase strings
  return arr.map(n => n.toUpperCase());
}

// Explanation
// filterEvenLengthWords Function:

// Uses filter to create a new array containing only the strings with even lengths. This function does not modify any external state.
// transformToUppercase Function:

// Uses map to transform each string in the input array to uppercase. This function also does not modify any external state.


// filterEvenLengthWords should return the array ["banana", "kiwi", "date", "pear"]
console.log(filterEvenLengthWords(arr));

// transformToUppercase should return the array ["APPLE", "BANANA", "KIWI", "DATE", "PEAR"]
console.log(transformToUppercase(arr));


// Constraints
// The input array will have at most 1000 strings.
// Each string in the array will have a length between 1 and 100 characters.