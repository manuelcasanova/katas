// Problem: Valid Parentheses
// Given a string containing just the characters '(', ')', {, }, [ and ], determine if the input string is valid. An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Instructions:
// Write a function isValid(s) that returns true if the input string is valid, and false otherwise.

function isValid(s) {

  let stack = []

  for (i of s) {

    if (
      i === "(" ||
      i === "[" ||
      i === "{"
    ) {
      stack.push(i)
    }

    else {

      if (
        (i === "]" && stack[stack.length - 1] === "[") ||
        (i === "}" && stack[stack.length - 1] === "{") ||
        (i === ")" && stack[stack.length - 1] === "(")
      )

        // stack.pop(stack.length - 1)
        stack.pop(); // not necessary stack.length -1 cuz pop does that
    }

  }

  if (stack.length === 0) {
    return true
  }

  return false

}


console.log(isValid("()"));          // Output: true
console.log(isValid("()[]{}"));      // Output: true
console.log(isValid("(]"));          // Output: false
console.log(isValid("([)]"));        // Output: false
console.log(isValid("{[]}"));        // Output: true


// Approach Hints:
// Stack Data Structure: Use a stack to keep track of opening brackets.
// Matching Brackets: When you encounter a closing bracket, check if it matches the top of the stack. If it matches, pop the top of the stack; if not, return false.
// Final Check: At the end, if the stack is empty, return true; otherwise, return false.


// what is stack data structure?

// ChatGPT
// A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed. You can think of it like a stack of plates: you can only add or remove the top plate.

// Key Operations:
// Push: Add an element to the top of the stack.
// Pop: Remove the element from the top of the stack.
// Peek (or Top): Retrieve the top element without removing it.
// IsEmpty: Check if the stack is empty.
// Use Cases:
// Function call management in programming languages (call stack)
// Undo mechanisms in applications
// Expression evaluation and syntax parsing
// Example:
// Here’s a simple example using numbers:

// Push 1
// Push 2
// Push 3
// The stack now contains: [1, 2, 3] (3 is at the top).

// Pop would return 3, and the stack now contains [1, 2].
// Peek would return 2, without modifying the stack.
// Stacks can be implemented using arrays or linked lists, depending on the requirements of the application.

// what is the top element, in an array?
// ChatGPT Plus
// ChatGPT
// In the context of a stack implemented using an array, the "top element" refers to the last element that was added to the stack. Since a stack operates on the Last In, First Out (LIFO) principle, the top element is the one that will be removed next when you perform a pop operation.