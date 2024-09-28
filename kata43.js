// Kata: Reverse a String
// Task: Write a function reverseString that takes a string as an argument and returns the string in reverse order.



function reverseString(str) {
  let newString = []
  for (i = str.length; i >= 0; i--) {
    newString.push(str[i])
  }
  
  return newString.join("")


}

//chatgpt solution
// function reverseString(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//   }
//   return reversed;
// }

// recursive solution

// function reverseString(str) {
//   if (str === "") {
//       return "";
//   } else {
//       return str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1));
//   }
// }


// Requirements:
// Do not use the built-in reverse() method of arrays.
// You can assume the input will always be a string.

// Bonus:
// Try to solve it using a loop and also using recursion.


// Example:

console.log(reverseString("hello")); // returns "olleh"
console.log(reverseString("world")); // returns "dlrow"
