// array

const array = [0,1,2,3,4,5];
const myHeroes = ["thor", "ironman"];

const myArray = new Array(1,2,3,4,5); // Using the Array constructor
// console.log(array[0]); // 0


// Array methods

// myArray.push(6); // Adds 6 to the end of the array
// myArray.pop(); // Removes the last element (8)

// myArray.unshift(7); // Adds 7 to the beginning of the array
// myArray.shift(); // Removes the first element (0)

// console.log(myArray.includes(3)); // true, checks if 3 is in the array
// console.log(myArray.indexOf(3)); // 2, returns the index of 3

const newArr = myArray.join(); // Converts the array to a string
// console.log(newArr); // "1,2,3,4,5"

// console.log(myArray); // [1, 2, 3, 4, 5]
// console.log(typeof newArr); // "string"

// slice and splice methods

console.log("A", myArray); // [1, 2, 3, 4, 5]

const myn1 = myArray.slice(1,3); // Returns a shallow copy of a portion of the array

console.log(myn1); // [2, 3]
console.log("B", myArray); // [1, 2, 3, 4, 5]        


const myn2 = myArray.splice(1,3); // Changes the contents of an array by removing or replacing existing elements and/or adding new elements
console.log("C", myArray); // [1, 5] 
console.log(myn2);