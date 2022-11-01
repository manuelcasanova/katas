// Have the function ArrayChallenge(arr) take the array of numbers stored in arr which will contain integers that represent the amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on day x and selling stock on day y where y > x. For example: if arr is [44, 30, 24, 32, 35, 30, 40, 38, 15] then your program should return 16 because at index 2 the stock was worth $24 and at index 6 the stock was then worth $40, so if you bought the stock at 24 and sold it at 40, you would have made a profit of $16, which is the maximum profit that could have been made with this list of stock prices.

function ArrayChallenge(arr) {

  let maxProfit = 0;

  let minPrice = arr[0];

  for (let i = 1; i < arr.length; i++) {

if (arr[i] < minPrice) {
  minPrice = arr[i];
}

if (arr[i] - minPrice > maxProfit) {
  maxProfit = arr[i] - minPrice;
} else {
  maxProfit = -1
}

  }


 return maxProfit

}

let array1 = [44, 30, 24, 32, 35, 30, 40, 38, 15]
let array2 = [10, 8, 6, 2]

console.log(ArrayChallenge(array1))

console.log(ArrayChallenge(array2))