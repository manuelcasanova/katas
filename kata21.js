// mode function analysys

// Empty object

// Loop through array. If the element in the array is a key in the object, add 1 count, otherwise, "create" the key with a value 1

// at first, when no elements, the max frequency is 0. loop through the values of the objects and, if they are higher than the max frequency, then the key of that value becomes the max frequency.

//we declare a variable to hold the modes (it could be more than one).

//loop through the key,value pair of the object and if the value equals the max frequence, the key is pushed to the variable modes.

//return the modes

//-----------------------

function calculateMode(array) {
  const keyValuePairObject = {}

  for (number of array) {
    if (keyValuePairObject[number]) {
      keyValuePairObject[number] += 1
    } else {
      keyValuePairObject[number] = 1
    }
  }

  let maxFrequency = 0

  for (count of Object.values(keyValuePairObject)) {
    if (count > maxFrequency) {
      maxFrequency = count;
    }
  }

  let modes = []

  for (const [key, value] of Object.entries(keyValuePairObject)) {
    if (value === maxFrequency) {
      modes.push(key)
    }
  }

return modes

}

const arrayofNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];

console.log(calculateMode(arrayofNumbers))