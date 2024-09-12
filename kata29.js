// Kata: "Fibonacci Sequence"
// Description:

// Create a function fibonacci(n) that returns the n-th number in the Fibonacci sequence. The Fibonacci sequence is defined as:

// fibonacci(0) = 0
// fibonacci(1) = 1
// fibonacci(n) = fibonacci(n-1) + fibonacci(n-2) for n > 1

// Requirements:

// Write the function fibonacci(n) that returns the n-th Fibonacci number.
// The function should handle n where 0 ≤ n ≤ 50.


function fibonacci(number) {

  let array = [0, 1]

  // array.push(array[array.length - 1] + array[array.length - 2])

  for (let i = 1; i <= 50; i++) {
    array.push(array[array.length - 1] + array[array.length - 2])
  }

  return array[number]

}

console.log(fibonacci(0)); // should return 0
console.log(fibonacci(1)); // should return 1
console.log(fibonacci(5)); // should return 5
console.log(fibonacci(10)); // should return 55
console.log(fibonacci(50)); // Output: 12586269025


// Your solution has the right idea, but there are a few adjustments needed:

// Loop Range: Your current loop will always run 50 times, which isn't necessary and can be optimized. You only need to calculate up to the number-th Fibonacci number.
// Initial Array Values: You should start by defining the array with the first two Fibonacci numbers (0 and 1), which you already did correctly.
// Efficiency: If number is 0 or 1, you should return those values immediately without running the loop.

// function fibonacci(number) {
//   // Handle base cases
//   if (number === 0) return 0;
//   if (number === 1) return 1;
  
//   let array = [0, 1];
  
//   // Calculate Fibonacci numbers up to the desired index
//   for (let i = 2; i <= number; i++) {
//     array.push(array[array.length - 1] + array[array.length - 2]);
//   }
  
//   return array[number];
// }
