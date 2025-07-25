const name = "kaushinder";
const age = 25;

// console.log(name + age); // Concatenates name and age as strings

console.log(`Hello my name is ${name} and I am ${age} years old.`);

const gameName = new String('kaushinder');
console.log(gameName); // Outputs: [String: 'kaushinder']
console.log(gameName.length); // Outputs: 10 (length of the string including spaces)

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // Converts to uppercase
// console.log(gameName.toLowerCase()); // Converts to lowercase
// console.log(gameName.indexOf('s')); // Finds the index of 's'
// console.log(gameName.charAt(4)); // Gets the character at index 0

const newString = gameName.substring(0, 4); // Extracts substring from index 0 to 4
console.log(newString); // Outputs: 'kaus'

const anotherString = gameName.slice(-8, 4); // Extracts substring from index 0 to 4
console.log(anotherString); // Outputs: 'kaus'

const replacedString = gameName.replace('s', 'S'); // Replaces first occurrence of 's' with 'S'
console.log(replacedString); // Outputs: 'kaushinder'

const newStringOne = "  kaushinder  "
console.log(newStringOne.trim()); // Removes whitespace from both ends  
console.log(newStringOne);


const url = "https://www.google.com/kaushinder%20raghav";
console.log(url.replace('%20', '-'));

url.includes('google'); // Checks if 'google' is present in the URL
console.log(url.includes('google')); // Outputs: true

const gameName2 = new String('kaushinder-ksr-2025');
console.log(gameName2.split('-',2)); // Splits the string into an array at each '-' uses  (seperator, limit)
