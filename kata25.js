// Kata: Array Difference
// Problem Description
// You are given two arrays: array1 and array2. Your task is to create a function called arrayDifference that returns a new array consisting of the elements that are present in array1 but not in array2.

// In other words, the function should return an array containing all the unique elements from array1 that are not present in array2.

function arrayDifference(array1, array2) {
  let resultArray = []

  array1.forEach(number => {
    if (!array2.includes(number)) {
      resultArray.push(number)
    }
  });

const noDuplicates = new Set(resultArray)

return [...noDuplicates]

}


console.log(arrayDifference([1, 2, 3], [3, 4, 5]));
// returns [1, 2]

console.log(arrayDifference([1, 2, 3, 4, 5], [3, 4]));
// returns [1, 2, 5]

console.log(arrayDifference([1, 2, 3], [1, 2, 3]));
// returns []

console.log(arrayDifference([], [1, 2, 3]));
// returns []

console.log(arrayDifference([1, 1], [2, 3]));
// returns [1]


// Constraints
// Both array1 and array2 can contain duplicate elements.
// The order of the elements in the result array does not matter.

// Elements in the arrays are integers.
// Notes
// Your solution should handle cases where array1 or array2 is empty.
// Ensure that the returned array contains only unique elements that are in array1 but not in array2.