// Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

// const numberOfVowels = function(data) {
// return data.match(/[aeiou]/g).length
// };

const vowels = ["a", "e", "i", "o", "u"]

const numberOfVowels = function (data) {
  let numOfVowels = 0;

  for (let letter of data.toLowerCase()) {
    if (vowels.includes(letter)) {
      numOfVowels++
    }
  }

  return numOfVowels
};


console.log(numberOfVowels("orange")); //3
console.log(numberOfVowels("lighthouse labs")); //5
console.log(numberOfVowels("aeiou")); //5