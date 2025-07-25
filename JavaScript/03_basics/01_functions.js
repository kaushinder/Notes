// Functions in JavaScript

function printName(){
    console.log("Kaushinder Singh Raghav");
}
// printName();

// function addTwoNumbers(a, b){
//     console.log(a + b);
// } 
//a, b are parameters

// addTwoNumbers(5, 10); // This will output 15
// addTwoNumbers(5, "10"); // This will concatenate the string "10" with the number 5, resulting in "510"

//5, 10 are arguments



function addTwoNumbers(a, b){
    // let res = a + b;
    // return res;
    return a + b; // This will return the sum of a and b
}

const result = addTwoNumbers(5, 10);
// console.log("result : ", result); // This will output 15

function loginUserMessage(username = "ksr"){
    if(!username){
        console.log("Username is required");
        return;
        
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Kaushinder Singh Raghav")); // This will output "Kaushinder Singh Raghav just logged in"
// console.log(loginUserMessage("kaushinder")); // This will output "kaushinder just logged in"

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(100, 200, 400, 500));


const user = {
    username: "ksr",
    age: 25
}

function handleObject(anyObject){
    // console.log(`Username is : ${anyObject.username} and age is: ${anyObject.age}`);
    
}
// handleObject(user); // This will output "Username is: ksr and age is : 100"

handleObject({
    username: "Kaushinder Singh Raghav",
    age: 25
})

const myNewArr = [1, 2, 3, 4, 5];

function returnSecondValue(getArr){
    return getArr[1];
}
// console.log(returnSecondValue(myNewArr)); // This will output 2
console.log(returnSecondValue([10, 20, 30, 40, 50])); // This will output 20
