const score = 400;
// console.log(score); // Outputs: 400


const balance = new Number(100);
// console.log(balance); // Outputs: [Number: 100]

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // Outputs: '100.00' (fixed to 2 decimal places)

const otherNumber = 23.89363;
// console.log(otherNumber.toPrecision(3)); // Outputs: '23.89' (rounded

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // Outputs: '1,000,000'


// +++++++++ MATHS +++++++++

// console.log(Math); // Outputs: [Math: Math object with various properties and methods]
// console.log(Math.abs(-5)); // Outputs: 5 (absolute value)
// console.log(Math.round(4.7)); // Outputs: 5 (rounds to nearest integer)
// console.log(Math.ceil(4.1)); // Outputs: 5 (rounds up)
// console.log(Math.floor(4.9)); // Outputs: 4 (rounds down)
// console.log(Math.max(1, 2, 3, 4, 5)); // Outputs: 5 (maximum value)
// console.log(Math.min(1, 2, 3, 4, 5)); // Outputs: 1 (minimum value)

// console.log(Math.sqrt(16)); // Outputs: 4 (square root)
// console.log(Math.pow(2, 3)); // Outputs: 8 (2 raised to the power of 3)
// console.log(Math.PI); // Outputs: 3.141592653589793 (value of Pi)

console.log(Math.random()); // Outputs a random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // Outputs a random integer between 0 and 9 (inclusive)

// console.log(Math.floor(Math.random() * 10)+1); Outputs a random integer between 1 and 10 (inclusive)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Outputs a random integer between 10 and 20 (inclusive)
