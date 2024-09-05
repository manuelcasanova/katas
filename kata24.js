// Kata: Array Transformations
// Objective: You are given an array of integers. Your task is to implement a function that performs a series of transformations on the array and returns the result.

function transformArray(arr) {
  arr = arr.filter((num) => num > 0)

  let double = []
  
  for (num of arr) {
    double.push(num * 2)
  }

  double = double.sort((a,b) => a - b )

  double = double.reduce((sum, num) => sum + num, 0)

  return double
  
}

const input = [3, -1, 2, -4, 5];
const output = transformArray(input); 
console.log(output); // Output: 20

// Explanation:

// After filtering out the negative numbers: [3, 2, 5]
// After doubling each number: [6, 4, 10]
// After sorting in ascending order: [4, 6, 10]
// After summing up the elements: 4 + 6 + 10 = 20

//Chatgpt

// function transformArray(arr) {
//   return arr
//     .filter(num => num > 0)       // Filter out negative numbers
//     .map(num => num * 2)           // Double each remaining number
//     .sort((a, b) => a - b)         // Sort in ascending order
//     .reduce((sum, num) => sum + num, 0); // Sum up all elements
// }
