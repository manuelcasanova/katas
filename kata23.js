// Kata: Intersection of Two Arrays
// Problem Statement:

// Given two arrays, find the elements that are common to both arrays. Return a new array with these common elements. The returned array should not contain duplicate values and should be sorted in ascending order.

// Function Signature:

function intersection(arr1, arr2) {
  let common = []

  for (num of arr1) {
    for (num2 of arr2) {
      if (num === num2) {
        common.push(num)
      }
    }
  }

  let noDuplicates = []

  for (num of common) {
    if (!noDuplicates.includes(num)) {
      noDuplicates.push(num)
    }
  }

  const sorted = noDuplicates.sort((a, b) => a - b)
  
  console.log(sorted)
}


intersection([1, 2, 2, 3], [2, 3, 3, 4]);
// Output: [2, 3]

intersection([1, 1, 1, 1], [1, 2, 3]);
// Output: [1]

intersection([5 , 4, 3, 2], [5, 4, 3, 1]);
// Output: [3, 4, 5]

intersection([4, 5, 6], [1, 2, 3]);
// Output: []

// Chatgpt solution

function intersection(arr1, arr2) {
  // Convert both arrays to sets to remove duplicates
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  
  // Find the intersection of both sets
  let intersectionSet = new Set([...set1].filter(x => set2.has(x)));
  
  // Convert the set to an array and sort it
  return [...intersectionSet].sort((a, b) => a - b);
}

// Explanation:
// Convert Arrays to Sets: We first convert both arrays to sets to remove any duplicate values and make intersection operations easier.
// Find Intersection: Use the filter method to find elements in the first set that also exist in the second set.
// Convert Set to Array and Sort: Convert the resulting set back to an array and sort it in ascending order.