// In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

// Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.

//Using sort

const sumLargestNumbers = function (data) {

  let sorted = data.sort(function (a, b) {
    return a -b
  })

  return sorted[sorted.length - 1] + sorted[sorted.length - 2]

}

//Using Math.max and splice

// const sumLargestNumbers = function (data) {
//   let max = Math.max.apply(null, data);
//   data.splice(data.indexOf(max), 1)
//   let secondMax = Math.max.apply(null, data);
//   return max + secondMax
// }

console.log(sumLargestNumbers([1, 10])); //11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //126
