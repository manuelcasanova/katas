// Kata: Array Transformation
// Description:

// You are given an array of integers. Your task is to implement a function that performs the following operations on the array:

// Remove Duplicates: Remove all duplicate values from the array.
// Sort: Sort the array in ascending order.
// Filter: Keep only the elements that are greater than a specified threshold value.
// Sum: Calculate the sum of the remaining elements.
// Transform: Return the sum divided by the number of remaining elements (if there are any), or return 0 if the array is empty after filtering.
// Function Signature:

// Input:

// arr: An array of integers (e.g., [3, 5, 3, 2, 8, 8, 7]).
// threshold: An integer (e.g., 4).

// Output:

// A number that represents the result of the transformation (e.g., 6.67 for an array [5, 7, 8] with a threshold of 4).


function transformArray(arr, threshold) {
  let noDuplicates = []
 arr.map(n => {
  if (!noDuplicates.includes(n)) {
    noDuplicates.push(n)
    arr = noDuplicates
  }
 })

 arr.sort((a,b) => a-b)

 arr = arr.filter((n) => n > threshold)

 let sum = 0
 for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
 }

// const sum = arr.reduce((acc, num) => acc + num, 0);

 if (arr.length === 0) {
  console.log(0);
}

console.log((sum/arr.length).toFixed(2))

}



transformArray([3, 5, 3, 2, 8, 8, 7], 4);
// Output: 6.67

transformArray([3, 5, 3, 2, 8, 8, 7], 4) // Expected output: 6.666...
transformArray([1, 1, 1, 1, 1], 0)       // Expected output: 1
transformArray([10, 20, 30, 40], 25)      // Expected output: 35
transformArray([1, 2, 3], 10)             // Expected output: 0


// Issues:
// Using Array.prototype.map is not ideal here because map is meant for transforming each element of the array into a new array. For removing duplicates, you can use forEach or a Set.
// Reassigning arr to noDuplicates inside the loop is not necessary and might be confusing. You can separate this step and use Set to simplify duplicate removal.

// Printing 0 to the console might not be necessary if you handle this in the return value.
// You should return the result instead of logging it for better practice in function design.

function transformArray2(arr, threshold) {
  // Remove duplicates
  const uniqueArr = [...new Set(arr)];
  
  // Sort the array
  uniqueArr.sort((a, b) => a - b);
  
  // Filter based on the threshold
  const filteredArr = uniqueArr.filter(num => num > threshold);
  
  // Calculate the sum of the remaining elements
  const sum = filteredArr.reduce((acc, num) => acc + num, 0);
  
  // Calculate the result
  if (filteredArr.length === 0) {
    return 0;
  }
  
  return parseFloat((sum / filteredArr.length).toFixed(2));
}

console.log(transformArray2([3, 5, 3, 2, 8, 8, 7], 4));
// Output: 6.67

console.log(transformArray2([3, 5, 3, 2, 8, 8, 7], 4)) // Expected output: 6.666...
console.log(transformArray2([1, 1, 1, 1, 1], 0))       // Expected output: 1
console.log(transformArray2([10, 20, 30, 40], 25))      // Expected output: 35
console.log(transformArray2([1, 2, 3], 10))             // Expected output: 0
