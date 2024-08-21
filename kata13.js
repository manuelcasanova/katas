// Kata: "Array Transformations"
// Description:

// You are given an array of integers. Your task is to implement a function that performs a series of transformations on the array and returns the result. The transformations are as follows:

// Filter: Remove all elements that are not divisible by 3.
// Map: Square each remaining element.
// Sort: Sort the resulting array in ascending order.
// Reduce: Compute the sum of all elements in the array.
// Write a function transformArray(arr) that takes an array of integers arr and applies the above transformations.

Example:


function transformArray(arr) {
  const notDivisibleBy3 = arr.filter ((n) => n % 3 === 0)
  
  let arrayOfSquares = []
for (n of notDivisibleBy3) {
 arrayOfSquares.push(n * n)
}

// console.log(arrayOfSquares)

let sortedArrayOfSquares = arrayOfSquares.sort((a,b) => a-b)

// console.log(sortedArrayOfSquares)

const initialValue = 0;
const sumWithInitial = sortedArrayOfSquares.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

//Less code: .reduce((sum, num) => sum + num, 0); 

console.log(sumWithInitial);


}

transformArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// Output: 126


// Chatgpt solution:

function transformArray2(arr) {
  return arr
      .filter(num => num % 3 === 0) // Step 1: Filter out non-divisible by 3
      .map(num => num * num) // Step 2: Square each element
      .sort((a, b) => a - b) // Step 3: Sort in ascending order
      .reduce((sum, num) => sum + num, 0); // Step 4: Compute the sum
}

// Example usage:
console.log(transformArray2([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 126



// Explanation:

// Filter out elements not divisible by 3: [3, 6, 9]
// Square each remaining element: [9, 36, 81]
// Sort the resulting array: [9, 36, 81]
// Compute the sum of all elements: 9 + 36 + 81 = 126
// Requirements:

// Implement the function using the built-in array methods: filter, map, sort, and reduce.
// Do not use any external libraries or utilities.
// Hints:

// To filter elements, use the filter method.
// To square elements, use the map method with an appropriate transformation function.
// To sort elements, use the sort method.
// To compute the sum, use the reduce method with an appropriate initial value.