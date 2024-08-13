// // Have the function ArrayChallenge(arr) take the array of numbers stored in arr which will contain integers that represent the amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on day x and selling stock on day y where y > x. For example: if arr is [44, 30, 24, 32, 35, 30, 40, 38, 15] then your program should return 16 because at index 2 the stock was worth $24 and at index 6 the stock was then worth $40, so if you bought the stock at 24 and sold it at 40, you would have made a profit of $16, which is the maximum profit that could have been made with this list of stock prices.

// let arr1 = [44, 30, 24, 32, 35, 30, 40, 38, 15]
// let arr2 = [10, 8, 2]

// function ArrayChallenge(arr) {

//   let minPrice = arr[0]; //It's the price for the first day, therefore the minumum price for profit (or 0).
//   let maxProfit = 0;


//   //If one of the indexes is lower than the first price, then it becomes the possible minimum price
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < minPrice) {
//       minPrice = arr[i]
//     }

//     //It the index minus the minimum price is greater thant the maximum profit, this differente becomes the maximum profit

//     if (arr[i] - minPrice > maxProfit) {
//       maxProfit = arr[i] - minPrice;
//     } else {
//       maxProfit = -1
//     }
//   }
//   return maxProfit
// }

// console.log(ArrayChallenge(arr1));

let arr1 = [44, 30, 24, 32, 35, 30, 40, 38, 15]
let arr2 = [10, 8, 2]

function ArrayChallenge(arr) {

  var maxProfit = 0;

  var minPrice = arr[0];

  for (var i = 1; i < arr.length; i++) {

    if (arr[i] < minPrice) {
      minPrice = arr[i];
    }

    if (arr[i] - minPrice > maxProfit) {
      maxProfit = arr[i] - minPrice;
    }

  }

  return maxProfit;

}

console.log(ArrayChallenge(arr1));
console.log(ArrayChallenge(arr2));