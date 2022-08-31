// Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.

const instructorWithLongestName = function (instructors) {

  let nameLength = 0;
  let instructorIndex = 0;

  instructors.forEach((instructor) => {
    if (instructor["name"].length > nameLength) {
      nameLength = instructor["name"].length;
      instructorIndex = instructors.indexOf(instructor)
    }
  })

return instructors[instructorIndex]

};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
])); //Jeremiah, Web
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
])); //Domascus, Web



// const instructorWithLongestName = function (instructors) {

//   let nameLength = 0;
//   let nameOfLongest = '';

//   instructors.forEach((instructor) => {
//     if (instructor["name"].length > nameLength) {
//       nameLength = instructor["name"].length;
//       nameOfLongest = instructor.name;
//     }
//   })

// return nameOfLongest

// };