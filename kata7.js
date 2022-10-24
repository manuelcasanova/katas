// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

let mySheeps = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true];

  //My try

// function countSheeps(arrayOfSheep) {
//   let presentSheeps = 0;
//   for (sheep of arrayOfSheep) {
//     if (sheep !== null || sheep !== undefined) {
//       if (sheep === true) {
//         presentSheeps++
//       }
//     }
//   }
//   console.log(presentSheeps)
// }

// countSheeps(mySheeps)

//Alternative1

function countSheeps2(arrayOfSheep) {
  // TODO May the force be with you
  var num = 0;
  
  for(var i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] == true)
      num++;
      
  console.log(num);
}

countSheeps2(mySheeps)

//Alternative2

function countSheeps3(arrayOfSheeps) {
  console.log( arrayOfSheeps.filter(Boolean).length);
}

countSheeps3(mySheeps)