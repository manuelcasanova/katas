// Kata: Unique Characters
// Problem Statement: Write a function that takes a string and returns true if all characters in the string are unique (case-sensitive) and false otherwise.

function hasUniqueCharacters(str) {
  if (str.length === 0) {
    return true
  }

  let array = str.split("")

  const unique = [...new Set(array)];

  if (array.length === unique.length) {
    return true
  } else {
    return false
  }

}

//chatgpt:

function hasUniqueCharacters(str) {
  if (str.length === 0) {
    return true;
  }

  const uniqueChars = new Set(str);
  return uniqueChars.size === str.length;
}



// Example:

console.log(hasUniqueCharacters("abcde")) // true
console.log(hasUniqueCharacters("aabcde")) // false
console.log(hasUniqueCharacters("Hello")) // false
console.log(hasUniqueCharacters("World")) // true
console.log(hasUniqueCharacters("")) // true (an empty string has unique characters)
