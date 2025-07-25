let score = "33";

// console.log(typeof score); // number
// console.log(typeof "hello"); // string

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN (Not a Number)


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN


let isLoggedIn = 1;

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true

// 1 => true
// 0 => false
// "kaushinder" => true
// "" => false


let someNumber = 22;

// let stringNumber = String(someNumber);
// console.log(typeof stringNumber); // string
// console.log(stringNumber); // "22"



// ********* Oprations ***********

let value = 3;
let negValue = -value;
// console.log(negValue); // -3

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 8 (exponentiation)
// console.log(2/3); // 0.6666666666666666
// console.log(2%2); // 0 (modulus)

let str1 = "hello";
let str2 = " world";
let str3 = str1 + str2; // string concatenation
// console.log(str1 + str2); // "hello world"
// console.log(str3); // "hello world"

// console.log("1"+2); // "12" (string concatenation)
// console.log(1+"2"); // "12" (string concatenation)
// console.log(1+2+"3"); // "33" (string concatenation)
// console.log("1"+2+"3"); // "123" (string concatenation)
// console.log(1+2+3); // 6 (number addition)
// console.log("1"+2+3); // "123" (string concatenation)

// console.log(+true);
// console.log(+"");

let num1, num2, num3 = 3;
// console.log(num1, num2, num3);  // undefined undefined 3

let gameCounter = 100;
gameCounter++;
++gameCounter; // increment by 1
gameCounter += 1; // increment by 1
gameCounter = gameCounter + 1; // increment by 1
// console.log(gameCounter); // 104 
gameCounter--; // decrement by 1
--gameCounter; // decrement by 1
gameCounter -= 1; // decrement by 1
gameCounter = gameCounter - 1; // decrement by 1
// console.log(gameCounter); // 100