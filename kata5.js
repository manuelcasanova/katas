//Find the missing number from a list

//First proposed solution is very disadvantageous because it loops through the whole array. It does not stop when it finds the first element that does not match the index + 1. 

/*
const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];

let offNumbers = [];

for (let number of numbers) {
if (numbers.indexOf(number) +1 !== number) {
  offNumbers.push(number)
}
}

let missingNumber = offNumbers[0] - 1;

console.log("The missing number is:", missingNumber)
*/

//Second proposed solution is better thant the first because it stops as soon as it finds the first element that does not match the index + 1. But it is not yet optimal because it starts from the position 0 and loops incrementally. If the missing number were the last of the list, it would have not been much different from the first solution. 

/*
const nums = [1, 2, 3, 4, 5, 6, 8, 9, 10];

for (let num of nums) {
  if (nums.indexOf(num) +1 !== num) {
    console.log("The missing number is", num -1)
    break
  }
}
*/


//Third solution (binary search)

const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];

function find(arr) {
  var size = arr.length;

 //Extreme cases
    if(numbers[0]!== 1) //If the list does not start with 1, then that's the missing number.
        return 1;
    if(numbers[size -1] === (size)) //The last number of the array is the same as the length, so the missing number is not in the list, but it's the next number.
        return size +1;
         
  var low = 0;
  var high = arr.length;

  while (low <= high) {
    var mid = Math.floor((low+high)/2);
    //4
    //If the number in the position of mid minus mid && 
    //5 - 4 = 1                                               6-5 != 2 (1) ---> 6
    if ((arr[mid]-mid === 1) && (arr[mid+1]-(mid+1) === 2)) return arr[mid]+1;
    //Check if the missing number is greater...
    if (arr[mid]-mid === 1) {
      low = mid+1;
    } else {
      //...or lower
      high = mid-1;
    }
  }
  return -1;
}
 

console.log(`Missing number: ${find(numbers)}`);




// Option a (consider even array)

const numeros = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11];



//What if the list does not start in 0?