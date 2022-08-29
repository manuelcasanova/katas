// Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

const conditionalSum = function (values, condition) {
  let matching = []
  let sum = 0;

  for (let value of values) {
    if (condition === "even" && value % 2 === 0) {
      matching.push(value)
    } else if (condition === "odd" && value % 2 !== 0) {
      matching.push(value)
    }
  }

  for (let val = 0; val < matching.length; val++) {
    sum += matching[val]
  }

  
  return sum

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); //6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); //9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); //144
console.log(conditionalSum([], "odd")); //0


