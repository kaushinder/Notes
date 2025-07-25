// primitive data types

// 7 types : String, Number, BigInt, Boolean, Symbol, null, undefined

const score = 100; // Number
const scoreValue = 100.3; // Number

const isPassed = true; // Boolean
const outsideTemp = null; // null
let userName; // undefined

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123'); // Symbol

console.log(id === anotherId); // false


const bigNumber = 1234567890123456789012345678901234567890n; // BigInt
console.log(bigNumber + 1n); // BigInt addition
// console.log(bigNumber + 1); // TypeError: Cannot mix BigInt and other types

// reference data types(Non-primitive data types)

// Object, Array, Function

const heros = ['Thor', 'Ironman', 'Hulk']; // Array
const user = {
  name: 'John',
  age: 30,
  isAdmin: true,
}; // Object   


// Function
function greet() {
  console.log('Hello!');
}   


// console.log(typeof greet); // function
// console.log(typeof heros); // object
// console.log(typeof user); // object
// console.log(typeof score); // number
// console.log(typeof isPassed); // boolean
// console.log(typeof outsideTemp); // object (null is considered an object in JavaScript)
// console.log(typeof userName); // undefined
// console.log(typeof id); // symbol
// console.log(typeof bigNumber); // bigint
// console.log(typeof anotherId); // symbol
// console.log(typeof scoreValue); // number
// console.log(typeof null); // object (this is a known quirk in JavaScript)
// console.log(typeof undefined); // undefined


// ++++++++++++++++++++++

// stack (prmitive data types) vs heap (reference(non-primitive) data types)

// Stack: stores primitive data types (fixed size, fast access)
// Heap: stores reference data types (dynamic size, slower access)  

let myYotubename = 'kaushinder'; // Stack

let anotherName = myYotubename;
anotherName = 'kaushinder Singh'; // Changing anotherName does not affect myYotubename
console.log(anotherName); // Output: kaushinder Singh
console.log(myYotubename); // Output: kaushinder

let useOne = {
  email: "kaushinder@gmail.com",
  upi: "kaushinder@upi",
}

let userTwo = useOne;
userTwo.email = "ksr@gmail.com"; // Changing userTwo affects useOne
console.log(userTwo.email); 
console.log(useOne.email); 

// stack vs heap summary:
// stack uses copy of data, while heap uses reference to data and heap chnages in original data will reflect in all references

