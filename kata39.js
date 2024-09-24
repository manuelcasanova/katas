// Problem: Find the Duplicates
// You are given an array of integers. Write a function that returns an array of all duplicate numbers in the input array.

// Instructions:
// Write a function findDuplicates(arr) that takes an array arr of integers and returns an array of the duplicates in the array.


function findDuplicates(array) {

  let count = {}
  let duplicates = []

  for (n of array) {
    if (count[n]) {
      count[n] += 1
    } else {
      count[n] = 1
    }
  }

for (key in count) {
  if (count[key] > 1) {
    duplicates.push(key)
  }
}

return duplicates

}



console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [2, 3]
console.log(findDuplicates([1, 2, 3, 4, 5]));         // Output: []
console.log(findDuplicates([5, 5, 5, 5, 5]));         // Output: [5]
