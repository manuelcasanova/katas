// Kata: "Array Manipulation - Unique Values and Sum"
// Problem Statement
// You are given an array of integers. Your task is to implement two functions:

// uniqueValues(arr): This function takes an array of integers and returns a new array containing only the unique values from the original array. The order of elements in the returned array should be the same as the order of their first occurrence in the original array.

// sumOfUniqueValues(arr): This function takes an array of integers and returns the sum of all unique values in the array. The unique values are determined based on the first function.

// Input
const arr = [4, 2, 2, 3, 4, 5, 6, 6, 7];

const uniqueArray = []


// Constraints
// The input array will have at most 1000 integers.
// Each integer in the array is between -10^4 and 10^4.

// Function to return unique values from the array
function uniqueValues(arr) {


  arr.map( n => {
    if (!uniqueArray.includes(n)) {
      uniqueArray.push(n)
      arr = uniqueArray
    }
  })

return arr
}

// Function to return the sum of unique values from the array
function sumOfUniqueValues(arr) {
  let sum = 0;
  for (let i = 0; i < uniqueArray.length; i++) {
    sum += uniqueArray[i]
  }
  
  return sum

}






//  ChatGPT:

// Your approach is close, but there are a few issues that need to be addressed:

// Global State: The uniqueArray is defined globally and used in both functions. This can lead to issues if uniqueValues is called multiple times, as uniqueArray will retain state from previous calls. Instead, it should be handled locally within each function.

// Mutating Input: Modifying arr inside the map function is not a good practice, as it could lead to unexpected side effects. Instead, you should handle unique values in a way that doesn't mutate the input array.

// Efficiency: The use of includes inside a loop makes the solution less efficient. Using a Set is more efficient for this purpose.


// Function to return unique values from the array
function uniqueValues(arr) {
  const uniqueArray = [];
  const seen = new Set();
  
  for (const num of arr) {
      if (!seen.has(num)) {
          seen.add(num);
          uniqueArray.push(num);
      }
  }
  
  return uniqueArray;
}

// Function to return the sum of unique values from the array
function sumOfUniqueValues(arr) {
  const uniqueArray = uniqueValues(arr);
  return uniqueArray.reduce((acc, val) => acc + val, 0);
}


// uniqueValues Function:

// We use a Set named seen to track the numbers we've already encountered.
// We iterate through the array and add each number to uniqueArray only if it hasn't been seen before.
// This approach ensures that the uniqueArray contains only unique elements while maintaining their original order.
// sumOfUniqueValues Function:

// We call uniqueValues to get the unique numbers from the array.
// We then calculate the sum of these unique numbers using the reduce method.

// uniqueValues should return the array [4, 2, 3, 5, 6, 7]
console.log(uniqueValues(arr));

// sumOfUniqueValues should return the sum of [4, 2, 3, 5, 6, 7], which is 27
 console.log(sumOfUniqueValues(arr));