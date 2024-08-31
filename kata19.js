// Kata: "Array Manipulations"
// Problem Statement
// You are given an array of integers. Your task is to write a function that performs the following operations on the array:

// Remove Duplicates: Create a new array with all duplicate values removed.
// Sort the Array: Sort the new array in ascending order.
// Calculate the Average: Compute the average of the numbers in the array.
// Find the Median: Compute the median value of the array.


function arrayManipulations(arr) {
  const noDuplicates = [...new Set(arr)]

  //Set converts to an object with with unique valiues
  //... to convert the set object back to an array

  const sortedArray = noDuplicates.sort((a, b) => a - b);

  const sum = sortedArray.reduce((acc, val) => acc + val, 0)

  const average = sum / sortedArray.length

  const median = sortedArray.length % 2 === 0
    ? (sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2
    : sortedArray[Math.floor(sortedArray.length / 2)];


  return {
    arr,
    sortedArray,
    sum,
    average,
    median
  }

}



const input = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// const input = [1, 2, 3, 4];

const result = arrayManipulations(input);
console.log(result);

// Details
// Remove Duplicates: Use a method to remove duplicate values from the array.
// Sort the Array: Sort the array in ascending order.
// Calculate the Average: The average is the sum of all elements divided by the number of elements.
// Find the Median: The median is the middle value of the sorted array. If the array length is even, it's the average of the two middle numbers.
// Find the Mode: The mode is the value(s) that appear most frequently. If multiple values have the highest frequency, return all of them in ascending order.
// Notes
// You should handle arrays of varying sizes, including empty arrays.
// If there is no mode (i.e., all values are unique), you should return an empty array.


