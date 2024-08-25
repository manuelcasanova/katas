// a: Array Manipulations
// Description:

// You are given an array of integers and a list of operations. Each operation involves modifying the array in a specific way. Your task is to perform each operation in sequence and return the resulting array.

// Operations:

// Add: Add a number to all elements of the array.
// Subtract: Subtract a number from all elements of the array.
// Multiply: Multiply all elements of the array by a number.
// Divide: Divide all elements of the array by a number, using integer division (i.e., round towards zero).
// Function Signature:

function performOperations(arr, operations) {
  let operationToUse
  operations.forEach(op => {
    // console.log(op.type)
    if (op.type === 'add') {
      arr = arr.map(n => n + op.value);
    } else if (op.type === 'multiply') {
     arr = arr.map (n => n * op.value )
    } else if (op.type === 'subtract') {
      arr = arr.map(n => n - op.value);
    } else if (op.type === 'divide') {
      arr = arr.map(n => Math.floor(n / op.value)); 
    } 
    console.log(arr)
  }
  )
}

// Input:

// arr (Array of integers): The initial array to modify.
// operations (Array of objects): Each object represents an operation and has the following structure:
// type (String): The type of operation ("add", "subtract", "multiply", "divide").
// value (Number): The number to use for the operation.
// Output:

// The array after performing all operations.
// Constraints:

// The initial array will have at least one integer and at most 10^4 integers.
// Each operation will have a value that is an integer.
// Division by zero should be avoided. Assume that the value for division will never be zero.


// Example 1
const arr = [1, 2, 3, 4];
const operations = [
  { type: 'add', value: 2 },
  { type: 'multiply', value: 3 },
  { type: 'subtract', value: 4 }
];
console.log(performOperations(arr, operations)); // [5, 8, 11, 14]

// Example 2
const arr2 = [10, 20, 30];
const operations2 = [
    { type: 'subtract', value: 5 },
    { type: 'divide', value: 2 }
];
console.log(performOperations(arr2, operations2)); // [2, 7, 12]

// Hints:

// You can use array methods like map to apply operations to each element.
// Be mindful of the operation order as each operation builds upon the previous result.