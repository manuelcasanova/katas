// Create a function called filterAndSum that takes an array of numbers and a filter function. The function should apply the filter function to each element of the array and return the sum of elements that pass the filter.



const filterAndSum = function(numbers, filterFunction) {

//Loop through array, apply filter, if true push to new array, sum of the numbers in the new array

const filteredNumbers = numbers.filter(filterFunction)


let sum = 0;

for (let i = 0; i < filteredNumbers.length; i++) {
  sum += filteredNumbers[i]
}

return sum

};



// Inputs:

// numbers: An array of numbers (e.g., [1, 2, 3, 4, 5]).

// filterFunction: A function that takes a number as an argument and returns true if the number should be included in the sum or false otherwise (e.g., x => x > 3).

// Outputs:

// The sum of the numbers that pass the filter function.

console.log(filterAndSum([1, 2, 3, 4, 5], x => x > 3)); // 9 (4 + 5)
console.log(filterAndSum([1, 2, 3, 4, 5], x => x % 2 === 0)); // 6 (2 + 4)
console.log(filterAndSum([10, 20, 30], x => x < 15)); // 10
console.log(filterAndSum([], x => x > 0)); // 0

// Notes:

// If no numbers pass the filter, the function should return 0.
// The filter function should be a valid JavaScript function that takes a single number as input and returns a boolean.

// CHATGPT:

// Your solution for the filterAndSum kata looks great! You used the .filter() method to filter the array based on the provided filter function, and then summed the filtered numbers with a simple loop. This approach is clean and effective.

// Here's a slightly more concise version that uses the .reduce() method instead of a loop to sum the filtered numbers:


const filterAndSum2 = function(numbers, filterFunction) {
  // Filter the array based on the filter function
  const filteredNumbers = numbers.filter(filterFunction);

  // Sum up the filtered numbers
  return filteredNumbers.reduce((sum, num) => sum + num, 0);
};
// Explanation:
// Filtering: numbers.filter(filterFunction) filters the array to include only the elements that satisfy the filterFunction.
// Summing: filteredNumbers.reduce((sum, num) => sum + num, 0) calculates the sum of the filtered numbers. The reduce() method takes a callback function that adds each number to the accumulated sum, starting from 0.
// This version combines the filtering and summing into fewer lines of code, making it concise and elegant.

console.log(filterAndSum2([1, 2, 3, 4, 5], x => x > 3)); // 9 (4 + 5)
console.log(filterAndSum2([1, 2, 3, 4, 5], x => x % 2 === 0)); // 6 (2 + 4)
console.log(filterAndSum2([10, 20, 30], x => x < 15)); // 10
console.log(filterAndSum2([], x => x > 0)); // 0