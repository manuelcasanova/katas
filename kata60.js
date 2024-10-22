// Kata: Find the Elements That Appear More Than N/3 Times
// Given an integer array nums, return all the elements that appear more than n/3 times, where n is the size of the array.

// Task:
// Find all the elements that occur more than n / 3 times in the array.
// There can be multiple valid answers.
// Plan (No code):
// Step 1: Count the frequency of each element using an object or map.
// Step 2: Iterate through the object and collect elements that have a count greater than n / 3.
// Step 3: Return the array of elements that meet the criteria.

function findMajorityElements(array) {
  let map = {}
  let output = []

  for (i of array) {
    if (map.hasOwnProperty(i)) {
      map[i] += 1
    } else {
      map[i] = 1
    }
  
  }

  console.log(map, array.length)


  for (const [key, value] of Object.entries(map)) {
    if (value > array.length / 3) {
      output.push(parseInt(key))
    }

  }

  return output

}


// Example:

// console.log(findMajorityElements([3, 2, 3]));      // Output: [3]
// console.log(findMajorityElements([1, 1, 1, 3, 3, 2, 2, 2]));  // Output: [1, 2]
// console.log(findMajorityElements([1, 2]));         // Output: [1, 2]


// Your solution looks good and is on the right track! You're using a map to count the frequency of each element, then checking if the count exceeds n / 3 and adding the element to the output array.

// One small observation:
// The elements in the map are stored as strings when using Object.entries(map), so you're correctly converting them to integers using parseInt(key).
// Also, your approach correctly iterates through the array and checks the condition value > array.length / 3.