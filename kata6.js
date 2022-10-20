// Implement an algoritghm to determine if a string has all unique characters

const string1 = "max" //false
const string2 = "m ax" //false
const string3 = "M ax" //false
const string4 = "mom" //true
const string5 = "m om" //true
const string6 = "M om" //true


const unique = (string) => {

  let lcString = string.toLowerCase();
  let nsString = lcString.replace(/\s+/g, ''); //No spaces string

  let repeated = []

  for (let character in nsString) {
    if (!repeated.includes(nsString[character])) {
      repeated.push(nsString[character])
    }
  }

  if (nsString.length !== repeated.length) {
    console.log("This string has repeated characters")
  } else {
    console.log("This string has no repeated characters")
  }

  
}

unique ("Hello")

// unique(string1)
// unique(string2)
// unique(string3)
// unique(string4)
// unique(string5)
// unique(string6)
