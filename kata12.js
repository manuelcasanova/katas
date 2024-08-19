// Kata: Object Profile Management
// Task:

// You are working with a profile object representing a user. Your goal is to implement the following functions:

// Add or Update Property:
// Create a function addOrUpdateProperty that takes the profile object, a property name, and a value. The function should add the property to the profile if it does not exist or update its value if it does.

// Remove Property:
// Create a function deleteProperty that takes the profile object and a property name. The function should remove the property from the profile if it exists. If the property does not exist, do nothing.

// Check Property Existence:
// Create a function hasProperty that takes the profile object and a property name. The function should return true if the property exists in the profile and false otherwise.

// Merge Profiles:
// Create a function mergeProfiles that takes two profile objects and merges the second profile into the first. The function should update the properties in the first profile with values from the second profile. Properties in the second profile should overwrite properties in the first profile if they have the same name.


// Instructions:
function addOrUpdateProperty(profile, property, value) {
  profile[property] = value
}

function deleteProperty(profile, property) {
  delete profile[property]
}

function hasProperty(profile, property) {
  for (p in profile) {
    return p === property
  }
}

function mergeProfiles(profile1, profile2) {
  for (const property in profile2) {
    if (profile2.hasOwnProperty(property)) {
      if (profile1.hasOwnProperty(property)) {
        console.log("Duplicate property", property)
      }
    }
    profile1[property] = profile2[property]

  }
}


const profile1 = {
  name: 'Bob',
  age: 25
};

const profile2 = {
  age: 26,
  location: 'San Francisco'
};

// Add or update a property
addOrUpdateProperty(profile1, 'job', 'Developer'); // Adds 'job'
addOrUpdateProperty(profile1, 'age', 27); // Updates 'age'

// // Check if a property exists
// console.log(hasProperty(profile1, 'name')); // Outputs: true
// console.log(hasProperty(profile1, 'location')); // Outputs: false

// // Remove a property
deleteProperty(profile1, 'job'); // Removes 'job'

// // Merge profiles
mergeProfiles(profile1, profile2);

console.log(profile1); // Outputs: { name: 'Bob', age: 26, location: 'San Francisco' }



