// Problem:
// Find the most frequent element in an array.
// You are given an array of integers, and you need to return the element that appears most frequently. If there are multiple elements with the same frequency, return any of them.

function mostFrequent(array) {
  let object = {}
  for (i of array) {
    if (object.hasOwnProperty(i)) {
      object[i] += 1
    } else {
      object[i] = 1
    }
  }

  let maxFrequency = 0
  let result = []

  for (const [key, value] of Object.entries(object)) {
    if (value > maxFrequency) {
      maxFrequency = value
      result = [parseInt(key)]
    } else if (value === maxFrequency) {
      result.push(parseInt(key))
    }
  }

  return result

}

console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // Output: 1
console.log(mostFrequent([1, 2, 2, 3, 3]));   // Output: 2 or 3
