// Kata: Object Manipulation
// Task:

// You are given an object representing a person's profile. Your goal is to perform the following operations:

// Update Property:
// Create a function updateProfile that takes the profile object, a property name, and a new value. The function should update the specified property with the new value. If the property doesn't exist, it should be added.

// Remove Property:
// Create a function removeProperty that takes the profile object and a property name. The function should remove the specified property from the profile object. If the property does not exist, do nothing.

// Get Property:
// Create a function getProperty that takes the profile object and a property name. The function should return the value of the specified property. If the property does not exist, return undefined.

// List Properties:
// Create a function listProperties that takes the profile object and returns an array of property names in the profile.

const profile = {
  name: 'Alice',
  age: 30,
  profession: 'Engineer'
};


function updateProfile(profile, property, value) {
  //"Push" new property and value if not in profile
  profile[property] = value;

}

function removeProperty(profile, property) {
  delete profile[property];
}

function getProperty(profile, property) {
  return profile[property];
}

function listProperties(profile) {
  return Object.keys(profile);
}


updateProfile(profile, 'age', 31);       // Updates age to 31
updateProfile(profile, 'location', 'NYC'); // Adds a new property 'location'

//  console.log(profile)

console.log(getProperty(profile, 'name'));       // Outputs: 'Alice'
console.log(getProperty(profile, 'location'));   // Outputs: 'NYC'

removeProperty(profile, 'profession'); // Removes the 'profession' property
console.log(listProperties(profile));  // Outputs: ['name', 'age', 'location']
