// Problem Statement:

// You are given an array of arrays, where each inner array represents a transaction with the following elements:

// date (string in "YYYY-MM-DD" format)
// amount (integer, positive or negative)
// category (string)
// Your task is to implement a function called processTransactions that performs the following steps:

// Filter by Date Range: Only include transactions from the last 30 days.
// Extract Categories: Extract a sorted list of unique categories.
// Group by Category: For each category, create an array of transactions (from the last 30 days) belonging to that category.
// Sort Transactions: Within each category, sort transactions by amount in descending order.
// Calculate Totals: For each category, calculate the total amount of transactions.
// The function should return a nested array with the following structure:

// The first element is an array of unique categories, sorted alphabetically.
// The second element is a 2D array where each sub-array represents a category and contains the sorted transactions for that category.
// The third element is an array where each element corresponds to the total amount of transactions for the respective category in the second element.
// Function Signature:


function processTransactions(transactions) {

  let categories = []
  for (t of transactions) {
  if (!categories.includes(t[2])) {
  categories.push(t[2])
  }
  }
  
  
  const today = new Date()
  const limitDateTimeStamp = new Date().setDate(today.getDate() - 30)
  
  const limitDate = new Date(limitDateTimeStamp).toISOString().split('T')[0]
  
  
  console.log("limite date:", limitDate)
  
  
  let limitedByDateTransactions = []
  
  for (t of transactions) {
  if (limitDate <= t[0]) {
  limitedByDateTransactions.push(t)
  }
  }
  
limitedByDateTransactions = limitedByDateTransactions.sort((a, b) => {

const categoryA = a[2] //index 2 of the array, the category
const categoryB = b[2]

if (categoryA < categoryB) {
  return -1
}
if (categoryA > categoryB) {
  return 1
}
return 0 //if the are the same

})

let groupedArray = []



  
  return [categories, limitedByDateTransactions, groupedArray ]
  
  
  }
  
  
  
  const transactions = [
  ["2024-08-10", 200, "Electronics"],
  ["2024-08-15", -50, "Electronics"],
  ["2024-08-20", 300, "Books"],
  ["2024-09-01", 150, "Books"],
  ["2024-09-05", 400, "Furniture"],
  ["2024-09-06", -100, "Books"]
  ];
  
  const result = processTransactions(transactions);
  console.log(result);
  
  // Expected Output:
  // [
  // ["Books", "Electronics", "Furniture"],
  // [
  // [["2024-08-20", 300, "Books"], ["2024-09-01", 150, "Books"], ["2024-09-06", -100, "Books"]],
  // [["2024-08-10", 200, "Electronics"], ["2024-08-15", -50, "Electronics"]],
  // [["2024-09-05", 400, "Furniture"]]
  // ],
  // [350, 150, 400]
  // ]
  
  // Explanation:
  
  // Filter by Date Range: Transactions from the last 30 days (based on the current date, "2024-09-06") are considered.
  // Extract Categories: Extract and sort unique categories.
  // Group by Category: Group transactions by category.
  // Sort Transactions: Sort transactions in each category by amount in descending order.
  // Calculate Totals: Calculate the sum of amount for each category.
  
  // Constraints:
  
  // The input array can be empty.
  // Dates are in "YYYY-MM-DD" format.
  // The function should handle various edge cases, such as missing or malformed data.