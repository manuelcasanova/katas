// Find the Mode: Compute the mode of the array. If there are multiple modes, return all of them in ascending order.

function mode(array) {
  const object = {};
  
  // Step 1: Count the frequencies
  for (const element of array) {
      if (object[element]) {
          object[element] += 1;
      } else {
          object[element] = 1;
      }
  }

console.log('object', object)
console.log('obj val', Object.values(object))

  let maxFrequency = 0;
  for (const count of Object.values(object)) {
      if (count > maxFrequency) {
          maxFrequency = count;
      }
  }
console.log("max f", maxFrequency)
  const modes = [];
  for (const [key, value] of Object.entries(object)) {
      if (value === maxFrequency) {
          modes.push(Number(key)); // Convert back to number if necessary
      }
  }

  return modes;
}

const input = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// const input = [1, 2, 3, 4];

const result = mode(input);
console.log(result);