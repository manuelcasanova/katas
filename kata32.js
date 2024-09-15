// Kata: "Product and Sum Pairs"
// Problem Description:
// You are given an array of integers. Your task is to find all unique pairs of elements in the array where each pair (a, b) satisfies the following conditions:

// The product of a and b is greater than the sum of a and b.
// Both a and b must be distinct and the pair should be unique (i.e., (a, b) is considered the same as (b, a)).
// You need to return an array of these pairs, where each pair is represented as an array [a, b], and the pairs should be sorted in ascending order based on the first element of the pair. If there are no such pairs, return an empty array.

function findValidPairs (arr) {
  
let pairs = []

for (i = 0; i < arr.length; i++) {
  for (index = i + 1; index < arr.length; index ++) {
    pairs.push([arr[i], arr[index]])
  }
}

let result = []

for (pair of pairs) {
if ((pair[0] * pair[1]) > (pair[0] + pair[1])) {
  result.push([pair[0], pair[1]])
}
}

result.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

return result

}



const input = [1, 2, 3, 4];

const result = findValidPairs(input);

console.log(result); // Output should be [[2, 3], [2, 4], [3, 4]]

// Explanation:
// For the given input [1, 2, 3, 4], the valid pairs are:

// For the pair (1, 2): 1 * 2 = 2, 1 + 2 = 3 (2 is not greater than 3)
// For the pair (1, 3): 1 * 3 = 3, 1 + 3 = 4 (3 is not greater than 4)
// For the pair (1, 4): 1 * 4 = 4, 1 + 4 = 5 (4 is not greater than 5)
// For the pair (2, 3): 2 * 3 = 6, 2 + 3 = 5 (6 is greater than 5)
// For the pair (2, 4): 2 * 4 = 8, 2 + 4 = 6 (8 is greater than 6)
// For the pair (3, 4): 3 * 4 = 12, 3 + 4 = 7 (12 is greater than 7)
